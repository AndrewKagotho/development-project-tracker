import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openModal } from '../../utils/functions/modal'
import { closeModal } from '../../utils/functions/modal'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getTimelineDetails } from '../../utils/functions/getTimelineDetails'
import { getImplementationDetails } from '../../utils/functions/getImplementationDetails'
import { getFinanceDetails } from '../../utils/functions/getFinanceDetails'
import { getLocationDetails } from '../../utils/functions/getLocationDetails'

let deleteProjectScript = 'http://localhost/development-project-tracker/src/utils/php/delete/deleteProject.php'
let deleteTimelineScript = 'http://localhost/development-project-tracker/src/utils/php/delete/deleteTimeline.php'
let deleteImplementationScript = 'http://localhost/development-project-tracker/src/utils/php/delete/deleteImplementation.php'
let deleteFinanceScript = 'http://localhost/development-project-tracker/src/utils/php/delete/deleteFinance.php'
let deleteLocationScript = 'http://localhost/development-project-tracker/src/utils/php/delete/deleteLocation.php'

const DeleteProjectModal = ({props}) => {

  const {tableFocus, recordFocus, deleteProjectModalState, infoModal} = React.useContext(DashboardContext)
  const modalRef = React.useRef()

  openModal(deleteProjectModalState.deleteProjectModal, modalRef)

  const handleSubmit = (e) => {
    closeModal(deleteProjectModalState.setDeleteProjectModalStatus, modalRef)
    let sendMeta = {script: '', action: ''}
    
    if(tableFocus.tableInFocus === 'projects') { sendMeta = { script: deleteProjectScript, action: getProjectDetails }}
    if(tableFocus.tableInFocus === 'timelines') { sendMeta = { script: deleteTimelineScript, action: getTimelineDetails }}
    if(tableFocus.tableInFocus === 'implementation') { sendMeta = { script: deleteImplementationScript, action: getImplementationDetails }}
    if(tableFocus.tableInFocus === 'finances') { sendMeta = { script: deleteFinanceScript, action: getFinanceDetails }}
    if(tableFocus.tableInFocus === 'locations') { sendMeta = { script: deleteLocationScript, action: getLocationDetails }}

    axios.post(sendMeta.script, recordFocus.recordInFocus)
    .then((response) => {
      if(response.data) {
        infoModal.setInfoModalProps({state: true, text:'Successfully deleted!'})
        sendMeta.action(props)
      }
      else
        infoModal.setInfoModalProps({state: true, text:'Error!'})
    })

    e.preventDefault()
  }

  return (
    <div className='modal' ref={modalRef}>
      <div className='modal__card modal__card_sm card'>
        <h3>Delete projectID = '{props.projectID[recordFocus.recordInFocus.recordIndex]}'?</h3>
        <div className='flex'>
          <button onClick={handleSubmit}>Confirm</button>
          <button onClick={() => closeModal(deleteProjectModalState.setDeleteProjectModalStatus, modalRef)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProjectModal