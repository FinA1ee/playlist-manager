/* global gapi */
import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import ActionPanel from "./components/ActionPanel";
import { authenticate, loadClient, execute } from "./service/gapiService";
import { apiKEY, config } from "./service/gapiInfo";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [gapiLoaded, setGapiLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    // script.src = "https://apis.google.com/js/client.js";
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      const initClient = () => {
        gapi.client.init(config).then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          // auth2.isSignedIn.listen(this.handleSigninStatusChange);

          const currentUser = auth2.currentUser.get();
          const authResponse = currentUser.getAuthResponse(true);
          if (authResponse && currentUser) {
            // save access token
          }
          setGapiLoaded(true);
        });
      };
      gapi.load("client:auth2", initClient);
    };

    document.body.appendChild(script);
  }, [gapiLoaded]);

  // handleSigninStatusChange = isSignedIn => {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   if (isSignedIn) {
  //     const currentUser = auth2.currentUser.get();
  //     const authResponse = currentUser.getAuthResponse(true);
  //     if (authResponse) {
  //       // save access token
  //     }
  //   }
  // }

  const handleAuthenticate= () => {
    authenticate().then(loadClient).then(setIsLogin(true));
  };


  return gapiLoaded ? (
    <ActionPanel isLogin={isLogin} handleAuthenticate={handleAuthenticate} handleExecute={execute}/>
  ) : (
    <div>Please provide clientId in the config</div>
  );
};

export default App;
