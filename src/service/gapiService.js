/* global gapi */
import { apiKEY, config } from "./gapiInfo";

const loadScript = (setGapiLoaded) => {
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
  return script;
};

// const authenticate = () => {
//   return gapi.auth2
//     .getAuthInstance()
//     .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
//     .then(
//       function () {
//         console.log("Sign-in successful");
//       },
//       function (err) {
//         console.error("Error signing in", err);
//       }
//     );
// };

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

export { loadScript, loadClient };
