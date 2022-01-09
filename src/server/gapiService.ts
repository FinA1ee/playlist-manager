/*
 * @file: file description
 * @author: your name
 * @Date: 2021-10-21 17:14:56
 * @LastEditTime: 2022-01-09 14:33:46
 */

/* global gapi */
import { gapi } from "gapi-script";
import { SetStateAction } from "react";
import { apiKEY, config } from "./auth/gapiInfo";

const GOOGLE_API_SCRIPT_SRC = "https://apis.google.com/js/api.js";
const GOOGLE_CLIENT_SCRIPT_SRC = "https://apis.google.com/js/client.js";
const GOOGLE_YOUTUBE_AUTH = "https://www.googleapis.com/auth/youtube.readonly";

/** 加载Google脚本 **/
const loadScript = () => {
  const script = document.createElement("script");
  script.src = GOOGLE_API_SCRIPT_SRC;
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
        // setGapiLoaded(true);
      });
    };
    try {
      gapi.load("client:auth2", initClient);
    } catch {
      console.error("GAPI log error");
    }
  };
  return script;
};

/** Google鉴权 */
const authenticate = () => {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: GOOGLE_YOUTUBE_AUTH });
};

const loadClient = () => {
  gapi.client.setApiKey(apiKEY);
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
};

export { loadScript, loadClient, authenticate };
