import React from 'react'
import BackgroundImage from './../Assets/roomba-bg.png'
import Next from '../Components/NextButton/Next'

/**
* @author
* @function RoombaPrize
**/

const RoombaPrize = (props) => {
  return(
    <div className='Roomba_page'>
        <img className='roomba-bg' src={BackgroundImage} alt='bg' />
        {/* <div className='roomba_title'> */}
        <h2 className='roomba_header_text'>ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY ROOMBA!</h2>
        {/* </div> */}
        <div id='next_btn_roomba'>
            <Next text='EXCITED? LETS GO!' link='/educational-video' color='#535938'/>
        </div>
    </div>
   )

 }

export default RoombaPrize