import { showMoreOptions } from './AdminTable'
import { showSidePanel } from './AdminTable'
import { showDeleteModal } from './AdminTable'

export const projectsTableHead = () => {
  return (
    <tr>
      <th>Project ID</th>
      <th>Name</th>
      <th>Description</th>
      <th colSpan='2'>Status</th>
    </tr>
  )
}

let prevInput = [0,0]

export const projectsTableSearch = (searchState, inputRef) => {

  const handleChange = (e, index) => {
    prevInput[0] = prevInput[1]
    prevInput[1] = index
    if(prevInput[0] !== prevInput[1]) inputRef.current[prevInput[0]].value = ''
    searchState.setSearchContent({selectedInput: e.target.name, inputValue: e.target.value})
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='projectID' ref={(item) => inputRef.current[0] = item} placeholder='Search:' onChange={(e) => handleChange(e, 0)} autoComplete='off' /></td>
      <td><input type='search' name='projectName' ref={(item) => inputRef.current[1] = item} placeholder='Search:' onChange={(e) => handleChange(e, 1)} autoComplete='off' /></td>
      <td><input type='search' name='description' ref={(item) => inputRef.current[2] = item} placeholder='Search:' onChange={(e) => handleChange(e, 2)} autoComplete='off' /></td>
      <td><input type='search' name='status' ref={(item) => inputRef.current[3] = item} placeholder='Search:' onChange={(e) => handleChange(e, 3)} autoComplete='off' /></td>
    </tr>
  )
}

export const projectsTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, tableFocus, recordFocus, searchState, updateProjectPanelState, deleteProjectModalState, trackingValues} = projectInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(searchState.searchContent.selectedInput === 'projectID' || searchState.searchContent.selectedInput === '') filterArray = props.projectID
  else if(searchState.searchContent.selectedInput === 'projectName') filterArray = props.projectName
  else if(searchState.searchContent.selectedInput === 'description') filterArray = props.description
  else if(searchState.searchContent.selectedInput === 'status') filterArray = props.status

  return (
    props.projectID.map((item, index) => index)
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
            <td>{number+1}. {props.projectID[index]}</td>
            <td>{props.projectName[index]}</td>
            <td>{props.description[index]}</td>
            <td>{props.status[index]}</td>
            <td className='td_more_options'>
              <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, number)} ref={(item) => moreOptionsSVGRef.current[number] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[number] = item}>
                <button onClick={() => showSidePanel(props, tableFocus, index, updateProjectPanelState, recordFocus, trackingValues)}>Update</button>
                <button onClick={() => showDeleteModal(props, index, deleteProjectModalState, recordFocus, trackingValues)}>Delete</button>
              </div>
            </td>
          </tr>
        )
      }
    })
  )
}