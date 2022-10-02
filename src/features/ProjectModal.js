import React from 'react'
import { AppContext } from '../views/CountiesView'

const ProjectModal = () => {
  const {countyFocus, modalState} = React.useContext(AppContext)

  const modalRef = React.useRef()

  openModal(modalState, modalRef)

  const closeModal = () => {
    modalRef.current.style.display = 'none'
    modalState.setModalToOpen(false)
  }

  return (
    <>
    <div className='modal' ref={modalRef}>
      <div className='modal__card card'>
        <div className='modal__card__header flex'>
          <span>Currently showing:</span>
          <code>Close</code>
        </div>
        <div className='modal__card__top flex'>
          <section>
            <h2>{countyFocus.countyInFocus.name} <em className='card_lg_number_effect'>(0{countyFocus.countyInFocus.number+1})</em></h2>
            <span>Governor:</span>
            <span>Senator:</span>
          </section>
          <div>
            <div className='pie_chart'>Pie chart</div>
          </div>
        </div>
        <div className='modal__card__bottom'>
          Records table
        </div>
      </div>
    <button className='card_button' onClick={closeModal}>View projects</button>
    </div>
    </>
  )
}

export default ProjectModal

const openModal = (context, ref) => {
  if(context.openModal === true)
    ref.current.style.display = 'block'
}