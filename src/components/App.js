import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import SignIn from "./SignIn";
import { handleInitialData } from "../actions/share";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import NotFoundPage from "./NotFoundPage";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import "../App.css";
import UnansweredQuestion from "./UnansweredQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="container">
            <Nav />
            <div className="main-content">
              <Switch>
                <Route path="/" exact component={SignIn} />
                <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                <ProtectedRoute path="/add" exact component={NewQuestion} />
                <ProtectedRoute
                  path="/question/:id"
                  component={AnsweredQuestionDetails}
                />
                <ProtectedRoute
                  path="/question/:id"
                  component={UnansweredQuestion}
                />
                <ProtectedRoute path="/leaderboard" component={LeaderBoard} />
                <Route path="/not-found" component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
