import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "./Account";
import News from "./News";
import ProtectedRouter from "../utils/ProtectedRouter";
import MainContent from "../common/MainContent";

class MainPage extends Component {
  render() {
    const userName = localStorage.getItem("userName");

    return (
      <div>
        <Switch>
          <Route path="/account" component={Account} />

          <ProtectedRouter
            path="/news"
            redirectCondition={userName === "admin"}
            redirectPath="/"
            component={News}
          />
          <MainContent />

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
