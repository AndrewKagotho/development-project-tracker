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
        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"/></svg>
        <h3>{infoModal.infoModalProps.text}</h3>
        <button onClick={() => closeInteractiveModal(infoModal.setInfoModalProps, modalRef)}>Close</button>
      </div>
    </div>
  )
}

export default InfoModal