import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Donation from "../pages/Donation";
import FinishDonation from "../pages/FinishDonation";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/campanha/:id" component={Donation} />
        <Route path="/finish" component={FinishDonation} />
      </Switch>
    </BrowserRouter>

  )
}

export default Routes;
