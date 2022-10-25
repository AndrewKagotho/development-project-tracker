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

export const financesTableSearch = (searchState, resultsRef) => {

  const handleChange = (e) => {
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
    resultsRef.current.style.display = 'block'
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='finProjectID' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='estimatedCost' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='budget' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='financialYear' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='fundingSource' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
    </tr>
  )
}

export const financesTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, tableFocus, recordFocus, searchState, updateProjectPanelState} = projectInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(!searchState.searchContent.state) {
    return (
      // eslint-disable-next-line
      props.finProjectID.map((item, index) => {
        while(index >= firstPageIndex && index < firstPageIndex+10) {
          return (
            <tr key={index} ref={(item) => trRef.current[index] = item}>
              <td>{index+1}. {item}</td>
              <td>{props.estimatedCost[index]}</td>
              <td>{props.budget[index]}</td>
              <td>{props.financialYear[index]}</td>
              <td>{props.fundingSource[index]}</td>
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
    if(searchState.searchContent.selectedInput === 'finProjectID') filterArray = props.finProjectID
    else if(searchState.searchContent.selectedInput === 'estimatedCost') filterArray = props.estimatedCost
    else if(searchState.searchContent.selectedInput === 'budget') filterArray = props.budget
    else if(searchState.searchContent.selectedInput === 'financialYear') filterArray = props.financialYear
    else if(searchState.searchContent.selectedInput === 'fundingSource') filterArray = props.fundingSource

    return (
      props.finProjectID.map((item, index) => index)
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
              <td>{number+1}. {props.finProjectID[index]}</td>
              <td>{props.estimatedCost[index]}</td>
              <td>{props.budget[index]}</td>
              <td>{props.financialYear[index]}</td>
              <td>{props.fundingSource[index]}</td>
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