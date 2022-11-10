import { showMoreOptions } from './AdminTable'
import { showOtherSidePanel } from './AdminTable'

export const countyTableHead = () => {
  return (
    <tr>
      <th>County No</th>
      <th>Name</th>
      <th>Governor</th>
      <th colSpan='2'>Senator</th>
    </tr>
  )
}

let prevInput = [0,0]

export const countyTableSearch = (searchState, inputRef) => {

  const handleChange = (e, index) => {
    prevInput[0] = prevInput[1]
    prevInput[1] = index
    if(prevInput[0] !== prevInput[1]) inputRef.current[prevInput[0]].value = ''
    searchState.setSearchContent({selectedInput: e.target.name, inputValue: e.target.value})
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='countyNo' ref={(item) => inputRef.current[0] = item} placeholder='Search:' onChange={(e) => handleChange(e, 0)} autoComplete='off' /></td>
      <td><input type='search' name='countyName' ref={(item) => inputRef.current[1] = item} placeholder='Search:' onChange={(e) => handleChange(e, 1)} autoComplete='off' /></td>
      <td><input type='search' name='governor' ref={(item) => inputRef.current[2] = item} placeholder='Search:' onChange={(e) => handleChange(e, 2)} autoComplete='off' /></td>
      <td><input type='search' name='senator' ref={(item) => inputRef.current[3] = item} placeholder='Search:' onChange={(e) => handleChange(e, 3)} autoComplete='off' /></td>
    </tr>
  )
}

export const countyTableRows = (otherInfoStates, projectInfoVars) => {
  let {props, tableFocus, countyFocus, adminFocus, searchState, updateOtherPanelState} = otherInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(searchState.searchContent.selectedInput === 'countyNo' || searchState.searchContent.selectedInput === '') filterArray = props.countyNo
  else if(searchState.searchContent.selectedInput === 'countyName') filterArray = props.countyName
  else if(searchState.searchContent.selectedInput === 'governor') filterArray = props.governor
  else if(searchState.searchContent.selectedInput === 'senator') filterArray = props.senator

  return (
    props.countyNo.map((item, index) => index)
    .filter((index) => {
      const truthTests
      = filterArray[index].toLowerCase()[searchState.searchContent.inputValue.length-1] === searchState.searchContent.inputValue.toLowerCase()[searchState.searchContent.inputValue.length-1]
      && filterArray[index].toLowerCase()[searchState.searchContent.inputValue.length-2] === searchState.searchContent.inputValue.toLowerCase()[searchState.searchContent.inputValue.length-2]
      && filterArray[index].toLowerCase()[searchState.searchContent.inputValue.length-3] === searchState.searchContent.inputValue.toLowerCase()[searchState.searchContent.inputValue.length-3]

      return (truthTests)
    })
    // eslint-disable-next-line
    .map((index, num) => {
      while(num >= firstPageIndex && num < firstPageIndex+10) {
        return (
          <tr key={index} ref={(item) => trRef.current[index] = item}>
            <td>{props.countyNo[index]}</td>
            <td>{props.countyName[index]}</td>
            <td>{props.governor[index]}</td>
            <td>{props.senator[index]}</td>
            <td className='td_more_options'>
              <div>
                <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                <div className='td_more_options_expand' ref={(item) => moreOptionsRef.current[index] = item}>
                  <button onClick={() => showOtherSidePanel(props, tableFocus, index, updateOtherPanelState, countyFocus, adminFocus)}>Update</button>
                </div>
              </div>
            </td>
          </tr>
        )
      }
    })
  )
}