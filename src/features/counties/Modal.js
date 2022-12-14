import React from 'react'
import { AppContext } from '../../App'
import { CountyContext } from '../../views/public/Counties'
import { openModal } from '../../utils/functions/modal'
import { closeModal } from '../../utils/functions/modal'
import ProjectDetailsPanel from '../../layout/public/ProjectDetailsPanel'
import ModalBanner from './ModalBanner'
import ModalTable from './ModalTable'

let modalCentered = false

const Modal = ({props}) => {

  React.useEffect(() => centerModal())
  
  const {statsValues} = React.useContext(AppContext)
  const {countyFocus, countyModalState} = React.useContext(CountyContext)
  const modalRef = React.useRef()
  const modalCardRef = React.useRef()

  openModal(countyModalState.openCountyModal, modalRef)

  const closeAction = () => {
    closeModal(countyModalState.setCountyModalState, modalRef)
  }

  const centerModal = () => {
    if(statsValues.stats.allProjects[countyFocus.countyInFocus.number] === 0) {
      modalCardRef.current.classList.add('modal__card_centered')
      modalCentered = true
    }

    if(statsValues.stats.allProjects[countyFocus.countyInFocus.number] !== 0 && modalCentered)
      modalCardRef.current.classList.remove('modal__card_centered')
  }

  return (
    <>
      <div className='modal' ref={modalRef}>
        <div className='modal__card card' ref={modalCardRef}>
          <div className='modal__card__header flex'>
            <span>Currently viewing...</span>
            <svg className='close_modal_svg' onClick={closeAction} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
          </div>
          <h2>{countyFocus.countyInFocus.name}<em className='card_number_effect_modal'>(0{countyFocus.countyInFocus.number+1})</em></h2>
          <ModalBanner props={props} />
          <ModalTable props={props} />
        </div>
      </div>
      <ProjectDetailsPanel props={props} />
    </>
  )
}

export default Modal