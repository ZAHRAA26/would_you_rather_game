import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Button, Form } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const authedUser = this.props.authedUser;
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(
      handleAddQuestion(optionOneText, optionTwoText, authedUser)
    );
    this.setState({
      ...this.state,
      optionOneText: "",
      optionTwoText: "",
      toHome: true,
    });
  };
  handleChange = (event, option) => {
    if (option === "optionOne")
      this.setState({ ...this.state, optionOneText: event.target.value });
    else this.setState({ ...this.state, optionTwoText: event.target.value });
  };
  render() {
    if (this.state.toHome) {
      //console.log('redirecting...')
      return <Redirect to="/dashboard" />;
    }
    return (
      <Form onSubmit={this.handleSubmit} action="/dashboard">
        <Header as="h2">Create New Question</Header>
        <Header as="h4">Would You Rather ...</Header>
        <Form.Field>
          <label htmlFor="optionOne">Option One</label>
          <input
            type="text"
            id="optionOne"
            name="optionOne"
            value={this.state.optionOneText}
            placeholder="Please enter the first option"
            onChange={(event) => this.handleChange(event, "optionOne")}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="optionTwo">Option Two</label>
          <input
            type="text"
            id="optionTwo"
            name="optionTwo"
            value={this.state.optionTwoText}
            placeholder="Please enter the second option"
            onChange={(event) => this.handleChange(event, "optionTwo")}
          />
        </Form.Field>

        <Button type="submit" onClick={this.handleSubmit}>
          Add Question
        </Button>
      </Form>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewQuestion);
