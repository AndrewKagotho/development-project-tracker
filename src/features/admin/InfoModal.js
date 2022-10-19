import React from 'react'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openInteractiveModal } from '../../utils/functions/modal'
import { closeInteractiveModal } from '../../utils/functions/modal'

let infoSVG

const InfoModal = () => {

  const {infoModal} = React.useContext(DashboardContext)
  const modalRef = React.useRef()

  if(infoModal.infoModalProps.icon === 'success')
    infoSVG = (
      <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"/></svg>
    )
  else if(infoModal.infoModalProps.icon === 'fail')
    infoSVG = (
      <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-3h-2v-2h2v2z"/></svg>
    )

  openInteractiveModal(infoModal.infoModalProps.state, modalRef)

  return (
    <div className='modal' ref={modalRef}>
      <div className='modal__card modal__card_sm card'>
        {infoSVG}
        <h3>{infoModal.infoModalProps.text}</h3>
        <button onClick={() => closeInteractiveModal(infoModal.setInfoModalProps, modalRef)}>Close</button>
      </div>
    </div>
  )
}

export default InfoModal