import React from "react";
import Cards from "../Cards/Cards";
import Clients from "../Table/Clients";
import Orders from "../Table/Orders";
import Movers from "../Table/Movers";
import "./MainDash.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Admin Dashboard</h1>
      <Cards />
      <Switch>      
        <Route path='/orders'>
          <Orders />
        </Route>
        <Route path='/movers'>
          <Movers />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
    </Switch>
      {/* <Orders />
      <Movers/>
      <Clients/> */}
    </div>
  );
};

export default MainDash;
