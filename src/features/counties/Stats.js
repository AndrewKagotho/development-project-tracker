import React from 'react'
import { AppContext } from '../../App'

const Stats = ({props}) => {

  let nationalAllProjects = 0
  let nationalCompleted = 0
  let nationalInProgress = 0
  let nationalApproved = 0
  let nationalScheduled = 0
  
  const {statsValues} = React.useContext(AppContext)

  for(let i=0; i<47; i++) nationalAllProjects += statsValues.stats.allProjects[i]
  for(let i=0; i<47; i++) nationalCompleted += statsValues.stats.completed[i]
  for(let i=0; i<47; i++) nationalInProgress += statsValues.stats.inProgress[i]
  for(let i=0; i<47; i++) nationalApproved += statsValues.stats.approved[i]
  for(let i=0; i<47; i++) nationalScheduled += statsValues.stats.scheduled[i]


  return (
    <section className='page_section'>
      <h2>National Statistics</h2>
      <p>A summary of the national project statistics.</p>
      <div className='page_section__stats flex'>
        <div className='card card_md flex'>
          <span>All projects</span>
          <span className='badge'>{nationalAllProjects}</span>
        </div>
        <div className='card card_md flex'>
          <span>Completed</span>
          <span className='badge'>{nationalCompleted}</span>
        </div>
        <div className='card card_md flex'>
          <span>In progress</span>
          <span className='badge'>{nationalInProgress}</span>
        </div>
        <div className='card card_md flex'>
          <span>Approved</span>
          <span className='badge'>{nationalApproved}</span>
        </div>
        <div className='card card_md flex'>
          <span>Scheduled</span>
          <span className='badge'>{nationalScheduled}</span>
        </div>
      </div>
    </section>
  )
}

export default Stats