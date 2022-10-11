import React from 'react'
import { Chart } from 'react-google-charts'
import { CountyContext } from '../../views/public/Counties'
import { openModal } from '../../utils/functions/modal'
import { closeModal } from '../../utils/functions/modal'
import { barOptions } from '../../utils/charts'
import ProjectDetailsPanel from '../../layout/public/ProjectDetailsPanel'

const Modal = ({props}) => {

  const {countyFocus, countyModalState, projectDetailsPanelState} = React.useContext(CountyContext)
  const modalRef = React.useRef()

  openModal(countyModalState, modalRef)

  const barData = [
    ['Conty', 'Estimated cost', 'Budget'],
    [countyFocus.countyInFocus.name, parseInt(props.estimatedCost), parseInt(props.budget)]
  ]

  const projectList = props.projectID.map((item, index) => 
    <tr key={index}>
      <td><button onClick={() => projectDetailsPanelState.setProjectDetailsPanelStatus(true)}>View</button></td>
      <td>{index+1}. {props.projectName[index]}</td>
      <td>{props.constituency[index]}</td>
      <td>{props.status[index]}</td>
      <td>{props.duration[index]}</td>
      <td>{props.sector[index]}</td>
      <td>{props.estimatedCost[index]}</td>
      <td>{props.financialYear[index]}</td>
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
          <section>
            <h3>Finances (in KES)</h3>
            <Chart chartType='ColumnChart' data={barData} options={barOptions} />
          </section>
        </div>
        <div className='table_container'>
          <table className='table_wd'>
            <thead>
              <tr>
                <th></th>
                <th>Project name</th>
                <th>Constituency</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Sector</th>
                <th>Est. cost</th>
                <th>FIN year</th>
              </tr>
            </thead>
            <tbody>
              {projectList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ProjectDetailsPanel props={props} />
    </>
  )
}

export default Modal