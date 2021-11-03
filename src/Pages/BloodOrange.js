import React from 'react'
import Next from '../Components/NextButton/Next'
import NextGreen from '../Assets/next-green.png'
import VapePen from '../Assets/vape-pen.svg'
import './Pages.scss'

/**
* @author
* @function BloodOrange
**/

const BloodOrange = (props) => {
  return(
    <div className='Prizing bloodOrangeBg'>

<div className='columns_holder'>

<div className='shared_width left-content'>



<div className='shared_width'>
<div className='info_container'>
<h1 className='blood_orange_h1'>BLOOD</h1>
        <h1 className='blood_orange_h1 Title2'>ORANGE</h1>
        <h5 className='blood_orange_h1 ROR'>1G 510 CARTRIDGE</h5>
    </div> 
<div className='info_container'>
        <p className='margin_zero' style={{fontSize: '13px'}}>Blood Orange by Saturday is the sweet and juicy with a tangy zip and touch of floral pine. Enjoy a crisp twist on citrus.</p>
    </div> 
    <div className='info_container'>
        <p className='margin_zero'>SATIVA</p>
        <p className='margin_zero thin'>THC 19-25%</p>
        <p className='margin_zero thin'>CBD 0-1%</p>
    </div>   
     <div className='info_container'>
        <p className='margin_zero'>AROMA & FLAVOURS</p>
        <p className='margin_zero thin'>Sweet Citrus Fruity</p>
    </div>

    <div className='info_container'>
        <p className='margin_zero'>LICENSED PRODUCER</p>
        <p className='margin_zero thin'>WeedMD Rx Inc.</p>
    </div>
</div>



</div>
<div>
    <img id='vapePen' src={VapePen} alt='' />
</div>

        </div>
        <div className='next_btn_blood_orange'>
            <Next text="LET'S BEGIN" link='/quiz' color='#535938'/>
        </div>
    </div>
   )

 }

export default BloodOrange