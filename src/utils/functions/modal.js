export const openModal = (context, ref) => {
  if(context.openCountyModal === true) {
    // if(ref.current !== undefined) {
      ref.current.style.visibility = 'visible'
      ref.current.style.opacity = '1'
    // }
  }
}

export const closeModal = (modalState, ref) => {
  modalState.setCountyModalState(false)
  ref.current.style.visibility = 'hidden'
  ref.current.style.opacity = '0'
}