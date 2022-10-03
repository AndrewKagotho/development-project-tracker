export const closeModal = (modalState, ref) => {
  modalState.setModalToOpen(false)
  ref.current.style.visibility = 'hidden'
  ref.current.style.opacity = '0'
}