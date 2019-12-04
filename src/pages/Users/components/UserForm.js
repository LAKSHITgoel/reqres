import React from "react";
import { Form, Input, Button } from "antd";

class UserForm extends React.Component {
  componentDidUpdate(prevProp) {
    const { setFieldsValue } = this.props.form;
    const { modalType, modalFlag } = this.props;
    console.log(modalType);
    if (modalType === "Create" && modalFlag !== prevProp.modalFlag) {
      setFieldsValue({
        first_name: "",
        last_name: "",
        email: ""
      });
    } else if (modalType === "Update" && modalFlag !== prevProp.modalFlag) {
      const { first_name, last_name, email } = this.props.users.users[
        this.props.userid - 1
      ];
      setFieldsValue({
        first_name,
        last_name,
        email
      });
    }
  }

  create = () => {
    const { validateFields } = this.props.form;
    validateFields((err, val) => {
      if (!err) {
        this.props.createUser(val);
        this.props.setModal(false);
      }
    });
  };

  update = () => {
    const { validateFields } = this.props.form;
    validateFields((err, val) => {
      if (!err) {
        this.props.updateUser({ id: this.props.userid, ...val });
        this.props.setModal(false);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        <Form.Item label="First Name">
          {getFieldDecorator("first_name", {
            rules: [{ required: true, message: "Enter First Name" }]
          })(<Input name="first_name" />)}
        </Form.Item>
        <Form.Item label="Last Name">
          {getFieldDecorator("last_name", {
            rules: [{ required: true, message: "Enter Last Name" }]
          })(<Input name="last_name" />)}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Enter Email" }]
          })(<Input name="email" />)}
        </Form.Item>
        <div className="form-button">
          <Button onClick={() => this.props.setModal(false)}>Cancel</Button>
          {this.props.modalType === "Create" ? (
            <Button onClick={this.create} type="primary">
              Create
            </Button>
          ) : (
            <Button onClick={this.update} type="primary">
              Update
            </Button>
          )}
        </div>
      </Form>
    );
  }
}

export default Form.create({ name: "user-form" })(UserForm);
