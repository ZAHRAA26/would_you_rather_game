import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, BrowserRouter } from "react-router-dom";
import { Button, Item } from "semantic-ui-react";

class QuestionDetails extends Component {
  render() {
    const { question, author } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";
    return (
      <BrowserRouter>
        <div>
          <Item.Group>
            <Item>
              <Item.Image size="small" src={`/${avatar}`} />
              <Item.Content className="floatRight">
                <p>{author.name}</p>
                <Item.Description>
                  <p>asks : would you rather</p>
                  <p>{question.optionOne.text}</p>
                  or
                  <p>{question.optionTwo.text}</p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <Button>view</Button>
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
