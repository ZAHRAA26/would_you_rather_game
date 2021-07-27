import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Button, Form } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText));
    this.setState({
      ...this.state,
      optionOneText: "",
      optionTwoText: "",
    });
  };
  handleChange = (event, option) => {
    if (option === "optionOne")
      this.setState({ ...this.state, optionOneText: event.target.value });
    else this.setState({ ...this.state, optionTwoText: event.target.value });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit} action="/dashboard">
        <Header as="h2">Create New Question</Header>
        <Header as="h4">Would You Rather ...</Header>
        <Form.Field>
          <label for="optionOne">Option One</label>
          <input
            type="text"
            id="optionOne"
            name="optionOne"
            value="optionOne"
            placeholder="Please enter the first option"
            onChange={(event) => this.handleChange(event, "optionOne")}
          />
        </Form.Field>
        <Form.Field>
          <label for="optionTwo">Option Two</label>
          <input
            type="text"
            id="optionTwo"
            name="optionTwo"
            value="optionTwo"
            placeholder="Please enter the second option"
            onChange={(event) => this.handleChange(event, "optionTwo")}
          />
        </Form.Field>

        <Button type="submit" onClick={this.handleSubmit}>
          {" "}
          Add Question
        </Button>
      </Form>
    );
  }
}

export default connect()(NewQuestion);
