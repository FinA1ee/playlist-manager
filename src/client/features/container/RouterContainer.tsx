/*
 * @file: file description
 * @author: your name
 * @Date: 2021-12-26 16:14:23
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 20:32:26
 */

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../page/home-page";
import LoginPage from "../page/login-page";

// import HomePage from "./components/page/home-page/HomePage";
// import Loading from "./components/Loading";

interface IRouterContainerProps {}

type Props = IRouterContainerProps;

const RouterContainer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      
    
      {/* <Route path="/login">
        <LoginPage />
      </Route> */}
    {/* <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/login">
      {isLogin ? <Redirect to="/home"/> : <LoginPage isGapiLoaded={isGapiLoaded} onLoginSuccess={onLoginSuccess}/>}
    </Route>
    <Route path="/home">
      {isLogin ? (isClientLoaded ? <HomePage /> : <Loading />) : <Redirect to="/login" />}
    </Route>
    <Route path="/home/:playlistName" render={(props) => (
      isClientLoaded ? <HomePage {...props} /> : <Loading />
    )} /> */}
    </Switch>
  )
}

export default RouterContainer;