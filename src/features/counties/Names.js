import React from 'react'
import { CountyContext } from '../../views/public/Counties'

let prevCards = [0,0]
const projectStatusArray = ['Completed', 'In progress', 'Approved', 'Scheduled']
let statusTotalArray = []
let allCountiesArray = []
let completedArray = [], inProgressArray = [], approvedArray = [], scheduledArray = []

const Names = ({props}) => {
  let countyAllProjects = 0

  const {countyFocus, countyStats, countyModalState} = React.useContext(CountyContext)
  const listHeaderNameRef = React.useRef([])
  const listHeaderNumberRef = React.useRef([])
  const listDetailsRef = React.useRef([])

  for(let x=0; x<47; x++) {
    for(let i=0; i<projectStatusArray.length; i++) {
      statusTotalArray[i] = props.status
      .filter((item, index) =>
        item === projectStatusArray[i] 
        && parseInt(props.locCountyNo[index]-1) === x
        )
      .reduce((acc) => acc + 1, 0)
    }
    allCountiesArray[x] = statusTotalArray[0] + statusTotalArray[1] + statusTotalArray[2] + statusTotalArray[3]
    completedArray[x] = statusTotalArray[0]
    inProgressArray[x] = statusTotalArray[1]
    approvedArray[x] = statusTotalArray[2]
    scheduledArray[x] = statusTotalArray[3]
  }
  statusTotalArray.forEach((value) => countyAllProjects += value )

  const showProjects = (index) => {
    countyFocus.setCountyInFocus({name: props.countyName[index], number: index})
    countyStats.setCountyInFocusStats(statusTotalArray)

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
        listHeaderNameRef.current[prevCards[i]].textContent = props.countyName[index]
        listHeaderNameRef.current[prevCards[i]].style.color =  '#669FC3'
        listHeaderNameRef.current[prevCards[i]].style.width =  '70%'
        listHeaderNameRef.current[prevCards[i]].style.fontSize =  '1.4rem'
        listHeaderNameRef.current[prevCards[i]].style.fontWeight =  '600'
        listHeaderNumberRef.current[prevCards[i]].style.display = 'block'
      }
    }
  }
  
  const countyList = props.countyNo.map((item, index) => 
    <li key={index} className='card card_sm'>
      <div className='counties_list__header' onClick={() => showProjects(index)}>
        <div ref={(item) => listHeaderNameRef.current[index] = item}><span>0{item} | {props.countyName[index]}</span></div>
        <span className='card_number_effect_ex' ref={(item) => listHeaderNumberRef.current[index] = item}>{item}</span>
      </div>
      <div className='counties_list__expand flex' ref={(item) => listDetailsRef.current[index] = item}>
        <div><span>All projects</span><span className='badge'>{allCountiesArray[countyFocus.countyInFocus.number]}</span></div>
        <div><span>Completed</span><span className='badge'>{completedArray[countyFocus.countyInFocus.number]}</span></div>
        <div><span>In progress</span><span className='badge'>{inProgressArray[countyFocus.countyInFocus.number]}</span></div>
        <div><span>Approved</span><span className='badge'>{approvedArray[countyFocus.countyInFocus.number]}</span></div>
        <div><span>Scheduled</span><span className='badge'>{scheduledArray[countyFocus.countyInFocus.number]}</span></div>
        <button className='card_button' onClick={() => countyModalState.setCountyModalState(true)}>View projects</button>
      </div>
    </li>
  )

  return <ul className='counties_list'>{countyList}</ul>
}

export default Names