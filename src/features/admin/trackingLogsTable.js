export const trackingLogsTableHead = () => {
  return (
    <tr>
      <th>Date</th>
      <th>Project ID</th>
      <th>Field</th>
      <th>Action</th>
      <th>Value from</th>
      <th>Value to</th>
    </tr>
  )
}

export const trackingLogsTableSearch = (searchState, resultsRef) => {

  const handleChange = (e) => {
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
    resultsRef.current.style.display = 'block'
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='logDate' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='logProjectID' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='logField' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='logAction' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='valueFrom' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='valueTo' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
    </tr>
  )
}

export const trackingLogsTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, searchState} = projectInfoStates
  let {trRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(!searchState.searchContent.state) {
    return (
      // eslint-disable-next-line
      props.logDate.map((item, index) => {
        while(index >= firstPageIndex && index < firstPageIndex+10) {
          return (
            <tr key={index} ref={(item) => trRef.current[index] = item}>
              <td>{index+1}. {item}</td>
              <td>{props.logProjectID[index]}</td>
              <td>{props.logField[index]}</td>
              <td>{props.logAction[index]}</td>
              <td>{props.valueFrom[index]}</td>
              <td>{props.valueTo[index]}</td>
            </tr>
          )
        }
      })
    )
  }

  if(searchState.searchContent.state) {
    if(searchState.searchContent.selectedInput === 'logDate') filterArray = props.logDate
    else if(searchState.searchContent.selectedInput === 'logProjectID') filterArray = props.logProjectID
    else if(searchState.searchContent.selectedInput === 'logField') filterArray = props.logField
    else if(searchState.searchContent.selectedInput === 'logAction') filterArray = props.logAction
    else if(searchState.searchContent.selectedInput === 'valueFrom') filterArray = props.valueFrom
    else if(searchState.searchContent.selectedInput === 'valueTo') filterArray = props.valueTo

    return (
      props.logDate.map((item, index) => index)
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
              <td>{number+1}. {props.logDate[index]}</td>
              <td>{props.logProjectID[index]}</td>
              <td>{props.logField[index]}</td>
              <td>{props.logAction[index]}</td>
              <td>{props.valueFrom[index]}</td>
              <td>{props.valueTo[index]}</td>
            </tr>
          )
        }
      })
    )
  }
}