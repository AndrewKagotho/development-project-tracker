import React from 'react'
import { AppContext } from '../../App'
import { CountyContext } from '../../views/public/Counties'
import { Chart } from 'react-google-charts'
import { barOptions } from '../../utils/charts'

const ModalTop = ({props}) => {

  const {statsValues} = React.useContext(AppContext)
  const {countyFocus} = React.useContext(CountyContext)

  let projectsInCounty = props.projectID.map((item, index) => index)
  .filter((index) => parseInt(props.locCountyNo[index]-1) === countyFocus.countyInFocus.number)

  let totalEstimate = projectsInCounty.reduce((acc, index) => acc + parseInt(props.estimatedCost[index]), 0)
  let totalBudget = projectsInCounty.reduce((acc, index) => acc + parseInt(props.budget[index]), 0)
  
  const barData = [
    ['County', 'Estimated cost', 'Budget'],
    [countyFocus.countyInFocus.name, totalEstimate, totalBudget]
  ]

  return (
    <div className='modal__card__top flex'>
      <div>
        <section>
          <h3>Incumbency</h3>
          <span>Governor:  {props.governor[countyFocus.countyInFocus.number]}</span>
          <span>Senator:  {props.senator[countyFocus.countyInFocus.number]}</span>
        </section>
        <section>
          <h3>Projects</h3>
          <div className='modal__card__top__summary flex'>
            <span>Total:  <b>{statsValues.stats.allProjects[countyFocus.countyInFocus.number]}</b></span>
            <span>Completed:  <b>{statsValues.stats.completed[countyFocus.countyInFocus.number]}</b></span>
            <span>In progress:  <b>{statsValues.stats.inProgress[countyFocus.countyInFocus.number]}</b></span>
            <span>Approved:  <b>{statsValues.stats.approved[countyFocus.countyInFocus.number]}</b></span>
            <span>Scheduled:  <b>{statsValues.stats.scheduled[countyFocus.countyInFocus.number]}</b></span>
          </div>
        </section>
      </div>
      <section>
        <h3>Finances (in KSH)</h3>
        <Chart chartType='ColumnChart' data={barData} options={barOptions} />
      </section>
    </div>
  )
}

export default ModalTop