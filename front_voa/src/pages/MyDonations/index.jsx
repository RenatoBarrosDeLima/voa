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

const MyDonations = () => {


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
      user_id: user.id
    };

    setLoading(true);
    api.post(`/donations/donationSearchUser`, {
      ...body
    })
      .then(response => {
        if (response?.data.length > 0) {
          setDonations(response?.data);
        }
        else {
          setDonations([]);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao listar suas doações!');
      })
  };

  const handleReverse = (donation) => {
    const body = {
      id: donation.id,
      reversal: 1,
      status: 0
    };

    setLoading(true);
    api.put(`/donations`, {
      ...body
    })
      .then(response => {
        getDonations();
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

    console.log(body)

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
                <TextP> {totalDonations(donations)} </TextP>
              </GridTitleCenter>
            </GridTitle>

            <GridRow>
              {donations.map(donation => {
                return (
                  <>
                    <Row>
                      <Col>
                        <Image src="https://voaa.me/images/profile.jpg" />
                        <Info>
                          <TextH3> {moneyFormat(donation.value)} </TextH3>
                          <TextH5> {daysPast(donation?.created_at)} </TextH5>
                        </Info>
                      </Col>

                      <Col>
                        {donation?.reversal == 1 && (
                          <Label> Estornado </Label>
                        )
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

export default MyDonations;
