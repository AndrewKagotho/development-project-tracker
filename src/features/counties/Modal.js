import React from 'react'
import { Chart } from 'react-google-charts'
import { CountyContext } from '../../views/public/Counties'
import { openModal } from '../../utils/functions/modal'
import { closeModal } from '../../utils/functions/modal'
import { barOptions } from '../../utils/charts'
import ProjectDetailsPanel from '../../layout/public/ProjectDetailsPanel'

let projectList, resultSetLength

const Modal = ({props}) => {

  const {countyFocus, projectFocus, countyModalState, projectDetailsPanelState} = React.useContext(CountyContext)
  const modalRef = React.useRef()
  const resultsRef = React.useRef()

  openModal(countyModalState.openCountyModal, modalRef)

  const showProjectDetails = (index) => {
    projectDetailsPanelState.setProjectDetailsPanelStatus(true)
    projectFocus.setProjectInFocus(index)
  }

  const [searchContent, setSearchContent] = React.useState({state: false, value:''})

  const barData = [
    ['County', 'Estimated cost', 'Budget'],
    [countyFocus.countyInFocus.name, parseInt(props.estimatedCost), parseInt(props.budget)]
  ]

  if(!searchContent.state) {
    projectList = props.projectID.map((item, index) => 
      <tr key={index}>
        <td className='td_view_project' onClick={() => showProjectDetails(index)}>
          <svg className='visibilitySVG' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        </td>
        <td>{props.projectID[index]}</td>
        <td>{props.projectName[index]}</td>
        <td>{props.startDate[index]}</td>
        <td>{props.duration[index]} months</td>
        <td>{props.sector[index]}</td>
        <td>{props.estimatedCost[index]}</td>
        <td>{props.financialYear[index]}</td>
        <td>{props.status[index]}</td>
      </tr>
    )
  }

  const handleChange = (e) => {
    setSearchContent({state: true, value: e.target.value})
    resultsRef.current.style.display = 'block'

    let selectedInput = e.target.name
    let inputValue = e.target.value
    let filterArray

    if(selectedInput === 'projectID') filterArray = props.projectID
    else if(selectedInput === 'projectName') filterArray = props.projectName
    else if(selectedInput === 'startDate') filterArray = props.startDate
    else if(selectedInput === 'duration') filterArray = props.duration
    else if(selectedInput === 'sector') filterArray = props.sector
    else if(selectedInput === 'estimatedCost') filterArray = props.estimatedCost
    else if(selectedInput === 'financialYear') filterArray = props.financialYear
    else if(selectedInput === 'status') filterArray = props.status

    projectList = props.projectID.map((item, index) =>
      <tr key={index}>
        <td className='td_view_project' onClick={() => showProjectDetails(index)}><svg className='visibilitySVG' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg></td>
        <td>{item}</td>
        <td>{props.projectName[index]}</td>
        <td>{props.startDate[index]}</td>
        <td>{props.duration[index]} months</td>
        <td>{props.sector[index]}</td>
        <td>{props.estimatedCost[index]}</td>
        <td>{props.financialYear[index]}</td>
        <td>{props.status[index]}</td>
      </tr>
    )
    .filter((item, index) => 
      filterArray[index][inputValue.length-1] === inputValue[inputValue.length-1]
      && filterArray[index][inputValue.length-2] === inputValue[inputValue.length-2]
      && filterArray[index][inputValue.length-3] === inputValue[inputValue.length-3]
    )
    
    resultSetLength = projectList.reduce((acc) => acc + 1, 0)
  }

  return (
    <>
    <div className='modal' ref={modalRef}>
      <div className='modal__card card'>
        <div className='modal__card__header flex'>
          <span>Currently viewing...</span>
          <svg className='close_modal_svg' onClick={() => closeModal(countyModalState.setCountyModalState, modalRef)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        </div>
        <h2>{countyFocus.countyInFocus.name}<em className='card_number_effect_modal'>(0{countyFocus.countyInFocus.number+1})</em></h2>
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
                <span>Total: <b>#</b></span>
                <span>Completed: <b>#</b></span>
                <span>In progress: <b>#</b></span>
                <span>Approved: <b>#</b></span>
                <span>Scheduled: <b>#</b></span>
                <span>Delayed: <b>#</b></span>
              </div>
            </section>
          </div>
          <section>
            <h3>Finances (in KES)</h3>
            <Chart chartType='ColumnChart' data={barData} options={barOptions} />
          </section>
        </div>
        <div className='modal__card__table_extras flex'>
          <span>Rows and stuff</span>
          <span ref={resultsRef}>Results found: {resultSetLength}</span>
        </div>
        <div className='table_container'>
          <table className='table_wd'>
            <thead>
              <tr>
                <th></th>
                <th>Project ID</th>
                <th>Project name</th>
                <th>Start date</th>
                <th>Duration</th>
                <th>Sector</th>
                <th>Est. cost</th>
                <th>FIN year</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className='tr_search'>
                <td></td>
                <td><input type='search' name='projectID' value={searchContent.projectID} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='projectName' value={searchContent.projectName} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='startDate' value={searchContent.startDate} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='duration' value={searchContent.duration} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='sector' value={searchContent.sector} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='estimatedCost' value={searchContent.estimatedCost} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='financialYear' value={searchContent.financialYear} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='status' value={searchContent.status} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
              </tr>
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