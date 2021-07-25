import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { clearAuthedUser, setAuthedUser } from "../actions/authedUser";
import { Redirect, useLocation } from "react-router-dom";

function SignIn(props) {
  const [userID, setUserID] = useState(null);
  const [directHome, setDirectHome] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();
  useEffect(() => {
    dispatch(clearAuthedUser);
  });
  const handleSignIn = () => {
    dispatch(setAuthedUser(userID));
    setDirectHome(true);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserID(e.target.value);
  };
  const { from } = state || { from: { pathname: "/dashboard" } };
  const selected = userID ? userID : -1;

  //if authenticated
  if (directHome) {
    return <Redirect to={from} />;
  }
  return (
    <div mb-3 className="centered">
      <Form.Select
        // aria-label="Default select example"
        value={selected}
        OnChange={(Event) => handleChange(Event)}
      >
        <option value="-1" disabled>
          Select User
        </option>
        {Object.keys(props.users).map((key) => (
          <option value={props.users[key].id} key={key}>
            {props.users[key].name}
          </option>
        ))}
      </Form.Select>
      <button
        type="button"
        disabled={userID === null}
        class="btn btn-primary btn-lg"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(SignIn);
