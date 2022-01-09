/*
 * @file: file description
 * @author: your name
 * @Date: 2021-10-21 17:14:56
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 20:34:12
 */
import React, { useEffect, useState } from "react";
import { Select } from "antd";
import Loading from "../../Loading";
import YoutubeAnimation from "../../static/img/youtube-icon.png";
import { fetchPlaylists } from "../../../../server/youtubeApiService";
import PlaylistDisplay from "../../PlaylistDisplay";

import { LottieAnimation } from "client/features/components";
import { YoutubeAnimationJsonString } from "client/static/animation/LottieConsts";

interface IHomePageProps {}

type Props = IHomePageProps;

const HomePage = (props: IHomePageProps) => {
  // const [playlists, setPlaylists] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(null);

  // useEffect(() => {
  //   fetchPlaylists().then((res: any) => {
  //     //   console.log(res.result.items)
  //     setPlaylists(res.result.items);
  //   });

  //   // console.log("Result: ", fetchPlaylists().then());
  // }, []);

  // const onPlaylistSelectChange = (selectedItem: React.SetStateAction<null>) => {
  //   setSelectedOption(selectedItem);
  // };

  // const playlistOptions = playlists.map((item, index) => {
  //   return { value: item.id, label: item.snippet.title };
  // });

  return (
    <div className={'pm-home-page'}>
      <LottieAnimation srcJson={YoutubeAnimationJsonString} height={400} width={400}/>
      <span className={"pm-home-page-title"}>Welcome to Playlist Manager !</span>
      
      {/* <Select
        value={selectedOption || ''}
        // onChange={onPlaylistSelectChange}
        // options={playlistOptions}
        placeholder={"Select Your Playlist..."}
      />
      {selectedOption ? <PlaylistDisplay playlist={selectedOption} /> : null } */}
    </div>
  );
};

export default HomePage;
