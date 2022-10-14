import React from 'react'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openInteractiveModal } from '../../utils/functions/modal'
import { closeInteractiveModal } from '../../utils/functions/modal'

const InfoModal = () => {

  const {infoModal} = React.useContext(DashboardContext)
  const modalRef = React.useRef()

  openInteractiveModal(infoModal.infoModalProps.state, modalRef)

  return (
    <div className='modal' ref={modalRef}>
      <div className='modal__card modal__card_sm card'>
        <h3>{infoModal.infoModalProps.text}</h3>
        <button onClick={() => closeInteractiveModal(infoModal.setInfoModalProps, modalRef)}>Close</button>
      </div>
    </div>
  )
}

export default InfoModal