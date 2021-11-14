import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

/**
* @author
* @function Datacapture
**/

const Datacapture = (props) => {
  let points = localStorage.getItem('points')
  const history = useHistory()

  // Push the contents of the the form to localstorage.

  const on_submit = (e) => {
    e.preventDefault()
    // history.push('/blood-orange')
    const user_metadata = JSON.parse(localStorage.getItem('users_metadata'))

    // console.log(`Fullname: ${e.target.fullname.value} | Email: ${e.target.email.value} | Company: ${e.target.store.value}`)
      var users_data = {
      'fullname': `${e.target.fullname.value}`,
      'email': `${e.target.email.value}`,
      'company': `${e.target.store.value}`,
      'points': points,
      ...user_metadata
      }
    fetch("https://bottlecapdev.pythonanywhere.com/saturday", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(users_data)
    }).then((resp) => resp.json())
    .then((respr) =>{
      const status = respr.status
      if(parseInt(status) === 200){
        history.push('/ThanksForEntry')
      }

    })
  }

  return (
    <div className='Prizing'>

      <div id='quiz_result_holder_'>
        <div id='contact_header_comment_holder'>
          <h2>{`CONGRATULATIONS! YOU GOT ${points}/5 ANSWERS CORRECT!`}</h2>
          <h4>Please leave us your contact info for your <strong>CHANCE TO WIN</strong> your very own Saturday Roomba!</h4>
        </div>
      </div>

      <form className='form_collection' onSubmit={on_submit}>


        <div className='input_container'>
          <div className='input_wrapper'>
          <div className='label_bg'>
          <label htmlFor='fullname' className='labels_' >FULLNAME</label>
          </div>
          <input className='inputs formInput' type='text' id='fullname' name='fullname' placeholder='FULLNAME' required></input>
          </div>
        </div>

        <div className='input_container'>
          <div className='input_wrapper'>
          <div className='label_bg'>
          <label htmlFor='email' className='labels_' >EMAIL</label>
          </div>
          <input className='inputs formInput' type='email' id='email' name='email'  placeholder='EMAIL' required></input>
          </div>
        </div>

        <div className='input_container'>
          <div className='input_wrapper'>
          <div className='label_bg'>
          <label htmlFor='store' className='labels_' >STORE</label>
          </div>
          <input className='inputs formInput' type='text' id='store' name='store' placeholder='STORE' required></input>
          </div>
        </div>

        <input type='submit' id='submit_btn' value='SUBMIT'></input>
        <p className='legal_content'>By entering, I consent to receive emails and direct mails regarding newsletters, announcements, updates, promotions in accordance with the Saturday Cannabis and <a id='link_' href='https://entouragehealthcorp.com/privacy-policy'>Entourage Health Corp Privacy Policy</a>. I understand that my personal information will never be shared or distributed, and will not be used for purposes other than stated as part of the Saturday Cannabis Quiz.</p>
      </form>

    </div>
  )

}

export default Datacapture