import React from 'react'
import { CountyContext } from '../../views/public/Counties'
import { Chart } from 'react-google-charts'
import { barOptions } from '../../utils/charts'

const ModalTop = ({props}) => {
  let countyAllProjects = 0

  const {countyFocus, countyStats} = React.useContext(CountyContext)

  countyStats.countyInFocusStats.forEach((item) => countyAllProjects += item)
  
  const barData = [
    ['County', 'Estimated cost', 'Budget'],
    [countyFocus.countyInFocus.name, parseInt(props.estimatedCost), parseInt(props.budget)]
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
            <span>Total:  <b>{countyAllProjects}</b></span>
            <span>Completed:  <b>{countyStats.countyInFocusStats[0]}</b></span>
            <span>In progress:  <b>{countyStats.countyInFocusStats[1]}</b></span>
            <span>Approved:  <b>{countyStats.countyInFocusStats[2]}</b></span>
            <span>Scheduled:  <b>{countyStats.countyInFocusStats[3]}</b></span>
          </div>
        </section>
      </div>
      <section>
        <h3>Finances (in KES)</h3>
        <Chart chartType='ColumnChart' data={barData} options={barOptions} />
      </section>
    </div>
  )
}

export default ModalTop