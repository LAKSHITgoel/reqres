import React from "react";
import LoginFormContainer from "./container/LoginFormContainer";
import Main from "./container/Main";

const Login = props => {
  return (
    <Main>
      <LoginFormContainer {...props} />
    </Main>
  );
};

export default Login;
