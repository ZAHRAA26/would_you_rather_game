import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthedUser, setAuthedUser } from "../actions/authedUser";
import { Redirect, useLocation } from "react-router-dom";

function SignIn(props) {
  const [userID, setUserID] = useState(null);
  const [directHome, setDirectHome] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();
  useEffect(() => {
    dispatch(clearAuthedUser());
  }, [dispatch]);
  const users = useSelector((state) => state.users);
  const { from } = state || { from: { pathname: "/dashboard" } };
  const selected = userID ? userID : -1;
  console.log(from);
  if (directHome) {
    return <Redirect push to={from} />;
  }
  const handleSignIn = () => {
    dispatch(setAuthedUser(userID));
    setDirectHome(true);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserID(e.target.value);
  };
  return (
    <div className="container">
      <h3>Welcome To Would You Rather Game</h3>
      <select
        id="login-select"
        value={selected}
        onChange={(event) => handleChange(event)}
      >
        <option value="-1" disabled>
          Select user...
        </option>
        {Object.keys(users).map((key) => (
          <option value={users[key].id} key={key}>
            {users[key].name}
          </option>
        ))}
      </select>
      <br />
      <button
        type="button"
        disabled={userID === null}
        className="btn btn-primary btn-lg"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
