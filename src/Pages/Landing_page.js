import React, {useEffect, useRef, useState} from 'react'
import Next from '../Components/NextButton/Next'
import DownArrow from './../Assets/arrow-down.png'
import { gsap } from 'gsap'
import './Pages.scss'

/**
* @author
* @function LandingPage
**/

const LandingPage = (props) => {
const days = ['-']
const year = ['-']
const month = ['-','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec']
const province = ['-','ON', 'QC', 'NL', 'PE', 'NS', 'NB', 'MB', 'SK', 'AB','BC', 'YT', 'NT', 'NU']
const year_start = 1900
const year_end = 2021
const month_start = 0
const month_end = 31
const newRef = useRef(null)
var title = 'title'
var data=[];
const [annualPicker, setAnnualPicker] = useState({
  title: '', 
  data: []
})
const [toggle, setToggle] = useState(true)
const [settingDay, setSettingDay] = useState()
const [settingMonth, setSettingMonth] = useState()
const [settingYear, setSettingYear] = useState()
const [settingProvince, setProvinceYear] = useState()


    const annual_picker = (start, end, location) => { 
      if(start == end){ 
        return 
      }
      start = start + 1 
      if(location == 'y'){ 
        year.unshift(start)
      }
      if(location == 'd'){ 
        days.push(start)
      }
 
    annual_picker(start, end, location)
    }
    annual_picker(year_start, year_end, 'y')
    annual_picker(month_start, month_end, 'd')


    const select_sidebar_list = (settitle, value) => { 
      if(settitle == 'day'){ 
        setSettingDay(value)
      }
      if(settitle == 'month'){ 
      setSettingMonth(value)
      }
      if(settitle == 'year'){ 
        setSettingYear(value)
        }
      if(settitle == 'province'){ 
          setProvinceYear(value)
        }

      if(!toggle){ 
        if(settitle == 'day'){
          gsap.to('.dayArrow', {rotation: '+=90', duration: .3})
        }
        if(settitle == 'month'){
          gsap.to('.monthArrow', {rotation: '+=90', duration: .3})
        }
        if(settitle == 'year'){
          gsap.to('.yearArrow', {rotation: '+=90', duration: .3})
        }
        if(settitle == 'province'){
          gsap.to('.provinceArrow', {rotation: '+=90', duration: .3})
        }
        gsap.to('.sidebar', {width: '0px', duration: .3})
        setAnnualPicker({
          title: '', 
          data: []
        })
        setToggle(!toggle)
      }
      // setSettingMonth()

    }

    const set_sidebar_dates = (title_, data_) => { 
      if(toggle){ 
        if(title_ == 'day'){
          gsap.to('.dayArrow', {rotation: '+=-90', duration: .3})
        }
        if(title_ == 'month'){
          gsap.to('.monthArrow', {rotation: '+=-90', duration: .3})
        }
        if(title_ == 'year'){
          gsap.to('.yearArrow', {rotation: '+=-90', duration: .3})
        }
        if(title_ == 'province'){
          gsap.to('.provinceArrow', {rotation: '+=-90', duration: .3})
        }

        gsap.to('.sidebar', {width: '70px', duration: .3})
        setAnnualPicker({
          title: title_, 
          data: data_
        })
  
        setToggle(!toggle)
      }
      if(!toggle){ 
        if(title_ == 'day'){
          gsap.to('.dayArrow', {rotation: '+=90', duration: .3})
        }
        if(title_ == 'month'){
          gsap.to('.monthArrow', {rotation: '+=90', duration: .3})
        }
        if(title_ == 'year'){
          gsap.to('.yearArrow', {rotation: '+=90', duration: .3})
        }
        if(title_ == 'province'){
          gsap.to('.provinceArrow', {rotation: '+=90', duration: .3})
        }

        gsap.to('.sidebar', {width: '0px', duration: .3})
        setAnnualPicker({
          title: '', 
          data: []
        })
        setToggle(!toggle)
      }
    }
    useEffect(()=>{

    },[])



  return (
    <div className='home_bg'>
      <div id='landing_wrapping'>

      <div className='sidebar'>
        <div className='title'>
        <h4 style={{color:'white'}}>{annualPicker.title.toUpperCase()}</h4>
        </div>
        
        <ul> 
        {
            annualPicker.data.map((value, index) =>{
              return(
                <li className='opitons_list' name={annualPicker.title} key={index} onClick={()=>{select_sidebar_list(annualPicker.title, value)}}>
                    {value}
                </li>
                )
            })
          }
        </ul>
      
      </div>

       <h1 style={{color: 'white', fontWeight: '100', fontSize: '2.2em', fontFamily: 'Fjalla One, sans-serif'}}>PLEASE VERIFY YOUR AGE </h1>
       <div id='dob_capture'> 
       <div className='select_container marg_10'> 
       <div className='box'>
        <select ref={newRef} value={settingDay}  id='test_click'> 
          {
            days.map((value, index) =>{
              return(
                <option className='opitons' key={index}>
                    {value =='-'? 'DAY':value}
                </option>
                )
            })
          }
        </select>
        </div>
        <div className='bb-container '>
        <div className='blackBox' onClick={()=>{set_sidebar_dates('day', days)}}>
          <img className='downarrow dayArrow' src={DownArrow} alt='down-arrow' />
        </div>
        </div>
        </div>

        <div className='select_container'> 
        <select value={settingMonth} > 
          {
            month.map((value, index) =>{
              return(
                <option className='opitons' key={index}>
                    {value =='-'? 'MONTH':value}
                </option>
                )
            })
          }
        </select>
        <div className='bb-container'>
        <div className='blackBox' onClick={()=>{set_sidebar_dates('month', month)}}>
        <img className='downarrow monthArrow' src={DownArrow} alt='down-arrow' />
        </div>
        </div>
        </div>

        <div className='select_container '> 
        <select value={settingYear}> 
          {
            year.map((value, index) =>{
              return(
                <option className='opitons' key={index} >
                    {value =='2021'? 'YEAR':value}
                </option>
                )
            })
          }
        </select>
        <div className='bb-container'>
        <div className='blackBox' onClick={()=>{set_sidebar_dates('year', year)}}>
        <img className='downarrow yearArrow' src={DownArrow} alt='down-arrow' />
        </div>
        </div>
        
        </div>

        <div className='select_container'> 
        <select value={settingProvince} > 
          {
            province.map((value, index) =>{
              return(
                <option className='opitons' key={index}>
                    {value =='-'? 'PROVINCE':value}
                </option>
                )
            })
          }
        </select>
        <div className='bb-container'>
        <div className='blackBox' onClick={()=>{set_sidebar_dates('province', province)}}>
        <img className='downarrow provinceArrow' src={DownArrow} alt='down-arrow' />
        </div>
        </div>
        </div>
        {/* <div className='select_container '> 
        <select value={settingYear}> 
          {
            year.map((value, index) =>{
              return(
                <option className='opitons' key={index}>
                    {value}
                </option>
                )
            })
          }
        </select>
        <div className='bb-container'>
        <div className='blackBox' onClick={()=>{set_sidebar_dates('year', year)}}></div>
        </div>
        
        </div> */}
        <div id='next_btn_landing'>
            <Next text='NEXT' path={'/'} verifyAge={settingYear} day={settingDay} month={settingMonth} province={settingProvince} color='#E14925' link='/roomba-prize'/>
        </div>
       </div>
      </div>
      
      {/* <div id='next_btn_holder'>
        <Next image={ButtonImage} class='orange-btn' link='/educational-video' />
      </div> */}
      {/* Side bar */}

    </div>




  )

}

export default LandingPage