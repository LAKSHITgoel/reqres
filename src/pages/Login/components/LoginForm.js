import React from "react";
import { Form, Icon, Input, Button } from "antd";

const LoginForm = ({ getFieldDecorator }) => {
  return (
    <>
      <Form.Item label="Username">
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        )}
        <small>username: eve.holt@reqres.in</small>
      </Form.Item>
      <Form.Item label="Password">
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
        <small>password: pistol</small>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </>
  );
};

export default LoginForm;
