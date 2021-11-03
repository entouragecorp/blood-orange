import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useHistory } from 'react-router'
import QuizOrangeBg from './../Assets/orange-vape-bg.png'
import QuizGreenBg from './../Assets/green-quiz-bg.png'

/**
* @author
* @function Quiz
**/

// We are going to have a list of questions
// from this list we're going to randomly select an index
// this index will be stored in memory and deleted from the other array
// we then run an conditional statement to determine what are the answers
// we then concatinate when the answer is correct or do nothing if it is not. 
// we're nor going to call and random search function on the old array for another question. 

const Quiz = (props) => {
    var completed = []
    var points = 0
    var counter = 0
    var bg_counter = 0
    const question = useRef()
    const a = useRef()
    const b = useRef()
    const c = useRef()
    const d = useRef()
    const bg = useRef()
    const questionaire_limit = 5
    const list_of_questions = ['1. Saturday 1G Blood Orange', '2. Saturday Blood Orange is priced perfectly for which on-the-go shopper?', "3. When speaking about the 1G Blood Orange product, I'd start with:", "4. Orange flavour can be difficult to nail, but Saturday's Blood Orange has done so beautifully because:", '5. I’d Recommend Saturday Blood Orange to a shopper in a situation where:']
    const history = useHistory()
    var set_forth_div = ['false']
    


    useEffect(() => {
        randList()
    }, [])








    const randList = () => {
        gsap.to('.green_bg', {backgroundColor: '#535938', duration: 0})
        var newList = list_of_questions

        if (completed.length >= questionaire_limit) {
           
            if(points < 4){ 
                localStorage.setItem('points', points)
                history.push('/points')
                // window.location.reload()
            }
            else{ 
                localStorage.setItem('points', points)
                history.push('/data-capture')
            }
           
        } else {
            // Math.round(Math.random() * 4)
            let random = counter++
            const check_completed = completed.find(element => element == random)

            // For some reason zero is being ignored. That why it's in the conditional statement below. 
            if (check_completed || check_completed === 0) {
                randList()
            }
            else {
                completed.push(random)
                question.current.textContent = list_of_questions[random]
                console.log(completed)
                switch (random) {
                    case 0:
                        bg.current.style.background = `url(${QuizOrangeBg})`
                        bg.current.style.backgroundSize = 'cover'
                        a.current.textContent = 'Is a Hybrid Offering'
                        b.current.textContent = 'Is an Indica'
                        c.current.textContent = 'Is a Sativa'
                        d.current.textContent = 'All the above'
                       
                        break;
                    case 1:
                        bg.current.style.background = `url(${QuizGreenBg})`
                        bg.current.style.backgroundSize = 'cover'
                        a.current.textContent = 'Price Sensitive'
                        b.current.textContent = 'High End'
                        c.current.textContent = 'Mainstream'
                        d.current.textContent = 'All the above'
                       
                        break;
                    case 2:
                        bg.current.style.background = `url(${QuizOrangeBg})`
                        bg.current.style.backgroundSize = 'cover'
                        a.current.textContent = 'The Brand'
                        b.current.textContent = 'The Value'
                        c.current.textContent = 'The Potency'
                        d.current.textContent = 'The Flavour'
                       
                        break;
                    case 3:
                        bg.current.style.background = `url(${QuizGreenBg})`
                        bg.current.style.backgroundSize = 'cover'
                        a.current.textContent = "It's crafted with terpenes and other aromatic compounds native to both oranges and cannabis"
                        b.current.textContent = "It's all limonene, which is the only citrus aromatic you need"
                        c.current.textContent = "We hired the Keebler elves."
                        d.current.textContent = 'All the above'
                       
                        break;
                    case 4:
                        bg.current.style.background = `url(${QuizOrangeBg})`
                        bg.current.style.backgroundSize = 'cover'
                        a.current.textContent = 'An experienced or occasional cannabis shopper who is seeking a smooth, high-THC joint-smoking experience and values the dollars in their pocket.'
                        b.current.textContent = 'A shopper who is new to cannabis or is re-entering the category after many years, and is looking for a balanced offering.'
                        c.current.textContent = 'An experienced or occasional smoker who is looking for a tasty, high-THC experience while they’re on-the-go that won’t break the bank'
                        d.current.textContent = 'An occasional smoker who is looking for edibles.'
                       
                        break;
                }
            }
        }
    }


 

    const selectved_answer = (selected_data) => { 
    

        gsap.to(`.${selected_data}`, {backgroundColor: '#40473F', duration: 0.5})
        switch(completed[completed.length -1]){
            case 0: 
            if(selected_data == 'c'){ c.current.textContent = 'Correct'; points++;  console.log(`updated points: ${points}`)}
            else{  eval(selected_data).current.textContent = 'Incorrect'; }
            break;

            case 1:
                if(selected_data == 'a'){ a.current.textContent = 'Correct'; points++;  console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect';}

                break;
            case 2:
                if(selected_data == 'd'){ d.current.textContent = 'Correct'; points++;  console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}

                break;
            case 3:
                if(selected_data == 'b'){ b.current.textContent = 'Correct'; points++;  console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}

                break;
            case 4:
                if(selected_data == 'c'){ c.current.textContent = 'Correct'; points++;  console.log(`updated points: ${points}`)}
                else{ eval(selected_data).current.textContent = 'Incorrect'}
                break;
        }


    setTimeout(()=>{
        randList()
    }, 1000)
        
 
    }
    

    return (
        <div className={'Prizing'} ref={bg}>
            <div id='quiz_holder'>
                <div id='title_holder'>
                    <h3 ref={question}></h3>
                </div>
                <div id='answer_list'>
                    <div className='green_bg a' onClick={() => selectved_answer('a')}><p className='ans' ref={a}></p></div>
                    <div className='green_bg b' onClick={() => selectved_answer('b')}><p className='ans' ref={b}></p></div>
                    <div className='green_bg c' onClick={() => selectved_answer('c')}><p className='ans' ref={c}></p></div>
                    <div className={set_forth_div == 'true'?'displayNone':'green_bg d'} onClick={() => selectved_answer('d')}><p className='ans' ref={d}></p></div>
                </div>
            </div>
        </div>
    )

}

export default Quiz
