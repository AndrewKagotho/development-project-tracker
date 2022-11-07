import React from 'react'
import { AppContext } from '../../App'
import { CountyContext } from '../../views/public/Counties'

let prevCards = [0,0]

const Names = ({props}) => {

  const {statsValues} = React.useContext(AppContext)
  const {countyFocus, countyModalState, searchState, resultsRef} = React.useContext(CountyContext)
  const listHeaderNameRef = React.useRef([])
  const listHeaderNumberRef = React.useRef([])
  const listDetailsRef = React.useRef([])

  const showCountySummary = (index) => {
    countyFocus.setCountyInFocus({name: props.countyName[index], number: index})

    prevCards[0] = prevCards[1]
    prevCards[1] = index

    for(let j=0; j<prevCards.length; j++ ) {
      if(j===0) {
        listDetailsRef.current[prevCards[j]].style.display =  'none'
        listHeaderNameRef.current[prevCards[j]].textContent = `0${prevCards[0]+1} | ${props.countyName[prevCards[0]]}`
        listHeaderNameRef.current[prevCards[j]].style.color =  '#000'
        listHeaderNameRef.current[prevCards[j]].style.width =  '100%'
        listHeaderNameRef.current[prevCards[j]].style.fontSize =  '1rem'
        listHeaderNameRef.current[prevCards[j]].style.fontWeight =  '400'
        listHeaderNumberRef.current[prevCards[j]].style.display = 'none'
      }
      else {
        listDetailsRef.current[prevCards[j]].style.display = 'flex'
        listHeaderNameRef.current[prevCards[j]].textContent = props.countyName[index]
        listHeaderNameRef.current[prevCards[j]].style.color =  '#659FC3'
        listHeaderNameRef.current[prevCards[j]].style.width =  '70%'
        listHeaderNameRef.current[prevCards[j]].style.fontSize =  '1.4rem'
        listHeaderNameRef.current[prevCards[j]].style.fontWeight =  '600'
        listHeaderNumberRef.current[prevCards[j]].style.display = 'block'
      }
    }
  }

  const viewProjects = () => {
    countyModalState.setCountyModalState(true)
    searchState.setSearchContent({selectedInput: '', inputValue: ''})
    resultsRef.current.style.display = 'none'
  }
  
  const countyList = props.countyNo.map((item, index) => 
    <li key={index} className='card card_sm'>
      <div className='counties_list__header' onClick={() => showCountySummary(index)}>
        <div ref={(item) => listHeaderNameRef.current[index] = item}><span>0{item} | {props.countyName[index]}</span></div>
        <span className='card_number_effect_ex' ref={(item) => listHeaderNumberRef.current[index] = item}>{item}</span>
      </div>
      <div className='counties_list__expand flex' ref={(item) => listDetailsRef.current[index] = item}>
        <div><span>All projects</span><span className='badge'>{statsValues.stats.allProjects[countyFocus.countyInFocus.number]}</span></div>
        <div><span>Completed</span><span className='badge'>{statsValues.stats.completed[countyFocus.countyInFocus.number]}</span></div>
        <div><span>In progress</span><span className='badge'>{statsValues.stats.inProgress[countyFocus.countyInFocus.number]}</span></div>
        <div><span>Approved</span><span className='badge'>{statsValues.stats.approved[countyFocus.countyInFocus.number]}</span></div>
        <div><span>Scheduled</span><span className='badge'>{statsValues.stats.scheduled[countyFocus.countyInFocus.number]}</span></div>
        <button className='card_button' onClick={viewProjects}>View projects</button>
      </div>
    </li>
  )

  return <ul className='counties_list'>{countyList}</ul>
}

export default Names