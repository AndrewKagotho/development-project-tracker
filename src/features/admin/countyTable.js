import { showMoreOptions } from './AdminTable'

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

export const countyTableSearch = (searchState, resultsRef) => {

  const handleChange = (e) => {
    searchState.setSearchContent({state: true, selectedInput: e.target.name, inputValue: e.target.value})
    resultsRef.current.style.display = 'block'
  }
  
  return (
    <tr className='tr_search'>
      <td><input type='search' name='countyNo' value={searchState.searchContent.projectID} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='countyName' value={searchState.searchContent.projectName} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='governor' value={searchState.searchContent.startDate} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
      <td><input type='search' name='senator' value={searchState.searchContent.duration} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
    </tr>
  )
}

export const countyTableRows = (countyTableValues) => {
  let filterArray
  let {props, searchState, trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex} = countyTableValues

  if(!searchState.searchContent.state) {
    return (
      // eslint-disable-next-line
      props.countyNo.map((item, index) => {
        while(index >= firstPageIndex && index < firstPageIndex+10) {
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
                    <button>Update</button>
                  </div>
                </div>
              </td>
            </tr>
          )
        }
      })
    )
  }

  if(searchState.searchContent.state) {
    if(searchState.searchContent.selectedInput === 'countyNo') filterArray = props.countyNo
    else if(searchState.searchContent.selectedInput === 'countyName') filterArray = props.countyName
    else if(searchState.searchContent.selectedInput === 'governor') filterArray = props.governor
    else if(searchState.searchContent.selectedInput === 'senator') filterArray = props.senator

    return (
      props.countyNo.map((item, index) => index)
      .filter((index) => {
        const truthTests
        = filterArray[index][searchState.searchContent.inputValue.length-1] === searchState.searchContent.inputValue[searchState.searchContent.inputValue.length-1]
        && filterArray[index][searchState.searchContent.inputValue.length-2] === searchState.searchContent.inputValue[searchState.searchContent.inputValue.length-2]
        && filterArray[index][searchState.searchContent.inputValue.length-3] === searchState.searchContent.inputValue[searchState.searchContent.inputValue.length-3]

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
                    <button>Update</button>
                  </div>
                </div>
              </td>
            </tr>
          )
        }
      })
    )
  }
}