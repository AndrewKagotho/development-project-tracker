export const openLoginPanel = (ref, contextValue) => {
  if(contextValue === true) {
    if(ref.current !== undefined) {
      ref.current.style.width = '25vw'
      ref.current.style.visibility = 'visible'
      ref.current.style.opacity = '1'
    }
  }
}

export const closeLoginPanel = (ref, contextValue) => {
  contextValue(false)
  ref.current.style.visibility = 'hidden'
  ref.current.style.opacity = '0';
  ref.current.style.width = '0'
}