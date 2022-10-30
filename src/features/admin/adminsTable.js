import { showMoreOptions } from './AdminTable'
import { showSidePanel } from './AdminTable'

export const adminsTableHead = () => {
  return (
    <tr>
      <th>Username</th>
      <th>First name</th>
      <th>Last name</th>
      <th colSpan='2'>Email</th>
    </tr>
  )
}

export const adminsTableSearch = (searchState, resultsRef) => {

  const handleChange = (e) => {
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
    resultsRef.current.style.display = 'block'
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='adminUsername' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='adminFirstName' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='adminLastName' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='adminEmail' placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
    </tr>
  )
}

export const adminsTableRows = (projectInfoStates, projectInfoVars) => {
  let {props, tableFocus, recordFocus, searchState, updateProjectPanelState, trackingValues} = projectInfoStates
  let {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = projectInfoVars
  let filterArray

  if(!searchState.searchContent.state) {
    return (
      // eslint-disable-next-line
      props.adminUsername.map((item, index) => {
        while(index >= firstPageIndex && index < firstPageIndex+10) {
          return (
            <tr key={index} ref={(item) => trRef.current[index] = item}>
              <td>{index+1}. {item}</td>
              <td>{props.adminFirstName[index]}</td>
              <td>{props.adminLastName[index]}</td>
              <td>{props.adminEmail[index]}</td>
              <td className='td_more_options'>
                <svg className='more_options_svg' onClick={() => showMoreOptions(trRef, moreOptionsSVGRef, moreOptionsRef, index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
                  <button onClick={() => showSidePanel(props, tableFocus, index, updateProjectPanelState, recordFocus, trackingValues)}>Update</button>
                </div>
              </td>
            </tr>
          )
        }
      })
    )
  }

  if(searchState.searchContent.state) {
    if(searchState.searchContent.selectedInput === 'adminUsername') filterArray = props.adminUsername
    else if(searchState.searchContent.selectedInput === 'adminFirstName') filterArray = props.adminFirstName
    else if(searchState.searchContent.selectedInput === 'adminLastName') filterArray = props.adminLastName
    else if(searchState.searchContent.selectedInput === 'adminEmail') filterArray = props.adminEmail

    return (
      props.adminUsername.map((item, index) => index)
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
              <td>{number+1}. {props.adminUsername[index]}</td>
              <td>{props.adminFirstName[index]}</td>
              <td>{props.adminLastName[index]}</td>
              <td>{props.adminEmail[index]}</td>
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
}