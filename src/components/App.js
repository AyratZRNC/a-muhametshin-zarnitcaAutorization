import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/Login";
import MainPage from "./pages/MainPage";
import ProtectedRouter from "./utils/ProtectedRouter";
import auth from "./utils/auth";
import AppBar from "./common/AppBar";

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route exact path="/auth" component={SignIn} />
          <ProtectedRouter
            path="/"
            redirectCondition={auth.isAuthenticated()}
            redirectPath="/auth"
            component={MainPage}
          />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
