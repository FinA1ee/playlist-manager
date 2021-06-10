/* global gapi */
import { apiKEY } from "./gapiInfo";

const authenticate = () => {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
};

const loadClient = () => {
  gapi.client.setApiKey(apiKEY);
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
};

const execute = () => {
  return gapi.client.youtube.playlists
    .list({
      part: ["snippet,contentDetails"],
      maxResults: 25,
      mine: true,
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
};

export { authenticate, loadClient, execute };