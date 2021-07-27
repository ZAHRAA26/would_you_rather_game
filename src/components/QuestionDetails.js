import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import { Form, Radio } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
class QuestionDetails extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  viewQuestion = (q) => {
    return <Redirect to={`question/${q["id"]}`} />;
  };
  render() {
    const { newListQuestions, users } = this.props;
    console.log(newListQuestions);
    return (
      <Item.Group>
        {newListQuestions.map((q) => (
          <Item>
            <Item.Image size="small" src={`${users[q.auther].avatarURL}`} />
            <Item.Content>
              <Item.Header as="a">users[q.author].name</Item.Header>
              <Item.Description>
                <p>asks : would you rather</p>
                <Form>
                  <Form.Field>
                    Selected value: <b>{this.state.value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label={q.optionOne.text}
                      name="radioGroup"
                      value={q.optionOne.text}
                      checked={this.state.value === `${q.optionOne.text}`}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label={q.optionTwo.text}
                      name="radioGroup"
                      value={q.optionTwo.text}
                      checked={this.state.value === `${q.optionTwo.text}`}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Form>
              </Item.Description>
            </Item.Content>
            <Button
              content="View Question"
              primary
              onClick={this.viewQuestion(q)}
            />
          </Item>
        ))}
      </Item.Group>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { questionList }) {
  console.log(questionList);
  // const qIDS = Object.keys(questionList);
  const newListQuestions = questionList;
  // qIDS.forEach((qID) => {
  // newListQuestions.push(questions.filter((q) => q.id === qID));

  return {
    authedUser,
    newListQuestions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
