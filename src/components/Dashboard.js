import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "Unanswered Questions",
    };
  }

  showQuestions = () => {
    const { listQuestions, authedUser } = this.props;
    console.log(listQuestions);
    const answered = listQuestions.filter(
      (q) =>
        q.optionOne.votes.indexOf(authedUser) > -1 ||
        q.optionTwo.votes.indexOf(authedUser) > -1
    );
    const sortedAnswered = answered.sort((a, b) => b.timestamp - a.timestamp);
    const sortedUnanswered = !answered.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    return this.state.key === "Unanswered Questions"
      ? sortedUnanswered
      : sortedAnswered;
  };

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={(k) => this.setState({ key: k })}
        className="mb-3"
      >
        <Tab eventKey="Unanswered Questions" title="Unanswered Questions">
          <QuestionDetails questionList={this.showQuestions()} />
        </Tab>
        <Tab eventKey="Answered Questions" title="Answered Questions">
          <QuestionDetails questionList={this.showQuestions()} />
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  const listQuestions = Object.values(questions);
  return {
    authedUser,
    listQuestions,
  };
}

export default connect(mapStateToProps)(Dashboard);
