import React, { useState, useEffect } from "react";

// API
import api from '../../services/api';

// COMPONENTES
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CoverContainer from '../../components/CoverContainer';
import Session from '../../components/Session';
import Campaigns from '../../components/Campaigns';
import ButtonAllCampaigns from '../../components/ButtonAllCampaigns';
import Loading from '../../components/LoadingScreen';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Content
} from './styles'


const Home = () => {

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    api.get("/campaigns")
      .then(response => {
        setCampaigns(response?.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Erro ao listar as campanhas.');
      })
  }, [])



  return (
    <Container>
      <Loading loading={loading} />
      <Header />
      <Content>
        <CoverContainer />
        <Session title={"Vaquinhas em Destaque"} />
        <Campaigns campaigns={campaigns} />
        <ButtonAllCampaigns />
        <Session title={"Vaquinhas que Voaram"} />
        <Campaigns />
        <Footer />
      </Content>
    </Container>
  )
}

export default Home;
