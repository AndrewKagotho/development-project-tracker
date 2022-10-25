import { showMoreOptions } from './AdminTable'
import { showSidePanel } from './AdminTable'

export const timelinesTableHead = () => {
  return (
    <tr>
      <th>Project ID</th>
      <th>Approval date</th>
      <th>Start date</th>
      <th>End date</th>
      <th colSpan='2'>Duration</th>
    </tr>
  )
}

export const timelinesTableSearch = (searchState, resultsRef) => {

  const handleChange = (e) => {
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
    resultsRef.current.style.display = 'block'
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='timeProjectID' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='approvalDate' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='startDate' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='endDate' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='duration' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
    </tr>
  )
}

export const timelinesTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, tableFocus, recordFocus, searchState, updateProjectPanelState} = projectInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(!searchState.searchContent.state) {
    return (
      // eslint-disable-next-line
      props.timeProjectID.map((item, index) => {
        while(index >= firstPageIndex && index < firstPageIndex+10) {
          return (
            <tr key={index} ref={(item) => trRef.current[index] = item}>
              <td>{index+1}. {item}</td>
              <td>{props.approvalDate[index]}</td>
              <td>{props.startDate[index]}</td>
              <td>{props.endDate[index]}</td>
              <td>{props.duration[index]} months</td>
              <td className='td_more_options'>
                <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
                  <button onClick={() => showSidePanel(props, tableFocus.tableInFocus, index, updateProjectPanelState, recordFocus)}>Update</button>
                </div>
              </td>
            </tr>
          )
        }
      })
    )
  }

  if(searchState.searchContent.state) {
    if(searchState.searchContent.selectedInput === 'timeProjectID') filterArray = props.timeProjectID
    else if(searchState.searchContent.selectedInput === 'approvalDate') filterArray = props.approvalDate
    else if(searchState.searchContent.selectedInput === 'startDate') filterArray = props.startDate
    else if(searchState.searchContent.selectedInput === 'endDate') filterArray = props.endDate
    else if(searchState.searchContent.selectedInput === 'duration') filterArray = props.duration

    return (
      props.timeProjectID.map((item, index) => index)
      .filter((index) => {
        const truthTests
        = filterArray[index][searchState.searchContent.inputValue.length-1] === searchState.searchContent.inputValue[searchState.searchContent.inputValue.length-1]
        && filterArray[index][searchState.searchContent.inputValue.length-2] === searchState.searchContent.inputValue[searchState.searchContent.inputValue.length-2]
        && filterArray[index][searchState.searchContent.inputValue.length-3] === searchState.searchContent.inputValue[searchState.searchContent.inputValue.length-3]

        return (truthTests)
      })
      // eslint-disable-next-line
      .map((index, number) => {
        while(number >= firstPageIndex && number < firstPageIndex+10) {
          return (
            <tr key={number + searchState.searchContent.inputValue} ref={(item) => trRef.current[number] = item}>
              <td>{number+1}. {props.timeProjectID[index]}</td>
              <td>{props.approvalDate[index]}</td>
              <td>{props.startDate[index]}</td>
              <td>{props.endDate[index]}</td>
              <td>{props.duration[index]} months</td>
              <td className='td_more_options'>
                <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, number)} ref={(item) => moreOptionsSVGRef.current[number] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[number] = item}>
                  <button onClick={() => showSidePanel(props, tableFocus.tableInFocus, index, updateProjectPanelState, recordFocus)}>Update</button>
                </div>
              </td>
            </tr>
          )
        }
      })
    )
  }
}