import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Donation from "../pages/Donation";
import FinishDonation from "../pages/FinishDonation";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProofPayment from "../pages/ProofPayment";
import Campaigns from "../pages/Campaigns";
import Donors from "../pages/Donors";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/campanha/:id" component={Donation} />
        <Route path="/finish" component={FinishDonation} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/comprovante" component={ProofPayment} />
        <Route path="/minhas-campanhas" component={Campaigns} />
        <Route path="/doadores/:id" component={Donors} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
