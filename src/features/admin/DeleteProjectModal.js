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

const DeleteProjectModal = ({props}) => {

  const {recordFocus, deleteProjectModalState, infoModal} = React.useContext(DashboardContext)
  const modalRef = React.useRef()

  openModal(deleteProjectModalState.deleteProjectModal, modalRef)

  const handleSubmit = (e) => {
    closeModal(deleteProjectModalState.setDeleteProjectModalStatus, modalRef)

    axios.post(deleteProjectScript, recordFocus.recordInFocus)
    .then((response) => {
      if(response.data) {
        infoModal.setInfoModalProps({state: true, icon:'success', text:'Successfully deleted!'})
        getProjectDetails(props)
        getTimelineDetails(props)
        getImplementationDetails(props)
        getFinanceDetails(props)
        getLocationDetails(props)
      }
      else
        infoModal.setInfoModalProps({state: true, icon:'fail', text:'Error! Try again.'})
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