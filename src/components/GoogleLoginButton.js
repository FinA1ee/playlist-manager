import React from "react";
import GoogleLogin from "react-google-login";
import { config } from "../service/gapiInfo"

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
