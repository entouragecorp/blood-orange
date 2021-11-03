import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './Next.scss'

/**
* @author
* @function Next
**/
const date = new Date()
const yr = date.getFullYear()
const limit = yr - 19


const Next = (props) => {
    const history = useHistory()
  
    const verify_age = () => { 
      console.log(limit)
      console.log(props.verifyAge)
      if(props.verifyAge < limit){ 
        history.push(props.link)
      }
      if(props.verifyAge > limit){
        window.location.replace('https://www.gotmilk.com/')
      }
      if(props.verifyAge == undefined){
        history.push(props.link)
      }
      // else(
      //   window.location.reload('https://google.com')
      // )
    }
    // Take two props - image and link
    const [background] = useState({
        style: { 
            backgroundColor: `${props.color}`,
            border: 'none', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            // background: `url(${props.image}) no-repeat center center`,
            // backgroundSize: 'contain',
           
        },
        link: ''
    })

  return(
    <button onClick={verify_age} style={background.style} className={`next_btn ${props.class}`}>{props.text} <img id='next_image' src={props.image} alt='' /></button>
   )

 }

export default Next