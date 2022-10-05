import React from 'react'
import { AppContext } from '../views/CountiesView'
import { openModal } from '../utils/functions/openModal'
import { closeModal } from '../utils/functions/closeModal'
import { Chart } from 'react-google-charts'

export const piechartOptions = {
  width: 300,
  height: 200,
  fontName: 'Source Sans Pro',
  fontSize: 9,
  legend: { position: 'labeled', textStyle: { fontSize: 12, color: '#555' } },
  colors: ['#4281A9', '#669FC3', '#91bAD4', '#BDD6E5'],
  backgroundColor: 'none',
  pieSliceText: 'label',
  is3D: true,
  chartArea: { width: '95%', height: '65%'},
  tooltip: { textStyle: { fontName: 'Source Sans Pro', fontSize: 12, color: '#669FC3' }, ignoreBounds: false, showColorCode: false },
  slices: { 0: { offset: 0.2 } }
}

export const barOptions = {
  width: 300,
  height: 200,
  fontName: 'Source Sans Pro',
  fontSize: 12,
  legend: { position: 'bottom', alignment: 'center' },
  colors: ['#669FC3', '#91bAD4'],
  backgroundColor: 'none',
  bar: { groupWidth: '30%' },
  chartArea: { left: '15%', width: '80%', height: '55%'},
  tooltip: { textStyle: {color: '#4281A9'}, isHtml: false },
  vAxis: { format: 'short', gridlines: {color: '#CCC', count: 3} }
}

const ProjectModal = ({props}) => {

  const {countyFocus, modalState} = React.useContext(AppContext)
  const modalRef = React.useRef()

  openModal(modalState, modalRef)

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

  return (
    <>
    <div className='modal' ref={modalRef}>
      <div className='modal__card card'>
        <div className='modal__card__header flex'>
          <span>Currently viewing...</span>
          <svg onClick={() => closeModal(modalState, modalRef)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        </div>
        <h2>{countyFocus.countyInFocus.name}<em className='card_lg_number_effect'>(0{countyFocus.countyInFocus.number+1})</em></h2>
        <div className='modal__card__top flex'>
          <section>
            <h3>Incumbency</h3>
            <span>Governor:  {props.governor[countyFocus.countyInFocus.number]}</span>
            <span>Senator:  {props.senator[countyFocus.countyInFocus.number]}</span>
          </section>
          <div className='pie_chart flex'>
            <section>
              <h3>Finances (in KES)</h3>
              <Chart
                chartType='ColumnChart'
                data={barData}
                options={barOptions}
              />
            </section>
            <section>
              <h3>Projects (by status)</h3>
              <Chart
                chartType='PieChart'
                data={piechartData}
                options={piechartOptions}
              />
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