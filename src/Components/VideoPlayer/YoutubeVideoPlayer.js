import React, { useEffect, useState } from "react";
import styles from "./YoutubeVideoPlayer.module.css";
import { fetchFromURL } from "../../utils/axios";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const YoutubeVideoPlayer = () => {
  const [videoData, setVideoData] = useState(null);
  const { videoDataID } = useParams();
  useEffect(() => {
    fetchFromURL(`videos?part=snippet,statistics&id=${videoDataID}`).then((videos) =>
    setVideoData(videos.items[0])
    );
  }, [videoDataID,videoData]);
  return (
    <div className={styles.videoPlayer__container}>
      <div className={styles.videoPlayer__left}>
        <ReactPlayer
          controls
          playing={true}
          width='750px'
          height='400px'
          url={`https://www.youtube.com/watch?v=${videoDataID}`}
        />
        <div className={styles.videoPlayer__description}>
          <div className={styles.videoPlayer__title}>
            <h3>{video!=null&&video.snippet.title}</h3>
          </div>
          <div className={styles.videoPlayer__author}>
            <div className={styles.author}>{video!=null&&video.snippet.channelTitle}</div>
            <div className={styles.verifiedAccount}><CheckCircleIcon/></div>
          </div>
          <div className={styles.videoPlayer__desc}>
            {video!=null&&video.snippet.description}
          </div>
        </div>
      </div>
      <div className={styles.videoPlayer__right}>

      </div>
    </div>
  );
};

export default YoutubeVideoPlayer;
