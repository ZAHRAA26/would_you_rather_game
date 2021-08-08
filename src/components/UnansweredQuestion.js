import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Item, Form, Radio, Button, Image } from "semantic-ui-react";
import { handleSaveQuestionAnswer } from "../actions/users";
class UnansweredQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      toHome: false,
    };
  }

  onValueChange = (event, { value }) => {
    this.setState({
      answer: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.answer);
    if (this.state.answer !== "") {
      const { answer } = this.state;
      const { authedUser, question, dispatch } = this.props;
      const qid = question.id;
      dispatch(handleSaveQuestionAnswer(authedUser, qid, answer));
    }
    this.setState({ toHome: true });
  };
  render() {
    if (this.state.toHome) {
      return <Redirect to="/dashboard" />;
    }
    const { question, author, users } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";
    const { answer } = this.state;
    return (
      <Item.Group>
        <Item>
          {console.log(question)}
          <Image src={`/${avatar}`} size="small" />
          <Item.Content>
            <Item.Header as="a">{users[question.author].name}</Item.Header>
            <Item.Description>
              <p>asks : would you rather</p>
              <Form>
                <Form.Field>
                  <Radio
                    label={question.optionOne.text}
                    name="radioGroup"
                    value="optionOne"
                    checked={answer === "optionOne"}
                    onChange={this.onValueChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label={question.optionTwo.text}
                    name="radioGroup"
                    value="optionTwo"
                    checked={answer === "optionTwo"}
                    onChange={this.onValueChange}
                  />
                </Form.Field>
              </Form>
            </Item.Description>
          </Item.Content>
          <Button
            content="Submit Question Answer"
            primary
            onClick={this.handleSubmit}
            disabled={this.state.answer === ""}
          />
        </Item>
      </Item.Group>
    );
  }
}
function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    question,
    author,
    users,
    id,
    authedUser,
  };
}
export default connect(mapStateToProps)(UnansweredQuestion);
