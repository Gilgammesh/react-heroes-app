import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreeen from "../components/dc/DcScreeen";
import HeroScreen from "../components/heroes/HeroScreen";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreeen} />
          <Route exact path="/hero/:id" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
