/* global gapi */
import React, { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import ActionPanel from "./components/ActionPanel";
import { authenticate, loadClient } from "./service/gapiService";
import { apiKEY, config } from "./service/gapiInfo";
import { fetchPlaylists } from "./service/youtubeApiService";
import PlaylistDisplay from "./components/PlaylistDisplay";
import Loading from "./components/Loading";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {

  }, [])

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

  const handleAuthenticate = () => {
    authenticate().then(function () {
      loadClient().then(function () { setIsLogin(true) });
    });
  };

  const handleExecute = () => {
    const result = fetchPlaylists().then(
      function (response) {
        // console.log(response.result.items);
        setPlaylists(response.result.items);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
  }

  

  return gapiLoaded ? (
    <div>
      <ActionPanel
        isLogin={isLogin}
        handleAuthenticate={handleAuthenticate}
        handleExecute={handleExecute}
      />
      <PlaylistDisplay playlists={playlists}/>
    </div>
  ) : (
    <Loading/>
  );
};

export default App;
