import React, { useState, useEffect } from 'react';

// API
import api from '../../services/api';

// FUNCTIONS UTILS
import {
  daysRemaining,
  moneyFormat,
  calculatePercentageNumber,
  calculatePercentageString,
  daysPast
} from '../../utils/functions';


// COMPONENTES
import Header from '../../layout/Header';
import Loading from '../../components/LoadingScreen';

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
  Col,
  Image,
  Info,
  TextH3,
  TextH4,
  TextH5,
  Division,
} from './styles';


// HOOKS
import { useQuery } from '../../hooks/useQueryURL';
import { useAuth } from '../../hooks/useAuth';

const Donors = () => {


  const { getAuth } = useAuth();
  const user = getAuth();
  const campanha_id = useQuery().get('id');
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const body = {
      campaign_id: campanha_id,
      user_id: user.id
    };

    setLoading(true);
    api.post(`/campaigns/campaignSearchUser`, {
      ...body
    })
      .then(response => {
        setDonations(response?.data[0].Donations);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao listar a campanha!');
      })
  }, [])


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
                <TextP> (1220) doações </TextP>
              </GridTitleCenter>
            </GridTitle>

            <GridRow>
              {donations.map(donation => {
                return (
                  <>
                    <Col>
                      <Image src="https://voaa.me/images/profile.jpg" />
                      <Info>
                        <TextH3> {moneyFormat(donation.value)} </TextH3>
                        <TextH4> {donation?.User.name} </TextH4>
                        <TextH5> {daysPast(donation?.created_at)} </TextH5>
                      </Info>
                    </Col>
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
