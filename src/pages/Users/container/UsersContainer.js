import React from "react";
import UsersTable from "../components/UsersTable";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { page } = this.props;
    let p = page;
    if (page === undefined) {
      p = 0;
    }
    this.props.getAllUsers(p + 1);
  }

  render() {
    return <UsersTable {...this.props} users={this.props.users} />;
  }
}
export default UsersContainer;
