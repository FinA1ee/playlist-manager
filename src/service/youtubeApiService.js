import { gapi } from 'gapi-script'

const apiKEY = 'AIzaSyDTyYcaL5n99k2MNpj9qovNUORC1gXRPyY';
const clientID = '1031472992708-aam7oaaoa4emq7h5qlgpbnennpkg691o.apps.googleusercontent.com';
const config = {
    clientId: '1031472992708-aam7oaaoa4emq7h5qlgpbnennpkg691o.apps.googleusercontent.com',
    scope: "profile"
};

class YoutubeApiService {
    constructor() {

        gapi.load("client:auth2", function() {
            gapi.auth2.init({
                client_id: clientID
            })
        });
        console.log(gapi.auth2);
    }
    
    authenticate() {
        return gapi.auth2
            .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
            .then(function() { console.log("Sign-in successful"); },
                  function(err) { console.error("Error signing in", err); });
    }
      
    loadClient() {
        gapi.client.setApiKey(apiKEY);
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
    }

    execute() {
        return gapi.client.youtube.channels.list({
          "part": [
            "snippet,contentDetails"
          ],
          "maxResults": 25,
          "mine": true
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response);
                  },
                  function(err) { console.error("Execute error", err); });
    }



    getMyPlaylists() {
        this.authenticate().then(this.loadClient);

        // console.log("complete client load");

        // var instance = axios.create({
        //     baseURL: "https://youtube.googleapis.com/youtube/v3/channels",
        //     params: {
        //         part: "snippet",
        //         maxResults: 5,
        //         mine: true,
        //         key: apiKEY
        //     }
        // })

        // axios.get(instance).then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
}

export default YoutubeApiService;
