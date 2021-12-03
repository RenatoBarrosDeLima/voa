import React from "react";

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CoverContainer from '../../widgets/CoverContainer';

const Home = () => {
  return (
    <div style={{boxSizing: 'border-box', display:'block'}}>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <CoverContainer />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
