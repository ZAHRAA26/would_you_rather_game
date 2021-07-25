import React, { useState } from "react";
import { connect } from "react-redux";
import Question from "./QuestionDetails";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
function Dashboard() {
  const [key, setKey] = useState("home");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Unanswered Questions" title="Unanswered Questions">
        <Question />
      </Tab>
      <Tab eventKey="Answered Questions" title="Answered Questions">
        <Question />
      </Tab>
    </Tabs>
  );
}

function mapStateToProps({ questions, authedUser }) {
  return {
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Dashboard);
