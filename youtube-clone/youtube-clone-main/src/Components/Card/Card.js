import React from 'react'
// import { Link } from 'react-router-dom';
import classes from './Card.module.css';
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate=useNavigate();
  const clickHandler = (event)=>{
    event.preventDefault();
    navigate(`/video/${props.videoID}`)
  }

  return (
    <div className={classes.card__container} onClick={clickHandler}>
      <div className={classes.image}> <img src={props.src} /></div>
      <div className={classes.channelName}> {props.channelName} </div>
      <div className = {classes.description}> {props.description.length<800?props.description:props.description.slice(0,800)+'....'} </div>
      {/* <div className={classes.} */}
    </div>
  )
}

export default Card
