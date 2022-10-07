import React from 'react'
import { Chart } from 'react-google-charts'
import { CountyContext } from '../views/CountiesView'
import { openModal } from '../utils/functions/modal'
import { closeModal } from '../utils/functions/modal'
import { piechartOptions } from '../utils/charts'
import { barOptions } from '../utils/charts'

const ProjectModal = ({props}) => {

  const {countyFocus, countyModalState} = React.useContext(CountyContext)
  const modalRef = React.useRef()

  openModal(countyModalState, modalRef)

  const piechartData = [
    ["Projects", "..."],
    ['Completed', 6],
    ['Ongoing', 8],
    ['Scheduled', 4],
    ['Delayed', 3]
  ]

  const barData = [
    ['Conty', 'Expenditure', 'Budget'],
    [countyFocus.countyInFocus.name, 15000000, 11700000]
  ]

  const projectList = props.projectID.map((item, index) => 
    <tr key={index}>
      <td><button>View</button></td>
      <td>{index+1}. {props.projectName[index]}</td>
      <td>{props.department[index]}</td>
      <td>{props.location[index]}</td>
      <td>{props.ward[index]}</td>
      <td>{props.financialYear[index]}</td>
      <td>{props.budget[index]}</td>
      <td>{props.status[index]}</td>
    </tr>
  )

  return (
    <>
    <div className='modal' ref={modalRef}>
      <div className='modal__card card'>
        <div className='modal__card__header flex'>
          <span>Currently viewing...</span>
          <svg className='close_modal_svg' onClick={() => closeModal(countyModalState, modalRef)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        </div>
        <h2>{countyFocus.countyInFocus.name}<em className='card_number_effect_modal'>(0{countyFocus.countyInFocus.number+1})</em></h2>
        <div className='modal__card__top flex'>
          <section>
            <h3>Incumbency</h3>
            <span>Governor:  {props.governor[countyFocus.countyInFocus.number]}</span>
            <span>Senator:  {props.senator[countyFocus.countyInFocus.number]}</span>
          </section>
          <div className='pie_chart flex'>
            <section>
              <h3>Finances (in KES)</h3>
              <Chart chartType='ColumnChart' data={barData} options={barOptions} />
            </section>
            <section>
              <h3>Projects (by status)</h3>
              <Chart chartType='PieChart' data={piechartData} options={piechartOptions} />
            </section>
          </div>
        </div>
        <div className='modal__card__bottom'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Project</th>
                <th>Department</th>
                <th>Location</th>
                <th>Ward</th>
                <th>Financial year</th>
                <th>Budget</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projectList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectModal