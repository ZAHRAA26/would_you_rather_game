import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, BrowserRouter, Route } from "react-router-dom";
import { Button, Item } from "semantic-ui-react";
import AnsweredQuestionDetails from "./AnsweredQuestionDetails";
import UnansweredQuestion from "./UnansweredQuestion";
import ProtectedRoute from "./ProtectedRoute";

class QuestionDetails extends Component {
  handleClick = () => {
    const { state, question, id } = this.props;
    // this.props.history.push(`/question/${id}`);
    console.log(state);
    return state === "answered" ? (
      <ProtectedRoute
        path={`/question/${id}`}
        render={() => <AnsweredQuestionDetails id={id} />}
      />
    ) : state === "unanswered" ? (
      <ProtectedRoute
        path={`/question/${id}`}
        render={() => <UnansweredQuestion id={id} />}
      />
    ) : null;
  };
  render() {
    const { question, author } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";
    console.log(`123${question.id}`);
    return (
      <BrowserRouter>
        <div>
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
          <Button onClick={this.handleClick}>view</Button>
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, { id, state }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    authedUser,
    question,
    author,
    state,
    id,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionDetails));
