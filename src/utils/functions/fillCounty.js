export const fillCounty = (ref, selectedCounty) => {
  if(ref.current.length !== 0) {
    ref.current[selectedCounty].style.fill = '#669FC3'
    ref.current[selectedCounty].style.stroke = '#FFF'
  }
}