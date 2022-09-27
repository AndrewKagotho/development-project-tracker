import React from 'react'
import { connect } from 'react-redux'
import Counties from '../components/counties'
// import { countiesArr } from '../utils/arrays/countiesArray'

let prevCards = [0,0]

const CountiesView = (props) => {

  const listHeaderNameRef = React.useRef([])
  const listHeaderNumberRef = React.useRef([])
  const listDetailsRef = React.useRef([])

  const showProjects = (index) => {

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
        listHeaderNameRef.current[prevCards[i]].style.width =  '60%'
        listHeaderNameRef.current[prevCards[i]].style.fontSize =  '1.4rem'
        listHeaderNameRef.current[prevCards[i]].style.fontWeight =  '600'
        listHeaderNumberRef.current[prevCards[i]].style.display = 'block'
      }
    }
  }

  const countyList = props.countyNo.map((item, index) => 
    <li key={index} className='card_sm' onClick={() => showProjects(index)}>
      <div className='county_list__header'>
        <div ref={(item) => listHeaderNameRef.current[index] = item}><span>0{props.countyNo[index]} | {props.countyName[index]}</span></div>
        <span className='card_sm_number_effect' ref={(item) => listHeaderNumberRef.current[index] = item}>{props.countyNo[index]}</span>
      </div>
      <div className='county_list__expand flex' ref={(item) => listDetailsRef.current[index] = item}>
        <span>All projects</span>
        <span>Ongoing</span>
        <span>Scheduled</span>
        <span>Delayed</span>
        <a className='card_a' rel="noreferrer" href='/'>View projects</a>
      </div>
    </li>
  )

  return (
    <section className='view_content'>
      <h2>Map of counties</h2>
      <div className='flex'>
        <Counties />
        <ul className='counties_list'>{countyList}</ul>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    countyNo: state.counties.number,
    countyName: state.counties.name
  }
}

export default connect(mapStateToProps)(CountiesView)