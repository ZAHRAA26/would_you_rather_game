import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";

class QuestionDetails extends Component {
  render() {
    const { question, author } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";
    // console.log(question);
    return (
      <Item.Group>
        <Item>
          <Item.Image size="small" src={`/${avatar}`} />
          <Item.Content className="floatRight">
            <Item.Header as="a">{author.name}</Item.Header>
            <Item.Description>
              <p>asks : would you rather</p>
              <p>{question.optionOne.text}</p>
              or
              <p>{question.optionTwo.text}</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    authedUser,
    question,
    author,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
