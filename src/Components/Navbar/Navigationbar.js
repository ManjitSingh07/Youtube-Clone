import React, { useState } from 'react'
import styles from './Navigationbar.module.css';
import youtubeLogo from '../../Assets/youtubeLogo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MainYoutubePage from '../MainPage/MainYoutubePage';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  const [videoSearchInput,setVideoSearchInput]= useState('');
  const [propValues,setPropValues]=useState(false);
  const navigateTo = useNavigate();
  const videoClickHandler =(event) =>{
    event.preventDefault();
    setPropValues(true);
    navigateTo(`searchPage/${videoSearchInput}`)
    setVideoSearchInput('');
  };
  return (
    <div className={styles.navbar__container}>
        <div><Link to='/'><img src={youtubeLogo} alt="youtube-logo" /></Link></div>
        <div className={styles.navbar__search}>
            <input type="text" placeholder='Enter your search query' value={videoSearchInput} onChange={(event)=>{setVideoSearchInput(event.target.value)}} />
            <div className={styles.navbar__icon} onClick={videoClickHandler} ><SearchRoundedIcon /></div>
        </div>
        {prop && <MainYoutubePage params={videoSearchInput}/> && setPropValues(false)}
    </div>
  )
}

export default Navigationbar
