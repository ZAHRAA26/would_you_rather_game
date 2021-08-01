import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Item, Form, Radio, Button, Image } from "semantic-ui-react";
import { handleAnswerQuestion } from "../actions/questions";
class UnansweredQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }

  onValueChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.answer);
    const { answer } = this.state;
    const { authedUser, id, dispatch } = this.props;
    dispatch(handleAnswerQuestion({ id, answer, authedUser }));
    return <Redirect to="/dashboard" />;
  };
  render() {
    const { question, author, users } = this.props;
    const avatar = author.avatarURL ? author.avatarURL : "placeholder.png";
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
                {/* <Form.Field>
                          Selected value: <b>{this.state.value}</b>
                        </Form.Field> */}
                <Form.Field>
                  <Radio
                    label={question.optionOne.text}
                    name="radioGroup"
                    value={question.optionOne.text}
                    checked={this.state.answer === question.optionOne.text}
                    onChange={this.onValueChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label={question.optionTwo.text}
                    name="radioGroup"
                    value={question.optionTwo.text}
                    checked={this.state.answer === question.optionTwo.text}
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
          />
        </Item>
      </Item.Group>
    );
  }
}
function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const authed = users[authedUser];

  return {
    authed,
    question,
    author,
    users,
    id,
    authedUser,
  };
}
export default connect(mapStateToProps)(UnansweredQuestion);
