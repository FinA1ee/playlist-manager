/* global gapi */
import React from "react";
import Lottie from "react-lottie";
import * as YoutubeAnimation from "../../static/youtube-logo.json";
import GoogleLoginButton from "../GoogleLoginButton";


const defaultAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: YoutubeAnimation.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


const LoginPage = (props) => {

  const { onLoginSuccess, isGapiLoaded } = props;

  return (
    <div style={loginPageStyle}>
      <Lottie options={defaultAnimationOptions} height={400} width={400} />
      <h2 className="mb-5"> Welcome to Youtube Playlist Manager !</h2>
      {isGapiLoaded ? <GoogleLoginButton onSuccess={onLoginSuccess}/> : null}
    </div>
  );
};

const loginPageStyle = {
    textAlign: "center"
}
export default LoginPage;
