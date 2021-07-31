import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";

class QuestionDetails extends Component {
  render() {
    const { questionList, users } = this.props;
    console.log(questionList);
    return (
      <Item.Group>
        {questionList &&
          questionList.map((q) => (
            <Item key={q.id}>
              <Item.Image size="small" src={`${users[q.auther].avatarURL}`} />
              <Item.Content>
                <Item.Header as="a">users[q.author].name</Item.Header>
                <Item.Description>
                  <p>asks : would you rather</p>
                  <p>{q.optionOne.text}</p>
                  or
                  <p>{q.optionTwo.text}</p>
                </Item.Description>
              </Item.Content>
              {/* <Button
              content="View Question"
              primary
              onClick={this.viewQuestion(q.id)}
            /> */}
              <Link to={`question/${q["id"]}`}>
                <AnsweredQuestionDetails id={q.id} />
              </Link>
            </Item>
          ))}
      </Item.Group>
    );
  }
}

function mapStateToProps({ authedUser, users, questionList }) {
  return {
    questionList,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
