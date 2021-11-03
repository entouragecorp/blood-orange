import React from 'react'
import Next from '../Components/NextButton/Next'
import NextGreen from '../Assets/next-green.png'
import Guitar from '../Assets/guitar.svg'

/**
* @author
* @function Instructions
**/

const Instructions = (props) => {
  return(
    <div className='Prizing noOverflow'>
        <div id='next_btn_green'>
            <Next image={NextGreen} link='/Quiz'/>
        </div>
        <div id='ball_layer'>
        </div> 
        <div id='guitar_layer'>
            <img id='guitar' src={Guitar} alt='' />
        </div> 
        
        <p id='instruction_context'> 
            ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY PARTY FOR YOUR STORE
        </p>

    </div>
   )

 }

export default Instructions