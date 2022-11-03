import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openLoginPanel } from '../../utils/functions/panels'
import { closeLoginPanel } from '../../utils/functions/panels'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getProjectTimelines } from '../../utils/functions/getProjectTimelines'

let updateProjectScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateProject.php'
let updateTimelineScript = 'http://localhost/development-project-tracker/src/utils/php/update/updateTimeline.php'
let formFields, heading

const UpdateCountyPanel = ({props}) => {

  const {tableFocus, countyFocus, adminFocus, updateProjectPanelState, infoModal} = React.useContext(DashboardContext)
  const updateProjectPanelRef = React.useRef()

  openLoginPanel(updateProjectPanelRef, updateProjectPanelState.updateProjectPanel)

  const handleChange = (e, table) => {
    if(table === 'counties')
      countyFocus.setCountyInFocus({...countyFocus.countyInFocus, [e.target.name]: e.target.value})
    else if(table === 'admin')
      adminFocus.setAdminInFocus({...adminFocus.adminInFocus, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e, table) => {
    let sendMeta = {state: '', script: '', action: ''}
    
    if(table === 'counties') sendMeta = {state: countyFocus.countyInFocus, script: updateProjectScript, action: getProjectDetails}
    if(table === 'admin') sendMeta = {state: adminFocus.adminInFocus, script: updateTimelineScript, action: getProjectTimelines}

    axios.post(sendMeta.script, sendMeta.state)
    .then((response) => {
      if(response.data) {
        infoModal.setInfoModalProps({state: true, icon:'success', text:'Successfully updated!'})
        sendMeta.action(props)
      }
      else
        infoModal.setInfoModalProps({state: true, icon:'fail', text:'Error! Try again.'})
    })

    closeLoginPanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)
    e.preventDefault()
  }

  if(tableFocus.tableInFocus === 'counties') {
    heading = (<h3>Updating county no.<em>'{props.countyNo[countyFocus.countyInFocus.recordIndex]}'</em></h3>)
    formFields = (
      <>
        <label htmlFor='governor'>Governor:</label>
        <input type='text' id='governor' name='governor' defaultValue={props.governor[countyFocus.countyInFocus.recordIndex]} key={props.governor[countyFocus.countyInFocus.recordIndex] + ':governor'} onChange={(e) => handleChange(e, tableFocus.tableInFocus)} required />
        <label htmlFor='senator'>Senator:</label>
        <input type='text' id='senator' name='senator' defaultValue={props.senator[countyFocus.countyInFocus.recordIndex]} key={props.senator[countyFocus.countyInFocus.recordIndex] + ':senator'} onChange={(e) => handleChange(e, tableFocus.tableInFocus)} required />
      </>
    )
  }

  else if(tableFocus.tableInFocus === 'admin') {
    heading = (<h3>Updating admin <em>'{props.adminUsername[adminFocus.adminInFocus.recordIndex]}'</em></h3>)
    formFields = (
      <>
        <label htmlFor='adminFirstName'>First name:</label>
        <input type='text' id='adminFirstName' name='adminFirstName' defaultValue={props.adminFirstName[adminFocus.adminInFocus.recordIndex]} key={props.adminFirstName[adminFocus.adminInFocus.recordIndex] + ':adminFirstName'} onChange={(e) => handleChange(e, tableFocus.tableInFocus)} />
        <label htmlFor='adminLastName'>End date:</label>
        <input type='text' id='adminLastName' name='adminLastName' defaultValue={props.adminLastName[adminFocus.adminInFocus.recordIndex]} key={props.adminLastName[adminFocus.adminInFocus.recordIndex] + ':adminLastName'} onChange={(e) => handleChange(e, tableFocus.tableInFocus)} />
        <label htmlFor='adminEmail'>Email:</label>
        <input type='text' id='adminEmail' name='adminEmail' defaultValue={props.adminEmail[adminFocus.adminInFocus.recordIndex]} key={props.adminEmail[adminFocus.adminInFocus.recordIndex] + ':adminEmail'} onChange={(e) => handleChange(e, tableFocus.tableInFocus)} />
      </>
    )
  }

  return (
    <div className='sidePanel' ref={updateProjectPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={(e) => handleSubmit(e, tableFocus.tableInFocus)}>
          {heading}
          <div className='sidePanel__content__grid'>
            {formFields}
          </div>
          <button>Update details</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateCountyPanel