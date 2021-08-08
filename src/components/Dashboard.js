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
    const { authedUser, questionIds, questions } = this.props;

    const answered = [];
    const unanswered = [];
    questionIds.forEach((qId) => {
      const question = questions[qId];
      if (
        question.optionOne.votes.indexOf(authedUser) > -1 ||
        question.optionTwo.votes.indexOf(authedUser) > -1
      )
        answered.push(questions[qId]);
      else unanswered.push(questions[qId]);
    });
    answered.sort((a, b) => b.timestamp - a.timestamp);
    unanswered.sort((a, b) => b.timestamp - a.timestamp);
    return this.state.key === "Unanswered Questions" ? unanswered : answered;
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
        <Tab eventKey="Unanswered Questions" title="Unanswered Questions">
          {result.map((question) => (
            <li key={question.id}>
              <Link to={`questions/${question["id"]}`}>
                <QuestionDetails id={question.id} />
              </Link>
            </li>
          ))}
        </Tab>
        <Tab eventKey="Answered Questions" title="Answered Questions">
          {result.map((question) => (
            <li key={question.id}>
              <Link to={`questions/${question["id"]}`}>
                <QuestionDetails id={question.id} />
              </Link>
            </li>
          ))}
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questionIds: Object.keys(questions),
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
