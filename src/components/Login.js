/* https://programmingfields.com/react-login-and-registration-app-using-laravel-7-api/ */
import React, { Component } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: "",
      password: "",
      msg: "",
      isLoading: false,
      redirect: false,
      errMsgProfileId: "",
      errMsgPwd: "",
      errMsg: "",
    };
  }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  onSignInHandler = () => {
    this.setState({ isLoading: true });
    axios
      .post("http://192.168.1.110:8000/api/v1/employee/login", {
        pid: this.state.pid,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.status === 200) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(response.data.data));
          this.setState({
            msg: response.data.message,
            redirect: true,
          });      
        }
        if (
          response.data.status === "failed" &&
          response.data.success === undefined
        ) {
          this.setState({
            errMsgProfileId: response.data.validation_error.pid,
            errMsgPwd: response.data.validation_error.password,
          });
          setTimeout(() => {
            this.setState({ errMsgProfileId: "", errMsgPwd: "" });
          }, 2000);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          this.setState({
            errMsg: response.data.message,
          });
          setTimeout(() => {
            this.setState({ errMsg: "" });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      return <Redirect to="/home" />;
    }
    const isLoading = this.state.isLoading;
    return (
      <div>
        <Form className="container">
          <FormGroup>
            <label>Profile id</label>
            <input
              type="text"
              name="pid"
              placeholder="Enter profile id"
              value={this.state.pid}
              onChange={this.onChangehandler}
            />
            <span className="text-danger">{this.state.msg}</span>
            <span className="text-danger">{this.state.errMsgProfileId}</span>
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.onChangehandler}
            />
            <span className="text-danger">{this.state.errMsgPwd}</span>
          </FormGroup>
          <p className="text-danger">{this.state.errMsg}</p>
          <Button
            className="text-center mb-4"
            color="success"
            onClick={this.onSignInHandler}
          >
            Sign In
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm ml-5"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <span></span>
            )}
          </Button>
        </Form>
      </div>
    );
  }
}