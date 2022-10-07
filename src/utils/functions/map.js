let prevCards = [0,0]

export const fillCounty = (ref, num) => {
  if(ref.current.length !== 0) {
    ref.current[num].style.fill = '#669FC3'
    ref.current[num].style.stroke = '#FFF'
  }
}

export const dynamicFillCounty = (ref, selectedCounty) => {
  for(let a=0; a<prevCards.length; a++) {
    prevCards[0] = prevCards[1]
  }
  prevCards[1] = selectedCounty

  if(ref.current.length !== 0)
    for(let i=0; i<prevCards.length; i++ ) {
      if(i===0) {
        ref.current[prevCards[i]].style.fill = '#FFF'
        ref.current[prevCards[i]].style.stroke = '#AAA'
      }
      else {
        ref.current[prevCards[i]].style.fill = '#669FC3'
        ref.current[prevCards[i]].style.stroke = '#FFF'
      }
    }
}