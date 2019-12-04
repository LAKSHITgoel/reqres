import React, { Component } from "react";
import "antd/dist/antd.css";
import Routes from "./Routes";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import Navbar from "./common/Navbar";
import { SET_AUTH_USER, REMOVE_USER } from "./constants";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

if (localStorage.getItem("token")) {
  store.dispatch({
    type: SET_AUTH_USER
  });
} else {
  store.dispatch({
    type: REMOVE_USER
  });
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header>
              <Navbar />
            </Header>
            <Content>
              <Routes />
            </Content>
            <Footer>footer</Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
