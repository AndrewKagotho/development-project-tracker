let prevCards = [0,0]
let prevOptions = [0,0]
let prevSVG = [0,0]

export const fillCounty = (ref, num) => {
  if(ref.current.length !== 0) {
    ref.current[num].style.fill = '#669FC3'
    ref.current[num].style.stroke = '#FFF'
  }
}

export const dynamicFillCounty = (ref, selectedValue) => {
  for(let a=0; a<prevCards.length; a++) {
    prevCards[0] = prevCards[1]
  }
  prevCards[1] = selectedValue

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

export const dynamicShowMoreOptions = (ref, selectedValue) => {
  for(let a=0; a<prevOptions.length; a++) {
    prevOptions[0] = prevOptions[1]
  }
  prevOptions[1] = selectedValue

  for(let i=0; i<prevOptions.length; i++ ) {
    if(i===0) {
      ref.current[prevOptions[i]].style.visibility = 'hidden'
      ref.current[prevOptions[i]].style.opacity = '0'
    }
    else {
      ref.current[prevOptions[i]].style.visibility = 'visible'
      ref.current[prevOptions[i]].style.opacity = '1'
    }
  }
}

export const dynamicShowMoreOptionsSVG = (ref1, ref2, selectedValue) => {
  for(let a=0; a<prevSVG.length; a++) {
    prevSVG[0] = prevSVG[1]
  }
  prevSVG[1] = selectedValue

  for(let i=0; i<prevSVG.length; i++ ) {
    if(i===0) {
      ref1.current[prevSVG[i]].style.fill = '#CCC'
      ref1.current[prevSVG[i]].style.opacity = '0'
      ref2.current[prevSVG[i]].style.backgroundColor = 'transparent'
    }
    else {
      ref1.current[prevSVG[i]].style.fill = '#669FC3'
      ref1.current[prevSVG[i]].style.opacity = '1'
      ref2.current[prevSVG[i]].style.backgroundColor = '#EEE'
    }
  }
}