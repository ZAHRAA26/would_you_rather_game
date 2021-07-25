import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "home",
      answeredQuestions: [],
      unansweredQuestions: [],
    };
  }

  showQuestions = () => {
    const { questions, authedUser } = this.props;
    let answered = [];
    questions.filter((q) => {
      answered =
        q.optionOne.votes.indexOf(authedUser) > -1 ||
        q.optionTwo.votes.indexOf(authedUser) > -1;
    });
    return this.state.key === "Unanswered Questions" ? !answered : answered;
  };
  // showUnanswered = () => {
  //   return this.state.unansweredQuestions;
  // };
  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={(k) => this.setState({ key: k })}
        className="mb-3"
      >
        <Tab
          eventKey="Unanswered Questions"
          title="Unanswered Questions"
          onClick={this.showAnswered()}
        >
          <QuestionDetails questionList={this.state.showQuestions} />
        </Tab>
        <Tab
          eventKey="Answered Questions"
          title="Answered Questions"
          onClick={this.showUnanswered()}
        >
          <QuestionDetails questionList={this.state.showQuestions} />
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
