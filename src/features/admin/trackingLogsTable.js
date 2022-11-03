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

let prevInput = [0,0]

export const trackingLogsTableSearch = (searchState, inputRef) => {

  const handleChange = (e, index) => {
    prevInput[0] = prevInput[1]
    prevInput[1] = index
    if(prevInput[0] !== prevInput[1]) inputRef.current[prevInput[0]].value = ''
    searchState.setSearchContent({selectedInput: e.target.name, inputValue: e.target.value})
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='logDate' ref={(item) => inputRef.current[0] = item} placeholder='Search:' onChange={(e) => handleChange(e, 0)} autoComplete='off' /></td>
      <td><input type='search' name='logProjectID' ref={(item) => inputRef.current[1] = item} placeholder='Search:' onChange={(e) => handleChange(e, 1)} autoComplete='off' /></td>
      <td><input type='search' name='logField' ref={(item) => inputRef.current[2] = item} placeholder='Search:' onChange={(e) => handleChange(e, 2)} autoComplete='off' /></td>
      <td><input type='search' name='logAction' ref={(item) => inputRef.current[3] = item} placeholder='Search:' onChange={(e) => handleChange(e, 3)} autoComplete='off' /></td>
      <td><input type='search' name='valueFrom' ref={(item) => inputRef.current[4] = item} placeholder='Search:' onChange={(e) => handleChange(e, 4)} autoComplete='off' /></td>
      <td><input type='search' name='valueTo' ref={(item) => inputRef.current[5] = item} placeholder='Search:' onChange={(e) => handleChange(e, 5)} autoComplete='off' /></td>
    </tr>
  )
}

export const trackingLogsTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, searchState} = projectInfoStates
  let {trRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(searchState.searchContent.selectedInput === 'logDate' || searchState.searchContent.selectedInput === '') filterArray = props.logDate
  else if(searchState.searchContent.selectedInput === 'logProjectID') filterArray = props.logProjectID
  else if(searchState.searchContent.selectedInput === 'logField') filterArray = props.logField
  else if(searchState.searchContent.selectedInput === 'logAction') filterArray = props.logAction
  else if(searchState.searchContent.selectedInput === 'valueFrom') filterArray = props.valueFrom
  else if(searchState.searchContent.selectedInput === 'valueTo') filterArray = props.valueTo

  return (
    props.logDate.map((item, index) => index)
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