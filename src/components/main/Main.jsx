import React from "react";
import { Route } from "react-router-dom";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import "./main.scss";
import Arrivals from "../main/subComponent/button/Arrivals";
import Departures from "../main/subComponent/button/Departures";
import TableList from "./subComponent/table/TableFly";

const Main = () => {
  return (
    <section className="main-section">
      <div className="buttons-fly">
        <Departures />
        <Arrivals />
      </div>
      <ErrorBoundry>
        <Route path="/:direction" component={TableList} />
      </ErrorBoundry>
    </section>
  );
};

export default Main;
