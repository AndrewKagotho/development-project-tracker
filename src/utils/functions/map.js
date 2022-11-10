let prevOptions = [0,0]
let prevSVG = [0,0]
let prevDetailsSVG = [0,0]
let prevMenu = [0,0]

export const dynamicShowMoreOptions = (ref, selectedValue) => {
  prevOptions[0] = prevOptions[1]
  prevOptions[1] = selectedValue

  for(let i=0; i<prevOptions.length; i++ ) {
    if(i===0 && ref.current[prevOptions[i]] !== null) {
      ref.current[prevOptions[i]].style.visibility = 'hidden'
      ref.current[prevOptions[i]].style.opacity = '0'
    }
    else if(ref.current[prevOptions[i]] !== null) {
      ref.current[prevOptions[i]].style.visibility = 'visible'
      ref.current[prevOptions[i]].style.opacity = '1'
    }
  }
}

export const dynamicShowMoreOptionsSVG = (ref1, ref2, selectedValue) => {
  prevSVG[0] = prevSVG[1]
  prevSVG[1] = selectedValue

  for(let i=0; i<prevSVG.length; i++ ) {
    if(i===0 && ref1.current[prevSVG[i]] !== null && ref2.current[prevSVG[i]] !== null) {
      ref1.current[prevSVG[i]].style.fill = '#CCC'
      ref1.current[prevSVG[i]].style.opacity = '0'
      ref2.current[prevSVG[i]].style.backgroundColor = 'transparent'
    }
    else if(ref1.current[prevSVG[i]] !== null && ref2.current[prevSVG[i]] !== null) {
      ref1.current[prevSVG[i]].style.fill = '#669FC3'
      ref1.current[prevSVG[i]].style.opacity = '1'
      ref2.current[prevSVG[i]].style.backgroundColor = '#EEE'
    }
  }
}

export const dynamicShowDetailsSVG = (ref1, ref2, selectedValue) => {
  prevDetailsSVG[0] = prevDetailsSVG[1]
  prevDetailsSVG[1] = selectedValue

  for(let i=0; i<prevDetailsSVG.length; i++ ) {
    if(i===0 && ref1.current[prevDetailsSVG[i]] !== null && ref2.current[prevDetailsSVG[i]] !== null) {
      ref1.current[prevDetailsSVG[i]].style.fill = '#CCC'
      ref2.current[prevDetailsSVG[i]].style.backgroundColor = 'transparent'
    }
    else if(ref1.current[prevDetailsSVG[i]] !== null && ref2.current[prevDetailsSVG[i]] !== null) {
      ref1.current[prevDetailsSVG[i]].style.fill = '#669FC3'
      ref2.current[prevDetailsSVG[i]].style.backgroundColor = '#EEE'
    }
  }
}

export const dynamicShowDetails = (ref, selectedValue) => {
  prevOptions[0] = prevOptions[1]
  prevOptions[1] = selectedValue

  for(let i=0; i<prevOptions.length; i++ ) {
    if(i===0 && ref.current[prevOptions[i]] !== null) {
      ref.current[prevOptions[i]].style.visibility = 'hidden'
      ref.current[prevOptions[i]].style.opacity = '0'
    }
    else if(ref.current[prevOptions[i]] !== null) {
      ref.current[prevOptions[i]].style.visibility = 'visible'
      ref.current[prevOptions[i]].style.opacity = '1'
    }
  }
}

export const dynamicMenu = (ref, selectedValue) => {
  prevMenu[0] = prevMenu[1]
  prevMenu[1] = selectedValue

  for(let i=0; i<prevMenu.length; i++ ) {
    if(i===0 && ref.current[prevMenu[i]] !== null) {
      ref.current[prevMenu[i]].style.borderLeft = 'none'
    }
    else if(ref.current[prevMenu[i]] !== null) {
      ref.current[prevMenu[i]].style.borderLeft = '8px solid #669FC3'
    }
  }
}