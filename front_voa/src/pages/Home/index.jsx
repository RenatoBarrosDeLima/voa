import React from "react";

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CoverContainer from '../../components/CoverContainer';
import Session from '../../components/Session';
import Campaigns from '../../components/Campaigns';
import ButtonAllCampaigns from '../../components/ButtonAllCampaigns';


const Home = () => {
  return (
    <div style={{boxSizing: 'border-box', display:'block'}}>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <CoverContainer />
        <Session title={"Vaquinhas em Destaque"}/>
        <Campaigns />
        <ButtonAllCampaigns />
        <Session title={"Vaquinhas que Voaram"}/>
        <Campaigns />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
