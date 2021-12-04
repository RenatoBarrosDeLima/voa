import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Donation from "../pages/Donation";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/campanha/:id" component={Donation} />
      </Switch>
    </BrowserRouter>

  )
}

export default Routes;
