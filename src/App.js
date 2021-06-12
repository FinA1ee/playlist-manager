import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { loadScript, loadClient } from "./service/gapiService";

import "./App.css";
// import { fetchPlaylists } from "./service/youtubeApiService";
// import PlaylistDisplay from "./components/PlaylistDisplay";
// import Loading from "./components/Loading";
import LoginPage from "./components/page/LoginPage";
import HomePage from "./components/page/HomePage";

const App = () => {
  const [isGapiLoaded, setGapiLoaded] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isClientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    document.body.appendChild(loadScript(setGapiLoaded));
  }, [isGapiLoaded]);

  const onLoginSuccess = (response) => {
    setLogin(true);
    loadClient().then(function () { setClientLoaded(true) });
  }
  
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        {isLogin ? <Redirect to="/home"/> : <LoginPage isGapiLoaded={isGapiLoaded} onLoginSuccess={onLoginSuccess}/>}
      </Route>
      <Route path="/home">
        <HomePage isClientLoaded={isClientLoaded}/>
      </Route>
    </Switch>
  )



  // return gapiLoaded ? (
  //   <div>
  //     <LoginPage />
  //     {/* <PlaylistDisplay playlists={playlists}/> */}
  //   </div>
  // ) : (
  //   <Loading/>
  // );
};

export default App;
