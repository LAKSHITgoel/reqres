import React, { useState } from "react";
import UsersContainer from "./container/UsersContainer";
import FormContainer from "./container/FormContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers
} from "../../action/usersAction";

const Users = props => {
  const [modalFlag, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [userid, setUserId] = useState(null);
  return (
    <div className="users-container">
      <UsersContainer
        setModal={setModal}
        setModalType={setModalType}
        setUserId={setUserId}
        {...props}
      />
      <FormContainer
        modalFlag={modalFlag}
        modalType={modalType}
        setModal={setModal}
        setModalType={setModalType}
        userid={userid}
        {...props}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createUser,
      updateUser,
      deleteUser,
      getAllUsers
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Users);
