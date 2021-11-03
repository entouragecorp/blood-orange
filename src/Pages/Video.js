import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import VideoMp4 from './../Assets/videos/Saturday.mp4'

/**
* @author
* @function Video
**/

const Video = (props) => {
  const history = useHistory()
  useEffect(()=>{

    // const randNum = Math.floor(Math.random() * 2)
    // console.log(randNum)
    setTimeout(()=>{
      history.push('/blood-orange')
    //   if(randNum === 1){
    //     history.push('/prizing')
    //   }else if(randNum === 0){
    //     history.push('/blood-orange')
    //   }

    },9000)
  }, [])
  return(
    <video width="100%" height="100%" autoPlay muted >
    <source src={VideoMp4} type="video/mp4"/>
   </video>


   )

 }

export default Video