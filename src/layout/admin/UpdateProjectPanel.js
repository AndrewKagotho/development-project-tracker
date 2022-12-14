import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openSidePanel } from '../../utils/functions/panels'
import { closeSidePanel } from '../../utils/functions/panels'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getProjectTimelines } from '../../utils/functions/getProjectTimelines'
import { getProjectImplementations } from '../../utils/functions/getProjectImplementations'
import { getProjectFinances } from '../../utils/functions/getProjectFinances'
import { getProjectLocations } from '../../utils/functions/getProjectLocations'
import { getTrackingLogs } from '../../utils/functions/getTrackingLogs'

let updateProjectScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateProject.php'
let updateTimelineScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateTimeline.php'
let updateImplementationScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateImplementation.php'
let updateFinanceScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateFinance.php'
let updateLocationScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateLocation.php'
let logChangesScript = 'http://localhost/development-project-tracker/src/utils/php/insert/logChanges.php'
let formFields

const UpdateProjectPanel = ({props}) => {

  const {tableFocus, recordFocus, updateProjectPanelState, infoModal, trackingValues} = React.useContext(DashboardContext)
  const updateProjectPanelRef = React.useRef()

  openSidePanel(updateProjectPanelRef, updateProjectPanelState.updateProjectPanel)

  const handleChange = (e) => {
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus, [e.target.name]: e.target.value })

    let propsName, propsValue
    if(e.target.name === 'name') {propsValue = props.projectName; propsName = 'project name'}
    else if(e.target.name === 'description') {propsValue = props.description; propsName = 'description'}
    else if(e.target.name === 'status') {propsValue = props.status; propsName = 'status'}
    else if(e.target.name === 'approvalDate') {propsValue = props.approvalDate; propsName = 'approval date'}
    else if(e.target.name === 'startDate') {propsValue = props.startDate; propsName = 'start date'}
    else if(e.target.name === 'endDate') {propsValue = props.endDate; propsName = 'end date'}
    else if(e.target.name === 'duration') {propsValue = props.duration; propsName = 'duration'}
    else if(e.target.name === 'sector') {propsValue = props.sector; propsName = 'sector'}
    else if(e.target.name === 'ministry') {propsValue = props.ministry; propsName = 'ministry'}
    else if(e.target.name === 'agency') {propsValue = props.agency; propsName = 'agency'}
    else if(e.target.name === 'contractor') {propsValue = props.contractor; propsName = 'contractor'}
    else if(e.target.name === 'priority') {propsValue = props.priority; propsName = 'priority'}
    else if(e.target.name === 'estimatedCost') {propsValue = props.estimatedCost; propsName = 'estimated cost'}
    else if(e.target.name === 'budget') {propsValue = props.budget; propsName = 'budget'}
    else if(e.target.name === 'financialYear') {propsValue = props.financialYear; propsName = 'financial year'}
    else if(e.target.name === 'fundingSource') {propsValue = props.fundingSource; propsName = 'funding source'}
    else if(e.target.name === 'countyNo') {propsValue = props.locCountyNo; propsName = 'county'}
    else if(e.target.name === 'subCounty') {propsValue = props.subCounty; propsName = 'sub county'}
    else if(e.target.name === 'constituency') {propsValue = props.constituency; propsName = 'constituency'}
    else if(e.target.name === 'ward') {propsValue = props.ward; propsName = 'ward'}

    trackingValues.setTrackedChanges({...trackingValues.trackedChanges,
      projectID: recordFocus.recordInFocus.projectID,
      [propsName]: [propsValue[recordFocus.recordInFocus.recordIndex], e.target.value]
    })
  }

  const handleSubmit = (e, table) => {
    let sendMeta = {script: '', action: ''}
    
    if(table === 'projects') sendMeta = {script: updateProjectScript, action: getProjectDetails}
    if(table === 'timelines') sendMeta = {script: updateTimelineScript, action: getProjectTimelines}
    if(table === 'implementation') sendMeta = {script: updateImplementationScript, action: getProjectImplementations}
    if(table === 'finances') sendMeta = {script: updateFinanceScript, action: getProjectFinances}
    if(table === 'locations') sendMeta = {script: updateLocationScript, action: getProjectLocations}

    axios.post(sendMeta.script, recordFocus.recordInFocus)
    .then((response) => {
      if(response.data) {
        axios.post(logChangesScript, trackingValues.trackedChanges)
        infoModal.setInfoModalProps({state: true, icon:'success', text:'Successfully updated!'})
        sendMeta.action(props)
        getTrackingLogs(props)
      }
      else
        infoModal.setInfoModalProps({state: true, icon:'fail', text:'Error! Try again.'})
    })

    closeSidePanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)
    e.preventDefault()
  }

  if(tableFocus.tableInFocus === 'projects')
    formFields = (
      <>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' defaultValue={props.projectName[recordFocus.recordInFocus.recordIndex]} key={props.projectName[recordFocus.recordInFocus.recordIndex] + ':name'} onChange={handleChange} required />
        <label htmlFor='description'>Description:</label>
        <textarea type='text' id='description' name='description' defaultValue={props.description[recordFocus.recordInFocus.recordIndex]} key={props.description[recordFocus.recordInFocus.recordIndex] + ':description'} onChange={handleChange} />
        <label htmlFor='status'>Status:</label>
        <select id='status' name='status' defaultValue={props.status[recordFocus.recordInFocus.recordIndex]} key={props.status[recordFocus.recordInFocus.recordIndex] + ':status'} onChange={handleChange} >
          <option value='Scheduled'>Scheduled</option>
          <option value='Approved'>Approved</option>
          <option value='In progress'>In progress</option>
          <option value='Completed'>Completed</option>
        </select>
      </>
    )

  else if(tableFocus.tableInFocus === 'timelines')
    formFields = (
      <>
        <label htmlFor='approvalDate'>Approval date:</label>
        <input type='text' id='approvalDate' name='approvalDate' defaultValue={props.approvalDate[recordFocus.recordInFocus.recordIndex]} key={props.approvalDate[recordFocus.recordInFocus.recordIndex] + ':approvalDate'} onChange={handleChange} />
        <label htmlFor='startDate'>Start date:</label>
        <input type='text' id='startDate' name='startDate' defaultValue={props.startDate[recordFocus.recordInFocus.recordIndex]} key={props.startDate[recordFocus.recordInFocus.recordIndex] + ':startDate'} onChange={handleChange} />
        <label htmlFor='endDate'>End date:</label>
        <input type='text' id='endDate' name='endDate' defaultValue={props.endDate[recordFocus.recordInFocus.recordIndex]} key={props.endDate[recordFocus.recordInFocus.recordIndex] + ':endDate'} onChange={handleChange} />
        <label htmlFor='duration'>Duration (months):</label>
        <input type='text' id='duration' name='duration' defaultValue={props.duration[recordFocus.recordInFocus.recordIndex]} key={props.duration[recordFocus.recordInFocus.recordIndex] + ':duration'} onChange={handleChange} />
      </>
    )

  else if(tableFocus.tableInFocus === 'implementation')
    formFields = (
      <>
        <label htmlFor='sector'>Sector:</label>
        <input type='text' id='sector' name='sector' defaultValue={props.sector[recordFocus.recordInFocus.recordIndex]} key={props.sector[recordFocus.recordInFocus.recordIndex] + ':sector'} onChange={handleChange} />
        <label htmlFor='ministry'>Ministry:</label>
        <input type='text' id='ministry' name='ministry' defaultValue={props.ministry[recordFocus.recordInFocus.recordIndex]} key={props.ministry[recordFocus.recordInFocus.recordIndex] + ':ministry'} onChange={handleChange} />
        <label htmlFor='agency'>Implementing agency:</label>
        <input type='text' id='agency' name='agency' defaultValue={props.agency[recordFocus.recordInFocus.recordIndex]} key={props.agency[recordFocus.recordInFocus.recordIndex] + ':agency'} onChange={handleChange} />
        <label htmlFor='contractor'>Contractor:</label>
        <input type='text' id='contractor' name='contractor' defaultValue={props.contractor[recordFocus.recordInFocus.recordIndex]} key={props.contractor[recordFocus.recordInFocus.recordIndex] + ':contractor'} onChange={handleChange} />
        <label htmlFor='priority'>Priority:</label>
        <select id='priority' name='priority' defaultValue={props.priority[recordFocus.recordInFocus.recordIndex]} key={props.priority[recordFocus.recordInFocus.recordIndex] + ':priority'} onChange={handleChange} >
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
        <input type='text' id='estimatedCost' name='estimatedCost' defaultValue={props.estimatedCost[recordFocus.recordInFocus.recordIndex]} key={props.estimatedCost[recordFocus.recordInFocus.recordIndex] + ':estimatedCost'} onChange={handleChange} />
        <label htmlFor='budget'>Budget:</label>
        <input type='text' id='budget' name='budget' defaultValue={props.budget[recordFocus.recordInFocus.recordIndex]} key={props.budget[recordFocus.recordInFocus.recordIndex] + ':budget'} onChange={handleChange} />
        <label htmlFor='financialYear'>Financial year:</label>
        <input type='text' id='financialYear' name='financialYear' defaultValue={props.financialYear[recordFocus.recordInFocus.recordIndex]} key={props.financialYear[recordFocus.recordInFocus.recordIndex] + ':financialYear'} onChange={handleChange} />
        <label htmlFor='fundingSource'>Source of funding:</label>
        <input type='text' id='fundingSource' name='fundingSource' defaultValue={props.fundingSource[recordFocus.recordInFocus.recordIndex]} key={props.fundingSource[recordFocus.recordInFocus.recordIndex] + ':fundingSource'} onChange={handleChange} />
      </>
    )

  else if(tableFocus.tableInFocus === 'locations')
    formFields = (
      <>
        <label htmlFor='countyNo'>County:</label>
        <input type='text' id='countyNo' name='countyNo' defaultValue={props.locCountyNo[recordFocus.recordInFocus.recordIndex]} key={props.locCountyNo[recordFocus.recordInFocus.recordIndex] + ':countyNo'} onChange={handleChange} />
        <label htmlFor='subCounty'>Sub-county:</label>
        <input type='text' id='subCounty' name='subCounty' defaultValue={props.subCounty[recordFocus.recordInFocus.recordIndex]} key={props.subCounty[recordFocus.recordInFocus.recordIndex] + ':subCounty'} onChange={handleChange} />
        <label htmlFor='constituency'>Constituency:</label>
        <input type='text' id='constituency' name='constituency' defaultValue={props.constituency[recordFocus.recordInFocus.recordIndex]} key={props.constituency[recordFocus.recordInFocus.recordIndex] + ':constituency'} onChange={handleChange} />
        <label htmlFor='ward'>Ward:</label>
        <input type='text' id='ward' name='ward' defaultValue={props.ward[recordFocus.recordInFocus.recordIndex]} key={props.ward[recordFocus.recordInFocus.recordIndex] + ':ward'} onChange={handleChange} />
      </>
    )

  return (
    <div className='sidePanel' ref={updateProjectPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeSidePanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={(e) => handleSubmit(e, tableFocus.tableInFocus)}>
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