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

export const projectsTableSearch = (searchState, resultsRef) => {

  const handleChange = (e) => {
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
    resultsRef.current.style.display = 'block'
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='projectID' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='projectName' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='description' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='status' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
    </tr>
  )
}

export const projectsTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, tableFocus, recordFocus, searchState, updateProjectPanelState, deleteProjectModalState, trackingValues} = projectInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  // searchState.setSearchContent({...searchState.searchContent, selectedInput: 'projectID'})

  if(!searchState.searchContent.state) {
    return (
      // eslint-disable-next-line
      props.projectID.map((item, index) => {
        while(index >= firstPageIndex && index < firstPageIndex+10) {
          return (
            <tr key={index} ref={(item) => trRef.current[index] = item}>
              <td>{index+1}. {item}</td>
              <td>{props.projectName[index]}</td>
              <td>{props.description[index]}</td>
              <td>{props.status[index]}</td>
              <td className='td_more_options'>
                <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
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

  if(searchState.searchContent.state) {
    if(searchState.searchContent.selectedInput === 'projectID') filterArray = props.projectID
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
}