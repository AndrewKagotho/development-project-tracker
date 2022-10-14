export const openModal = (context, ref) => {
  if(context === true) {
    // if(ref.current !== undefined) {
      ref.current.style.visibility = 'visible'
      ref.current.style.opacity = '1'
    // }
  }
}

export const closeModal = (context, ref) => {
  context(false)
  ref.current.style.visibility = 'hidden'
  ref.current.style.opacity = '0'
}

export const openInteractiveModal = (context, ref) => {
  if(context === true) {
    ref.current.style.visibility = 'visible'
    ref.current.style.opacity = '1'
  }
}

export const closeInteractiveModal = (context, ref) => {
  context({...context, state: false})
  ref.current.style.visibility = 'hidden'
  ref.current.style.opacity = '0'
}