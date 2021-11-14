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
const [annualPicker, setAnnualPicker] = useState({
  title: '',
  data: []
})
const [toggle, setToggle] = useState(true)
const [selectedInput, setSelectedInput] = useState('')
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
      } else if(settitle == 'month'){
       setSettingMonth(value)
      } else if(settitle == 'year'){
        setSettingYear(value)
      } else if(settitle == 'province'){
        setProvinceYear(value)
      }

      if(!toggle){
        if(settitle == 'day'){
          gsap.to('.dayArrow', {rotation: '0', duration: .3})
        }
        if(settitle == 'month'){
          gsap.to('.monthArrow', {rotation: '0', duration: .3})
        }
        if(settitle == 'year'){
          gsap.to('.yearArrow', {rotation: '0', duration: .3})
        }
        if(settitle == 'province'){
          gsap.to('.provinceArrow', {rotation: '0', duration: .3})
        }
        gsap.to('.sidebar', {width: '0px', duration: .3})
        setAnnualPicker({
          title: '',
          data: []
        })
        setToggle(!toggle)
      }
      setSelectedInput('')
    }

    const set_sidebar_dates = (title_, data_) => {
      setSelectedInput(title_)

      if(toggle){
        show_sidebar_menu(title_, data_)
      }

      if(!toggle){
        // If menu is open, and user selects a different input
        // show those options instead of hiding menu
        // otherwise, close the menu and reset arrows.
        if (title_ !== selectedInput) {
          show_sidebar_menu(title_, data_)
        } else {
          hide_sidebar_menu()
        }
      }
    }

    const show_sidebar_menu = (title_, data_) => {
      if(title_ == 'day'){
        gsap.to('.dayArrow', {rotation: '-90', duration: .3})
      } else {
        gsap.to('.dayArrow', {rotation: '0', duration: .3})
      }

      if(title_ == 'month'){
        gsap.to('.monthArrow', {rotation: '-90', duration: .3})
      } else {
        gsap.to('.monthArrow', {rotation: '0', duration: .3})
      }

      if(title_ == 'year'){
        gsap.to('.yearArrow', {rotation: '-90', duration: .3})
      } else {
        gsap.to('.yearArrow', {rotation: '0', duration: .3})
      }

      if(title_ == 'province'){
        gsap.to('.provinceArrow', {rotation: '-90', duration: .3})
      } else {
        gsap.to('.provinceArrow', {rotation: '0', duration: .3})
      }

      gsap.to('.sidebar', {width: '70px', duration: .3})
      setAnnualPicker({
        title: title_,
        data: data_
      })

      setToggle(!toggle)
      setSelectedInput(title_)
    }

    const hide_sidebar_menu = () => {
      gsap.to('.dayArrow', {rotation: '0', duration: .3})
        gsap.to('.monthArrow', {rotation: '0', duration: .3})
        gsap.to('.yearArrow', {rotation: '0', duration: .3})
        gsap.to('.provinceArrow', {rotation: '0', duration: .3})

        gsap.to('.sidebar', {width: '0px', duration: .3})
        setAnnualPicker({
          title: '',
          data: []
        })
        setToggle(true)
        setSelectedInput('')
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
                <li className='opitons_list' name={annualPicker.title} key={index} onClick={(e)=>{ e.stopPropagation(); select_sidebar_list(annualPicker.title, value)}}>
                    {value}
                </li>
                )
            })
          }
        </ul>

      </div>

      <h1 style={{color: 'white', fontWeight: '100', fontSize: '2.2em', fontFamily: 'Fjalla One, sans-serif'}}>PLEASE VERIFY YOUR AGE </h1>
      <div id='dob_capture'>
        <div className='select_container' onClick={(e)=>{ set_sidebar_dates('day', days)}}>
          <div className='box'>
            <div className='input-label'>
              { settingDay ?? "DAY" }
            </div>
            {/* <select ref={newRef} value={settingDay} onClick={(e)=>{ e.stopPropagation(); e.preventDefault() }}>
              {
                days.map((value, index) =>{
                  return(
                    <option className='opitons' key={index}>
                        {value =='-'? 'DAY':value}
                    </option>
                    )
                })
              }
            </select> */}
          </div>
          <div className='bb-container '>
            <div className='blackBox'>
              <img className='downarrow dayArrow' src={DownArrow} alt='down-arrow' />
            </div>
          </div>
        </div>

        <div className='select_container' onClick={(e)=>{ e.stopPropagation(); set_sidebar_dates('month', month)}}>
          <div className='input-label'>
            { settingMonth ?? "MONTH" }
          </div>
          {/* <select value={settingMonth} >
            {
              month.map((value, index) =>{
                return(
                  <option className='opitons' key={index}>
                      {value =='-'? 'MONTH':value}
                  </option>
                  )
              })
            }
          </select> */}
          <div className='bb-container'>
            <div className='blackBox'>
              <img className='downarrow monthArrow' src={DownArrow} alt='down-arrow' />
            </div>
          </div>
        </div>

        <div className='select_container' onClick={(e)=>{ e.stopPropagation(); set_sidebar_dates('year', year)}}>
          <div className='input-label'>
            { settingYear ?? "YEAR" }
          </div>
          {/* <select value={settingYear}>
            {
              year.map((value, index) =>{
                return(
                  <option className='opitons' key={index} >
                      {value =='2021'? 'YEAR':value}
                  </option>
                  )
              })
            }
          </select> */}
          <div className='bb-container'>
            <div className='blackBox'>
              <img className='downarrow yearArrow' src={DownArrow} alt='down-arrow' />
            </div>
            </div>
        </div>

        <div className='select_container' onClick={(e)=>{ e.stopPropagation(); set_sidebar_dates('province', province)}}>
          <div className='input-label'>
            { settingProvince ?? "PROVINCE" }
          </div>
          {/* <select value={settingProvince} >
            {
              province.map((value, index) =>{
                return(
                  <option className='opitons' key={index}>
                      {value =='-'? 'PROVINCE':value}
                  </option>
                  )
              })
            }
          </select> */}
          <div className='bb-container'>
            <div className='blackBox'>
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