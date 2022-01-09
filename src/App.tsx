// import React from "react";
// import { useState, useEffect } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { loadScript, loadClient, authenticate } from "./server/gapiService";

// import "./App.css";
// import { fetchPlaylists } from "./service/youtubeApiService";
// import PlaylistDisplay from "./components/PlaylistDisplay";
// import Loading from "./components/Loading";
// import LoginPage from "./client/features/page/login-page/LoginPage";
// import HomePage from "./client/features/page/home-page/HomePage";
// import Loading from "./client/features/Loading";
import RouterContainer from "./client/features/container/RouterContainer";

const App = () => {
  // const [isGapiLoaded, setGapiLoaded] = useState(false);
  // const [isLogin, setLogin] = useState(false);
  // const [isClientLoaded, setClientLoaded] = useState(false);


  // useEffect(() => {
  //   setLogin(getLoginStatus());
  // }, [])

  // useEffect(() => {
  //   document.body.appendChild(loadScript(setGapiLoaded));
  //   // if(gapi) loadClient().then(function () { setClientLoaded(true) });
  // }, [isGapiLoaded]);

  // const onLoginSuccess = async (response) => {
    
  //   const auth_res = await authenticate();
  //   console.log("auth: ", auth_res);
  //   setLogin(true);
  //   const load_res = await loadClient();
  //   console.log("load: ", load_res);
  //   setClientLoaded(true);
  // }
  
  return (
    <RouterContainer />
  )
};

export default App;
