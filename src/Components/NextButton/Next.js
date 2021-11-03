import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { gsap } from 'gsap'
import './Next.scss'
import { isCompositeComponent } from 'react-dom/test-utils'

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
      console.log(props.path)
      if(submission_alert()){ 
        submission_alert()
        console.log(window.location.href)
      }
      if(!submission_alert()){
      if(props.verifyAge < limit){ 
        const users_metadata = {'dob':`${props.verifyAge}/${props.month}/${props.day}`, 'province': props.province}
        localStorage.setItem('users_metadata', JSON.stringify(users_metadata))
        history.push(props.link)
      }
      if(props.verifyAge > limit){
        window.location.replace('https://www.gotmilk.com/')
      }
      }
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



    const submission_alert = () => { 
      if(props.path == '/'){
        if(props.day == undefined || props.month == undefined || props.province == undefined || props.verifyAge == undefined){ 
          gsap.to('.submission_alert', {opacity: '1', duration: .3})
          return true
        }
      }
      if(props.path == undefined){ 
        history.push(props.link)
      }
    }

  return(
    <>
    <h4 className='submission_alert' style={{color: 'white', position: 'absolute', zIndex:'999', marginTop: '-6vh', opacity: '0'}}>You're missing a required field</h4>
    <button onClick={verify_age} style={background.style} className={`next_btn ${props.class}`}>{props.text} <img id='next_image' src={props.image} alt='' /></button>

    </>
   )

 }

export default Next