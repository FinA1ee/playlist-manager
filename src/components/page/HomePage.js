import React, { useEffect, useState } from "react";
import Select from "react-select";
import Loading from "../Loading";
import YoutubeIcon from "../../static/img/youtube-icon.png";
import { fetchPlaylists } from "../../service/youtubeApiService";
import PlaylistDisplay from "../PlaylistDisplay";

const HomePage = (props) => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchPlaylists().then((res) => {
      //   console.log(res.result.items)
      setPlaylists(res.result.items);
    });

    // console.log("Result: ", fetchPlaylists().then());
  }, []);

  const onPlaylistSelectChange = (selectedItem) => {
    setSelectedOption(selectedItem);
  };

  const playlistOptions = playlists.map((item, index) => {
    return { value: item.id, label: item.snippet.title };
  });

  return (
    <div>
      <nav className="navbar navbar-light bg-light ms-3">
        <a className="navbar-brand" href="#">
          <img
            src={YoutubeIcon}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt=""
          />
          <span className="nav-title">Youtube Playlist Manager</span>
        </a>
      </nav>

      <Select
        value={selectedOption}
        onChange={onPlaylistSelectChange}
        options={playlistOptions}
        placeholder={"Select Your Playlist..."}
      />
      {selectedOption ? <PlaylistDisplay playlist={selectedOption} /> : null }
    </div>
  );
};

export default HomePage;
