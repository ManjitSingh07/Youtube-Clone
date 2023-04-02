import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./MainYoutubePage.module.css";
import { fetchFromURL } from "../../utils/axios";
const MainYoutubePage = (props) => {
  const [videoSearchData, setVideoSearchData] = useState([]);
  const [channelSearchDescription,setChannelSearchDescription]=useState([]);

  useEffect(() => {
    const data = fetchFromURL(`search?part=snippet&q=${props.params}`).then(
      (videos) => {
        setVideoSearchData(videos.items)
      }
    );
  }, [props.params]);
  useEffect(()=>{
    videoSearchData.map(video=>{
      fetchFromURL(`channel?part=snippet&id=${video.snippet.channelId}`).then(
        (temp)=>{
          setChannelSearchDescription(state=>[...state,temp]);
        }
      )
    })
  },[videoSearchData])

  return (
    <div className={styles.mainPage__container}>
      {console.log(videoSearchData)}
      {videoSearchData.map((data) => {
        return (
          <Card
            key={data.id.videoId}
            videoID = {data.id.videoId?data.id.videoId:data.id.playlistId}
            src={data.snippet.thumbnails.high.url}
            description={data.snippet.description}
            channelName={data.snippet.channelTitle}
          />
        );
      })}
    </div>
  );
};

export default MainYoutubePage;
