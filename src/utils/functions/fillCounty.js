export const fillCounty = (ref, num) => {
  if(ref.current.length !== 0) {
    ref.current[num].style.fill = '#669FC3'
    ref.current[num].style.stroke = '#FFF'
  }
}