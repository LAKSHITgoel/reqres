import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../action/authAction";
import { bindActionCreators } from "redux";

const leftLink = [
  {
    name: "Users",
    to: "/"
  }
];
const rightLink = [
  {
    name: "Log In",
    to: "/login"
  }
];

const Navbar = props => {
  return (
    <div className="nav-bar">
      <div className="left-nav">
        {leftLink.map(obj => (
          <div key={obj.name} className="nav-link">
            <NavLink
              exact
              className="link"
              activeClassName="nav-active"
              activeStyle={{ color: "dodgerblue" }}
              to={obj.to}
            >
              {obj.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="right-nav">
        {!props.auth.isLoggedIn ? (
          rightLink.map(obj => (
            <div key={obj.name} className="nav-link">
              <NavLink
                exact
                className="link"
                activeClassName="nav-active"
                activeStyle={{ color: "dodgerblue" }}
                to={obj.to}
              >
                {obj.name}
              </NavLink>
            </div>
          ))
        ) : (
          <div className="nav-link">
            <NavLink
              exact
              className="link"
              activeStyle={{ color: "dodgerblue" }}
              to="/logout"
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
