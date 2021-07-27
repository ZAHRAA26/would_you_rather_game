import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { clearAuthedUser } from "../actions/authedUser";

function Nav(props) {
  const dispatch = useDispatch();

  const { user } = props;
  useEffect(() => {
    dispatch(clearAuthedUser);
  }, [dispatch, user]);
  const avatar = user ? user.avatarURL : "placeholder.png";
  const name = user ? user.name : "";
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/dashboard" exact activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leader Board
          </NavLink>
        </li>
        {props.authedUser && (
          <li>
            <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            {name}
          </li>
        )}
      </ul>
    </nav>
  );
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
    user: users[authedUser],
  };
}
export default connect(mapStateToProps)(Nav);
