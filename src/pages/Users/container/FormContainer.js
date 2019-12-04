import React from "react";
import { Modal } from "antd";
import UserForm from "../components/UserForm";

const FormContainer = props => {
  return (
    <div>
      <Modal
        title={`${props.modalType} User`}
        visible={props.modalFlag}
        onCancel={() => props.setModal(false)}
        footer={false}
      >
        <UserForm
          modalFlag={props.modalFlag}
          modalType={props.modalType}
          setModal={props.setModal}
          {...props}
        />
      </Modal>
    </div>
  );
};
export default FormContainer;
