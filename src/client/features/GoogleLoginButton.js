/*
 * @file: file description
 * @author: your name
 * @Date: 2021-10-21 17:14:56
 * @LastEditors: your name
 * @LastEditTime: 2021-12-26 17:13:34
 */
import React from "react";
import GoogleLogin from "react-google-login";
import { config } from "../server/auth/gapiInfo"

const GoogleLoginButton = (props) => {
  const { onSuccess } = props;

  return (
    <GoogleLogin
      clientId={config.clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
