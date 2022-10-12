import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openLoginPanel } from '../../utils/functions/panels'
import { closeLoginPanel } from '../../utils/functions/panels'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'

let updateProjectScript = 'http://localhost/development-project-tracker/src/utils/php/updateProject.php'

const UpdateProjectPanel = ({props}) => {

  const {recordFocus, updateProjectPanelState} = React.useContext(DashboardContext)
  const updateProjectPanelRef = React.useRef()

  const handleChange = (e) => recordFocus.setRecordInFocus({...recordFocus.recordInFocus, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    axios.post(updateProjectScript, recordFocus.recordInFocus)
    .then((response) => {
      if(response.data)
        getProjectDetails(props)
    })
    
    closeLoginPanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)
    e.preventDefault()
  }

  openLoginPanel(updateProjectPanelRef, updateProjectPanelState.updateProjectPanel)

  return (
    <div className='sidePanel' ref={updateProjectPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(updateProjectPanelRef, updateProjectPanelState.setUpdateProjectPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={handleSubmit}>
          <h3>Project details</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='projectID'>Project ID:</label>
            <input type='text' id='projectID' name='projectID' defaultValue={props.projectID[recordFocus.recordInFocus.recordIndex]} readOnly />
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' defaultValue={props.projectName[recordFocus.recordInFocus.recordIndex]} onChange={handleChange} required />
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' name='description' defaultValue={props.description[recordFocus.recordInFocus.recordIndex]} onChange={handleChange} />
            <label htmlFor='status'>Status:</label>
            <select id='status' name='status' defaultValue={props.status[recordFocus.recordInFocus.recordIndex]} onChange={handleChange} >
              <option>Completed</option>
              <option>In progress</option>
              <option>Not started</option>
              <option>Approved</option>
              <option>Delayed</option>
            </select>
          </div>
          <button>Update details</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProjectPanel