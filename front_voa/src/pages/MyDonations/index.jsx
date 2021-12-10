import React, { useState, useEffect } from 'react';

// API
import api from '../../services/api';

// FUNCTIONS UTILS
import {
  moneyFormat,
  totalDonations,
  daysPast,
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
  TextP,
  GridRow,
  Row,
  Col,
  Image,
  Info,
  TextH3,
  TextH5,
  Division,
  Label,
} from './styles';


// HOOKS
import { useAuth } from '../../hooks/useAuth';

const MyDonations = () => {


  const { getAuth } = useAuth();
  const user = getAuth();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDonations();
  }, []);


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
