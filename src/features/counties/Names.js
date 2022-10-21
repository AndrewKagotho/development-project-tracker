import React from 'react'
import { CountyContext } from '../../views/public/Counties'

let prevCards = [0,0]

const Names = ({props}) => {

  const {countyFocus, countyModalState} = React.useContext(CountyContext)
  const listHeaderNameRef = React.useRef([])
  const listHeaderNumberRef = React.useRef([])
  const listDetailsRef = React.useRef([])

  const showProjects = (index) => {
    countyFocus.setCountyInFocus({name: props.countyName[index], number: index})

    for(let a=0; a<prevCards.length; a++) {
      prevCards[0] = prevCards[1]
    }
    prevCards[1] = index

    for(let i=0; i<prevCards.length; i++ ) {
      if(i===0) {
        listDetailsRef.current[prevCards[i]].style.display =  'none'
        listHeaderNameRef.current[prevCards[i]].textContent = `0${prevCards[0]+1} | ${props.countyName[prevCards[0]]}`
        listHeaderNameRef.current[prevCards[i]].style.color =  '#000'
        listHeaderNameRef.current[prevCards[i]].style.width =  '100%'
        listHeaderNameRef.current[prevCards[i]].style.fontSize =  '1rem'
        listHeaderNameRef.current[prevCards[i]].style.fontWeight =  '400'
        listHeaderNumberRef.current[prevCards[i]].style.display = 'none'
      }
      else {
        listDetailsRef.current[prevCards[i]].style.display = 'flex'
        listHeaderNameRef.current[prevCards[i]].textContent = `${props.countyName[index]}`
        listHeaderNameRef.current[prevCards[i]].style.color =  '#669FC3'
        listHeaderNameRef.current[prevCards[i]].style.width =  '65%'
        listHeaderNameRef.current[prevCards[i]].style.fontSize =  '1.4rem'
        listHeaderNameRef.current[prevCards[i]].style.fontWeight =  '600'
        listHeaderNumberRef.current[prevCards[i]].style.display = 'block'
      }
    }
  }

  const countyList = props.countyNo.map((item, index) => 
    <li key={index} className='card card_sm'>
      <div className='counties_list__header' onClick={() => showProjects(index)}>
        <div ref={(item) => listHeaderNameRef.current[index] = item}><span>0{props.countyNo[index]} | {props.countyName[index]}</span></div>
        <span className='card_number_effect_ex' ref={(item) => listHeaderNumberRef.current[index] = item}>{props.countyNo[index]}</span>
      </div>
      <div className='counties_list__expand flex' ref={(item) => listDetailsRef.current[index] = item}>
        <div><span>All projects</span><span className='badge'>#</span></div>
        <div><span>Completed</span><span className='badge'>#</span></div>
        <div><span>In progress</span><span className='badge'>#</span></div>
        <div><span>Scheduled</span><span className='badge'>#</span></div>
        <button className='card_button' onClick={() => countyModalState.setCountyModalState(true)}>View projects</button>
      </div>
    </li>
  )

  return <ul className='counties_list'>{countyList}</ul>
}

export default Names