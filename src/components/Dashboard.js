import { connect } from "react-redux";
import QuestionDetails from "./QuestionDetails";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "Unanswered Questions",
    };
  }

  showQuestions = () => {
    const { authedUser, questions } = this.props;
    const listQuestions = Object.values(questions);
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
      ? `<p>${sortedUnanswered}</p>`
      : `<p>${sortedAnswered}</p>`;
  };

  render() {
    const result = this.showQuestions();
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
          onClick={this.showQuestions}
        >
          <p>Unanswered Questions</p>
          {/* {result.map((question) => (
            <li key={question.id}>
              <Link to={`question/${question["id"]}`}>
                <QuestionDetails id={question.id} />
              </Link>
            </li>
          ))} */}
        </Tab>
        <Tab
          eventKey="Answered Questions"
          title="Answered Questions"
          onClick={this.showQuestions}
        >
          <p>Answered Questions</p>
          {/* {result.map((question) => (
            <li key={question.id}>
              <Link to={`question/${question["id"]}`}>
                <QuestionDetails id={question.id} />
              </Link>
            </li>
          ))} */}
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
