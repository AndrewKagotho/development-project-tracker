import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openLoginPanel } from '../../utils/functions/panels'
import { closeLoginPanel } from '../../utils/functions/panels'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getTimelineDetails } from '../../utils/functions/getTimelineDetails'
import { getImplementationDetails } from '../../utils/functions/getImplementationDetails'
import { getFinanceDetails } from '../../utils/functions/getFinanceDetails'
import { getLocationDetails } from '../../utils/functions/getLocationDetails'

let updateProjectScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateProject.php'
let updateTimelineScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateTimeline.php'
let updateImplementationScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateImplementation.php'
let updateFinanceScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateFinance.php'
let updateLocationScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateLocation.php'
let formFields

const UpdateProjectPanel = ({props}) => {

  const {tableFocus, recordFocus, updateProjectPanelState, infoModal} = React.useContext(DashboardContext)
  const updateProjectPanelRef = React.useRef()

  openLoginPanel(updateProjectPanelRef, updateProjectPanelState.updateProjectPanel)

  const handleChange = (e) => recordFocus.setRecordInFocus({...recordFocus.recordInFocus, [e.target.name]: e.target.value })

  const handleSubmit = (e, table) => {
    let sendMeta = {script: '', action: ''}
    
    if(table === 'projects') { sendMeta = { script: updateProjectScript, action: getProjectDetails }}
    if(table === 'timelines') { sendMeta = { script: updateTimelineScript, action: getTimelineDetails }}
    if(table === 'implementation') { sendMeta = { script: updateImplementationScript, action: getImplementationDetails }}
    if(table === 'finances') { sendMeta = { script: updateFinanceScript, action: getFinanceDetails }}
    if(table === 'locations') { sendMeta = { script: updateLocationScript, action: getLocationDetails }}

    axios.post(sendMeta.script, recordFocus.recordInFocus)
    .then((response) => {
      if(response.data) {
        infoModal.setInfoModalProps({state: true, text:'Successfully updated!'})
        sendMeta.action(props)
      }
      else
        infoModal.setInfoModalProps({state: true, text:'Error!'})
    })

    closeLoginPanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)
    e.preventDefault()
  }

  if(tableFocus.tableInFocus === 'projects')
    formFields = (
      <>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' defaultValue={recordFocus.recordInFocus.name} key={recordFocus.recordInFocus.name} onChange={handleChange} required />
        <label htmlFor='description'>Description:</label>
        <input type='text' id='description' name='description' defaultValue={recordFocus.recordInFocus.description} key={recordFocus.recordInFocus.description} onChange={handleChange} />
        <label htmlFor='status'>Status:</label>
        <select id='status' name='status' value={recordFocus.recordInFocus.status} onChange={handleChange} >
          <option value='Completed'>Completed</option>
          <option value='In progress'>In progress</option>
          <option value='Not started'>Not started</option>
          <option value='Approved'>Approved</option>
          <option value='Delayed'>Delayed</option>
        </select>
      </>
    )

  else if(tableFocus.tableInFocus === 'timelines')
    formFields = (
      <>
        <label htmlFor='approvalDate'>Approval date:</label>
        <input type='text' id='approvalDate' name='approvalDate' defaultValue={recordFocus.recordInFocus.approvalDate} key={recordFocus.recordInFocus.approvalDate} onChange={handleChange} />
        <label htmlFor='startDate'>Start date:</label>
        <input type='text' id='startDate' name='startDate' defaultValue={recordFocus.recordInFocus.startDate} key={recordFocus.recordInFocus.startDate} onChange={handleChange} />
        <label htmlFor='endDate'>End date:</label>
        <input type='text' id='endDate' name='endDate' defaultValue={recordFocus.recordInFocus.endDate} key={recordFocus.recordInFocus.endDate} onChange={handleChange} />
        <label htmlFor='duration'>Duration (months):</label>
        <input type='text' id='duration' name='duration' defaultValue={recordFocus.recordInFocus.duration} key={recordFocus.recordInFocus.duration} onChange={handleChange} />
      </>
    )

  else if(tableFocus.tableInFocus === 'implementation')
    formFields = (
      <>
        <label htmlFor='sector'>Sector:</label>
        <input type='text' id='sector' name='sector' defaultValue={recordFocus.recordInFocus.sector} key={recordFocus.recordInFocus.sector} onChange={handleChange} />
        <label htmlFor='ministry'>Ministry:</label>
        <input type='text' id='ministry' name='ministry' defaultValue={recordFocus.recordInFocus.ministry} key={recordFocus.recordInFocus.ministry} onChange={handleChange} />
        <label htmlFor='agency'>Implementing agency:</label>
        <input type='text' id='agency' name='agency' defaultValue={recordFocus.recordInFocus.agency} key={recordFocus.recordInFocus.agency} onChange={handleChange} />
        <label htmlFor='contractor'>Contractor:</label>
        <input type='text' id='contractor' name='contractor' defaultValue={recordFocus.recordInFocus.contractor} key={recordFocus.recordInFocus.contractor} onChange={handleChange} />
        <label htmlFor='priority'>Priority:</label>
        <select id='priority' name='priority' value={recordFocus.recordInFocus.priority} onChange={handleChange} >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </>
    )

  else if(tableFocus.tableInFocus === 'finances')
    formFields = (
      <>
        <label htmlFor='estimatedCost'>Estimated cost:</label>
        <input type='text' id='estimatedCost' name='estimatedCost' defaultValue={recordFocus.recordInFocus.estimatedCost} key={recordFocus.recordInFocus.estimatedCost} onChange={handleChange} />
        <label htmlFor='budget'>Budget:</label>
        <input type='text' id='budget' name='budget' defaultValue={recordFocus.recordInFocus.budget} key={recordFocus.recordInFocus.budget} onChange={handleChange} />
        <label htmlFor='financialYear'>Financial year:</label>
        <input type='text' id='financialYear' name='financialYear' defaultValue={recordFocus.recordInFocus.financialYear} key={recordFocus.recordInFocus.financialYear} onChange={handleChange} />
        <label htmlFor='fundingSource'>Source of funding:</label>
        <input type='text' id='fundingSource' name='fundingSource' defaultValue={recordFocus.recordInFocus.fundingSource} key={recordFocus.recordInFocus.fundingSource} onChange={handleChange} />
      </>
    )

  else if(tableFocus.tableInFocus === 'locations')
    formFields = (
      <>
        <label htmlFor='countyNo'>County:</label>
        <input type='text' id='countyNo' name='countyNo' defaultValue={recordFocus.recordInFocus.countyNo} key={recordFocus.recordInFocus.countyNo} onChange={handleChange} />
        <label htmlFor='subCounty'>Sub-county:</label>
        <input type='text' id='subCounty' name='subCounty' defaultValue={recordFocus.recordInFocus.subCounty} key={recordFocus.recordInFocus.subCounty} onChange={handleChange} />
        <label htmlFor='constituency'>Constituency:</label>
        <input type='text' id='constituency' name='constituency' defaultValue={recordFocus.recordInFocus.constituency} key={recordFocus.recordInFocus.constituency} onChange={handleChange} />
        <label htmlFor='ward'>Ward:</label>
        <input type='text' id='ward' name='ward' defaultValue={recordFocus.recordInFocus.ward} key={recordFocus.recordInFocus.ward} onChange={handleChange} />
      </>
    )

  return (
    <div className='sidePanel' ref={updateProjectPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={(event) => handleSubmit(event, tableFocus.tableInFocus)}>
          <h3>Updating projectID <em>'{recordFocus.recordInFocus.projectID}'</em></h3>
          <div className='sidePanel__content__grid'>
            {formFields}
          </div>
          <button>Update details</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProjectPanel