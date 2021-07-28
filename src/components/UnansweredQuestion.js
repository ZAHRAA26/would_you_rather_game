import React, { Component } from "react";
import { connect } from "react-redux";
import { Item, Form, Radio, Button } from "semantic-ui-react";
import { handleAnswerQuestion } from "../actions/questions";
class UnansweredQuestion extends Component {
  state = {
    answer: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ answer: e.target.value });
    const { answer } = this.state;
    this.props.dispatch(
      handleAnswerQuestion({ qid: this.props.id, answer: answer })
    );
  };
  render() {
    const { question, auther } = this.props;
    return (
      <Item.Group>
        <Item>
          <Item.Image size="small" src={`${auther.avatarURL}`} />
          <Item.Content>
            <Item.Header as="a">users[question.author].name</Item.Header>
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
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label={question.optionTwo.text}
                    name="radioGroup"
                    value={question.optionTwo.text}
                  />
                </Form.Field>
              </Form>
            </Item.Description>
          </Item.Content>
          <Button
            content="Submit Question Answer"
            primary
            onClick={(e) => this.handleSubmit(e)}
          />
        </Item>
      </Item.Group>
    );
  }
}
function mapStateToProps({ users, questions }, { match }) {
  const { id } = match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    question,
    author,
    users,
    id,
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
