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
          <NavLink to="/dashboard" exact activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leader Board
          </NavLink>
        </li>
        {props.authedUser && (
          <li className="liImage">
            <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            {name} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/" exact activeClassName="active">
              <span>Logout</span>
            </NavLink>
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
