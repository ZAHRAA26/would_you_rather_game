import React, { Component } from "react";
import { Header, Image, Progress } from "semantic-ui-react";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
class AnsweredQuestionDetails extends Component {
  render() {
    const {
      question,
      authedUser,
      author,
      firstPercentage,
      secondPercentage,
      firstNumber,
      secondNumber,
    } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";

    if (!question) {
      return <Redirect to="/not-found" />;
    }
    return (
      question && (
        // (question.optionOne.votes.indexOf(authedUser) > -1 ||
        //   question.optionTwo.votes.indexOf(authedUser) > -1) ? (
        <div className="container">
          <Image src={`/${avatar}`} size="small" />)
          <Header as="h2">{author.name} asks</Header>
          <Header as="h3">Would You Rather</Header>
          <Row>
            {question.optionOne.text}
            <Progress
              percent={firstPercentage}
              progress="percent"
            >{`${firstNumber} out of 3`}</Progress>
            question&&
            {question.optionOne.votes.indexOf(authedUser) > -1 ? (
              <Badge bg="Voted">Voted</Badge>
            ) : (
              " "
            )}
          </Row>
          <Row>
            {question.optionOne.text}
            <Progress
              percent={secondPercentage}
              progress="percent"
            >{`${secondNumber} out of 3`}</Progress>
            question&&
            {question.optionTwo.votes.indexOf(authedUser) > -1 ? (
              <Badge bg="Voted">Voted</Badge>
            ) : (
              " "
            )}
          </Row>
        </div>
      )
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const authed = users[authedUser];
  const firstNumber = question && question.optionOne.votes.length;
  const secondNumber = question && question.optionTwo.votes.length;
  const firstPercentage = (
    (firstNumber / (firstNumber + secondNumber)) *
    100
  ).toFixed(1);
  const secondPercentage = (
    (secondNumber / (firstNumber + secondNumber)) *
    100
  ).toFixed(1);
  debugger;
  return {
    question,
    author,
    authed,
    firstNumber,
    secondNumber,
    firstPercentage,
    secondPercentage,
  };
}

export default connect(mapStateToProps)(AnsweredQuestionDetails);
