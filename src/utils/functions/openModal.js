export const openModal = (context, ref) => {
  if(context.openModal === true) {
    // if(ref.current !== undefined) {
      ref.current.style.visibility = 'visible'
      ref.current.style.opacity = '1'
    // }
  }
}