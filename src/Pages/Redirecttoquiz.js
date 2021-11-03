import React, { useEffect } from 'react'
import Points from './../Assets/orig-roomba.png'
import { useHistory } from 'react-router'
import Next from '../Components/NextButton/Next'

/**
* @author
* @function Redirecttoquiz
**/

const Redirecttoquiz = (props) => {
    const history = useHistory()
    const points = localStorage.getItem('points')
    useEffect(() => {
        // setTimeout(()=>{
        //     history.push('/quiz')
        // },2000)
    }, [])
    return (
        <div className='points_container'>
            <img className='points_page' src={Points} alt='points' />
            <div className='messaging_for_points'>
                <h2 className='msg_text'>
                    YOU GOT {points}/5
                    NOT QUITE ENOUGH!
                    TRY AGAIN FOR YOUR
                    CHANCE TO WIN!
                </h2>
            </div>
            <div className='next_btn_ '>
                <Next class='short' text='TRY AGAIN' link='/quiz' color='#D9442A' />
            </div>
        </div>
    )

}

export default Redirecttoquiz