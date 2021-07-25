import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
function Nav(props) {
  const { user } = props;
  const avatar = user ? user.avatarURL : "placeholder.png";
  const name = user ? user.name : "";
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          {name}
        </li>
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
