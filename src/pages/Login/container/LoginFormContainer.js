import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../../action/authAction";
import LoginForm from "../components/LoginForm";

class LoginFormContainer extends React.Component {
  componentDidUpdate(prevProp, prevState) {
    if (
      this.props.auth.isLoggedIn &&
      this.props.auth.isLoggedIn !== prevProp.auth.isLoggedIn
    ) {
      this.props.history.replace("/");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.login(values.username, values.password);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-form-container">
        <Form onSubmit={this.handleSubmit} layout="horizontal">
          <LoginForm getFieldDecorator={getFieldDecorator} />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "loginform" })(LoginFormContainer));
