/*
 * @file: file description
 * @author: your name
 * @Date: 2021-10-21 17:14:56
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 20:33:30
 */

/* global gapi */
import React from "react";
import Lottie from "react-lottie";
import { YoutubeAnimationJsonString } from "../../../static/animation/LottieConsts";
import { Button, Checkbox, Form, Input } from 'antd';
// import "./LoginPage.less";
// import GoogleLoginButton from "../../GoogleLoginButton";

const handleFormSubmitted = () => {
  
}

const renderForm = () => {
  return (
  <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleFormSubmitted}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type={"primary"}>
          Login
        </Button>

        <Button>
          Signup
        </Button>
      </Form.Item>
    </Form>
  )
}


const LoginPage = () => {

  // const { onLoginSuccess, isGapiLoaded } = props;

  return (
    <div className={'login-page'}>
      <h2 className="mb-5"> Welcome to Playlist Manager !</h2>
      {/* {isGapiLoaded ? <GoogleLoginButton onSuccess={onLoginSuccess}/> : null} */}
      {renderForm()}
    </div>
  );
};

const loginPageStyle = {
    textAlign: "center"
}
export default LoginPage;
