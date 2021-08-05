import React, { Component } from "react";
import { Header, Image, Progress } from "semantic-ui-react";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import UnansweredQuestion from "./UnansweredQuestion";
import authedUser from "./../reducers/authedUser";
class AnsweredQuestionDetails extends Component {
  render() {
    const {
      question,
      authed,
      authedUser,
      author,
      state,
      firstPercentage,
      secondPercentage,
      firstNumber,
      secondNumber,
      answer,
    } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";
    if (!question) {
      return <Redirect to="/not-found" />;
    }
    return state ? (
      <div className="container">
        <Image src={`/${avatar}`} size="small" />
        <Header as="h2">{author.name} asks</Header>
        <Header as="h3">Would You Rather</Header>
        <Row>
          {question.optionOne.text}
          <Progress
            percent={firstPercentage}
            progress="percent"
            color="teal"
          ></Progress>
          <p>{`${firstNumber} out of 3`}</p>
          {answer === "optionOne" ? "voted" : "notVoted"}
        </Row>
        <Row></Row>
        <Row>
          {question.optionTwo.text}
          <Progress
            percent={secondPercentage}
            progress="percent"
            color="teal"
          ></Progress>
          <p>{`${secondNumber} out of 3`}</p>
          {answer === "optionTwo" ? "voted" : "notVoted"}
        </Row>
      </div>
    ) : (
      <UnansweredQuestion id={question.id} />
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, props) {
  debugger;
  const { id } = props.match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const authed = users[authedUser];
  const firstNumber = question && question.optionOne.votes.length;
  const secondNumber = question && question.optionTwo.votes.length;
  const state =
    question.optionOne.votes.indexOf(authedUser) > -1 ||
    question.optionTwo.votes.indexOf(authedUser) > -1;
  const firstPercentage = (
    (firstNumber / (firstNumber + secondNumber)) *
    100
  ).toFixed(1);
  const secondPercentage = (
    (secondNumber / (firstNumber + secondNumber)) *
    100
  ).toFixed(1);
  const answer = users[authedUser].answers[id];
  return {
    question,
    author,
    state,
    authed,
    firstNumber,
    secondNumber,
    answer,
    firstPercentage,
    secondPercentage,
  };
}

export default connect(mapStateToProps)(AnsweredQuestionDetails);
