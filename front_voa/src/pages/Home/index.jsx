import React from "react";

import Header from '../../layout/HeaderHome';
import Footer from '../../layout/Footer';
import CoverContainer from '../../components/CoverContainer';
import Session from '../../components/Session';
import Campaigns from '../../components/Campaigns';
import ButtonAllCampaigns from '../../components/ButtonAllCampaigns';
import {
  Container,
  Content
} from './styles'


const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CoverContainer />
        <Session title={"Vaquinhas em Destaque"} />
        <Campaigns />
        <ButtonAllCampaigns />
        <Session title={"Vaquinhas que Voaram"} />
        <Campaigns />
        <Footer />
      </Content>
    </Container>
  )
}

export default Home;
