import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

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
          <div className="container">
            <li className="liImage">
              <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
              {name}
            </li>
          </div>
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
