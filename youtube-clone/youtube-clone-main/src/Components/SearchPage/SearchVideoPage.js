import React, { useEffect, useState } from 'react'
import styles from './SearchVideoPage.module.css';
import { useParams } from 'react-router';
import { fetchFromURL } from '../../utils/axios';
import Card from '../Card/Card';
const SearchVideoPage = () => {
    const {searchVideoQuery} = useParams();
    const [videoData,setVideoData] = useState([]);
    useEffect(()=>{
        const data = fetchFromURL(`search?part=snippet&q=${searchVideoQuery}`).then(
            (video) => setVideoData(video.items)
          );
    },[searchVideoQuery])
  return (
    <div className={styles.searchPage__container}>
        {
            videoData.map(data=>{
                return  <div className={styles.card__container}><Card
                key={data.id.videoId}
                videoID = {data.id.videoId?data.id.videoId:data.id.playlistId}
                src={data.snippet.thumbnails.high.url}
                description={data.snippet.description}
                channelName={data.snippet.channelTitle}
            /></div>
            })

        }


    </div>
  )
}

export default SearchVideoPage
