import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openModal } from '../../utils/functions/modal'
import { closeModal } from '../../utils/functions/modal'
import { getAdmins } from '../../utils/functions/getAdmins'

let deleteAdminScript = 'http://localhost/development-project-tracker/src/utils/php/delete/deleteAdmin.php'

const DeleteAdminModal = ({props}) => {

  const {adminFocus, deleteAdminModalState, infoModal} = React.useContext(DashboardContext)
  const modalRef = React.useRef()

  openModal(deleteAdminModalState.deleteAdminModal, modalRef)

  const handleSubmit = (e) => {
    closeModal(deleteAdminModalState.setDeleteAdminModalStatus, modalRef)

    axios.post(deleteAdminScript, adminFocus.adminInFocus)
    .then((response) => {
      if(response.data) {
        infoModal.setInfoModalProps({state: true, icon:'success', text:'Successfully deleted!'})
        getAdmins(props)
      }
      else
        infoModal.setInfoModalProps({state: true, icon:'fail', text:'Error! Try again.'})
    })

    e.preventDefault()
  }

  return (
    <div className='modal' ref={modalRef}>
      <div className='modal__card modal__card_sm card'>
        <h3>Delete admin = <em>'{props.adminUsername[adminFocus.adminInFocus.recordIndex]}'</em>?</h3>
        <div className='flex'>
          <button onClick={handleSubmit}>Confirm</button>
          <button onClick={() => closeModal(deleteAdminModalState.setDeleteAdminModalStatus, modalRef)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAdminModal