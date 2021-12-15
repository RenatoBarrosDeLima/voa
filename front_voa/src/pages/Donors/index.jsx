import React, { useState, useEffect } from 'react';

// API
import api from '../../services/api';

// FUNCTIONS UTILS
import {
  moneyFormat,
  totalDonations,
  daysPast,
  dateValidation,
  isDonation
} from '../../utils/functions';


// COMPONENTES
import Header from '../../layout/Header';
import Loading from '../../components/LoadingScreen';
import Calendar from '../../components/Calendar';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Content,
  Body,
  GridTitle,
  GridTitleCenter,
  TextH1,
  TextP,
  GridRow,
  Row,
  Col,
  Image,
  Info,
  TextH3,
  TextH4,
  TextH5,
  Division,
  Button,
  Label,
  GridFilter,
  Checkbox,
  ButtonExport,
  Span,
  Export,
} from './styles';


// HOOKS
import { useQuery } from '../../hooks/useQueryURL';
import { useAuth } from '../../hooks/useAuth';

const Donors = () => {


  const { getAuth } = useAuth();
  const user = getAuth();
  const campanha_id = useQuery().get('id');
  const [donations, setDonations] = useState([]);
  const [donationsSaved, setDonationsSaved] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilterDate, setIsFilterDate] = useState(false);
  const [isFilterReversal, setIsFilterReversal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    getDonations();
  }, []);

  useEffect(() => {
    setDonations(donationsSaved);
  }, [isFilterDate])

  const getDonations = () => {

    const body = {
      campaign_id: campanha_id,
      user_id: user.id
    };

    setLoading(true);
    api.post(`/campaigns/campaignSearchUser`, {
      ...body
    })
      .then(response => {
        if (response?.data.length > 0) {
          setDonations(response?.data[0].Donations);
          setDonationsSaved(response?.data[0].Donations);
        }
        else {
          setDonations([]);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao listar a campanha!');
      })
  };

  const handleReverse = (donation) => {
    const payment_string = donation.payment;
    const payment_object = JSON.parse(payment_string);
    const cart = payment_object.transactions[0].related_resources[0].sale.id;
    const body = {
      id: donation.id,
      value: donation.value,
      cart,
      reversal: 1
    };

    setLoading(true);
    api.post(`/paypal/reversal`, {
      ...body
    })
      .then(response => {
        setLoading(false);
        if (response.status === 200) {
          getDonations();
          return window.alert('Estornado com sucesso!');
        }
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao estornar a doação!');
      })

  };

  const handleFilterDate = () => {
    const isDateValid = dateValidation(startDate, endDate);
    if (!isDateValid) {
      return window.alert('Intervalo de datas inválido');
    }

    const body = {
      user_id: user.id,
      campaign_id: campanha_id,
      reversal: isFilterReversal ? 1 : 0,
      start_date: startDate,
      end_date: endDate,
    };

    setLoading(true);
    api.post(`/campaigns/campaignSearchUserFilter`, {
      ...body
    })
      .then(response => {
        if (response?.data.length > 0) {
          setDonations(response?.data[0].Donations);
        }
        else {
          setDonations([]);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao filtrar a campanha!');
      })


  };

  const downloadCSVFromJson = (filename, arrayOfJson) => {
    // convert JSON to CSV
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(arrayOfJson[0]);
    let csv = arrayOfJson.map(row => header.map(fieldName =>
      JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');

    // Create link and download
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Loading loading={loading} />
      <Header />
      <Container>
        <Content>
          <Body>
            <GridTitle>
              <GridTitleCenter>
                <TextH1> Transformadores </TextH1>
                <TextP> {totalDonations(donations)} </TextP>
              </GridTitleCenter>
            </GridTitle>

            <GridFilter>
              <TextH1> Filtro por data </TextH1>
              <Checkbox onChange={() => setIsFilterDate(!isFilterDate)} type="checkbox" />

              {isFilterDate && (
                <Calendar
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  handleFilterDate={handleFilterDate}
                  isFilterReversal={isFilterReversal}
                  setIsFilterReversal={setIsFilterReversal}
                />
              )}

              {isDonation(donations) && (
                <Export>
                  <Span> Clique para:</Span>
                  <ButtonExport onClick={() => downloadCSVFromJson('donations.csv', donations)}> Exportar </ButtonExport>
                </Export>
              )}

            </GridFilter>
            <GridRow>
              {donations.map(donation => {
                return (
                  <>
                    <Row>
                      <Col>
                        <Image src="https://voaa.me/images/profile.jpg" />
                        <Info>
                          <TextH3> {moneyFormat(donation.value)} </TextH3>
                          <TextH4> {donation?.User.name} </TextH4>
                          <TextH5> {daysPast(donation?.created_at)} </TextH5>
                        </Info>
                      </Col>

                      <Col>
                        {donation?.reversal == 0 ? (
                          <Button onClick={() => handleReverse(donation)}> Estornar</Button>
                        ) :
                          <Label> Estornado </Label>
                        }
                      </Col>
                    </Row>
                    <Division />
                  </>
                )
              })}


            </GridRow>
          </Body>
        </Content>
      </Container>
    </>
  )
}

export default Donors;
