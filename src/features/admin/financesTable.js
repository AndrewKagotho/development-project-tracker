import { showMoreOptions } from './AdminTable'
import { showSidePanel } from './AdminTable'

export const financesTableHead = () => {
  return (
    <tr>
      <th>Project ID</th>
      <th>Estimated cost</th>
      <th>Budget</th>
      <th>Financial year</th>
      <th colSpan='2'>Funding source</th>
    </tr>
  )
}

let prevInput = [0,0]

export const financesTableSearch = (searchState, inputRef) => {

  const handleChange = (e, index) => {
    prevInput[0] = prevInput[1]
    prevInput[1] = index
    if(prevInput[0] !== prevInput[1]) inputRef.current[prevInput[0]].value = ''
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='finProjectID' ref={(item) => inputRef.current[0] = item} placeholder='Search:' onChange={(e) => handleChange(e, 0)} autoComplete='off' /></td>
      <td><input type='search' name='estimatedCost' ref={(item) => inputRef.current[1] = item} placeholder='Search:' onChange={(e) => handleChange(e, 1)} autoComplete='off' /></td>
      <td><input type='search' name='budget' ref={(item) => inputRef.current[2] = item} placeholder='Search:' onChange={(e) => handleChange(e, 2)} autoComplete='off' /></td>
      <td><input type='search' name='financialYear' ref={(item) => inputRef.current[3] = item} placeholder='Search:' onChange={(e) => handleChange(e, 3)} autoComplete='off' /></td>
      <td><input type='search' name='fundingSource' ref={(item) => inputRef.current[4] = item} placeholder='Search:' onChange={(e) => handleChange(e, 4)} autoComplete='off' /></td>
    </tr>
  )
}

export const financesTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, tableFocus, recordFocus, searchState, updateProjectPanelState, trackingValues} = projectInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(searchState.searchContent.selectedInput === 'finProjectID' || searchState.searchContent.selectedInput === '') filterArray = props.finProjectID
  else if(searchState.searchContent.selectedInput === 'estimatedCost') filterArray = props.estimatedCost
  else if(searchState.searchContent.selectedInput === 'budget') filterArray = props.budget
  else if(searchState.searchContent.selectedInput === 'financialYear') filterArray = props.financialYear
  else if(searchState.searchContent.selectedInput === 'fundingSource') filterArray = props.fundingSource

  return (
    props.finProjectID.map((item, index) => index)
    .filter((index) => {
      const truthTests
      = filterArray[index].toLowerCase()[searchState.searchContent.inputValue.length-1] === searchState.searchContent.inputValue.toLowerCase()[searchState.searchContent.inputValue.length-1]
      && filterArray[index].toLowerCase()[searchState.searchContent.inputValue.length-2] === searchState.searchContent.inputValue.toLowerCase()[searchState.searchContent.inputValue.length-2]
      && filterArray[index].toLowerCase()[searchState.searchContent.inputValue.length-3] === searchState.searchContent.inputValue.toLowerCase()[searchState.searchContent.inputValue.length-3]

      return (truthTests)
    })
    // eslint-disable-next-line
    .map((index, number) => {
      while(number >= firstPageIndex && number < firstPageIndex+10) {
        return (
          <tr key={number + searchState.searchContent.inputValue} ref={(item) => trRef.current[number] = item}>
            <td>{number+1}. {props.finProjectID[index]}</td>
            <td>{props.estimatedCost[index]}</td>
            <td>{props.budget[index]}</td>
            <td>{props.financialYear[index]}</td>
            <td>{props.fundingSource[index]}</td>
            <td className='td_more_options'>
              <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, number)} ref={(item) => moreOptionsSVGRef.current[number] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[number] = item}>
                <button onClick={() => showSidePanel(props, tableFocus, index, updateProjectPanelState, recordFocus, trackingValues)}>Update</button>
              </div>
            </td>
          </tr>
        )
      }
    })
  )
}