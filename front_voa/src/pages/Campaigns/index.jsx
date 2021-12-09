import React, { useState, useEffect } from 'react';

// API
import api from '../../services/api';

// COMPONENTES
import Header from '../../layout/Header';
import Loading from '../../components/LoadingScreen';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Content,
  Body,
  Image,
  TextH1,
  TextP,
  Button,
} from './styles';

// HOOKS
import { useAuth } from '../../hooks/useAuth';

const Campaigns = () => {

  const { getAuth } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = getAuth();

  useEffect(() => {

    const body = {
      user_id: user.id
    };

    setLoading(true);

    api.post(`/campaigns/campaignSearchUserAll`, {
      ...body
    })
      .then(response => {
        setCampaigns(response?.data);
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
          {campaigns?.map(campaign => {
            return (
              <Body>
                <Image src={campaign?.image} />
                <TextH1>{campaign?.title}</TextH1>
                <TextP>{campaign?.description}</TextP>
                <Button>Acessar</Button>
              </Body>
            )
          })}
        </Content>
      </Container>
    </>
  )
}

export default Campaigns;
