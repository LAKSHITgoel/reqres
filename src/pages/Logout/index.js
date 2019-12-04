import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../action/authAction";

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <div>LoggedOut</div>;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
