import React from 'react'
import { CountyContext } from '../../views/public/Counties'

let projectList, filterArray
let prevInput = [0,0]

const ModalTable = ({props, searchState}) => {
  const {searchContent, setSearchContent} = searchState
  let firstPageIndex = 0, resultSetLength = 0, resultSetLengthPerView = 0, recordsInPage = 0
  let totalPages

  const {countyFocus, projectFocus, projectDetailsPanelState} = React.useContext(CountyContext)
  const [currentPage, setCurrentPage] = React.useState(1)
  const resultsRef = React.useRef()
  const inputRef = React.useRef([])

  firstPageIndex += currentPage*10-10

  const showProjectDetails = (index) => {
    projectDetailsPanelState.setProjectDetailsPanelStatus(true)
    projectFocus.setProjectInFocus(index)
  }

  const handleChange = (e, index) => {
    prevInput[0] = prevInput[1]
    prevInput[1] = index
    if(prevInput[0] !== prevInput[1]) inputRef.current[prevInput[0]].value = ''
    setSearchContent({selectedInput: e.target.name, inputValue: e.target.value})
  }

  if(searchContent.selectedInput === 'projectID' || searchState.searchContent.selectedInput === '') filterArray = props.projectID
  else if(searchContent.selectedInput === 'projectName') filterArray = props.projectName
  else if(searchContent.selectedInput === 'startDate') filterArray = props.startDate
  else if(searchContent.selectedInput === 'duration') filterArray = props.duration
  else if(searchContent.selectedInput === 'sector') filterArray = props.sector
  else if(searchContent.selectedInput === 'estimatedCost') filterArray = props.estimatedCost
  else if(searchContent.selectedInput === 'financialYear') filterArray = props.financialYear
  else if(searchContent.selectedInput === 'status') filterArray = props.status

  projectList = props.projectID.map((item, index) => index)
  // eslint-disable-next-line
  .filter((index) => {
    let truthTests = parseInt(props.locCountyNo[index]-1) === countyFocus.countyInFocus.number
    && filterArray[index].toLowerCase()[searchContent.inputValue.length-1] === searchContent.inputValue.toLowerCase()[searchContent.inputValue.length-1]
    && filterArray[index].toLowerCase()[searchContent.inputValue.length-2] === searchContent.inputValue.toLowerCase()[searchContent.inputValue.length-2]
    && filterArray[index].toLowerCase()[searchContent.inputValue.length-3] === searchContent.inputValue.toLowerCase()[searchContent.inputValue.length-3]

    if(truthTests) resultSetLength++

    return (truthTests)
  })
  // eslint-disable-next-line
  .map((index, num) => {
    while(num >= firstPageIndex && num < firstPageIndex+10) {
      if((num+1) > recordsInPage) recordsInPage = (num+1)
      return (
        <tr key={index}>
          <td className='td_view_project' onClick={() => showProjectDetails(index)}>
            <svg className='visibilitySVG' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
          </td>
          <td>{num+1}. {props.projectID[index]}</td>
          <td>{props.projectName[index]}</td>
          <td>{props.startDate[index]}</td>
          <td>{props.duration[index]} months</td>
          <td>{props.sector[index]}</td>
          <td>{props.estimatedCost[index]}</td>
          <td>{props.financialYear[index]}</td>
          <td>{props.status[index]}</td>
        </tr>
      )
    }
  })

  totalPages = Math.ceil(resultSetLength/10)
  if(totalPages < 1) totalPages = 1
  
  resultSetLengthPerView = recordsInPage%10

  const changeTablePage = (action) => {
    if(action === 'next') {
      if(currentPage < totalPages)
        setCurrentPage(currentPage+1)
    }
    else if(action === 'prev') {
      if(currentPage > 1)
        setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <div className='modal__card__table_extras flex'>
        <div>
          <button onClick={() => changeTablePage('prev')}>Prev page</button>
          <button onClick={() => changeTablePage('next')}>Next page</button>
        </div>
        <span>PAGE {currentPage} of {totalPages}   </span>
        <span ref={resultsRef}>|   SHOWING RESULTS: {resultSetLengthPerView} of {resultSetLength}</span>
      </div>
      <div className='table_container'>
        <table className='table_wd'>
          <thead>
            <tr>
              <th></th>
              <th>Project ID</th>
              <th>Project name</th>
              <th>Start date</th>
              <th>Duration</th>
              <th>Sector</th>
              <th>Est. cost</th>
              <th>Fin. year</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='tr_search'>
              <td></td>
              <td><input type='search' name='projectID' ref={(item) => inputRef.current[0] = item} placeholder='Search:' onChange={(e) => handleChange(e, 0)} autoComplete='off' /></td>
              <td><input type='search' name='projectName' ref={(item) => inputRef.current[1] = item} placeholder='Search:' onChange={(e) => handleChange(e, 1)} autoComplete='off' /></td>
              <td><input type='search' name='startDate' ref={(item) => inputRef.current[2] = item} placeholder='Search:' onChange={(e) => handleChange(e, 2)} autoComplete='off' /></td>
              <td><input type='search' name='duration' ref={(item) => inputRef.current[3] = item} placeholder='Search:' onChange={(e) => handleChange(e, 3)} autoComplete='off' /></td>
              <td><input type='search' name='sector' ref={(item) => inputRef.current[4] = item} placeholder='Search:' onChange={(e) => handleChange(e, 4)} autoComplete='off' /></td>
              <td><input type='search' name='estimatedCost' ref={(item) => inputRef.current[5] = item} placeholder='Search:' onChange={(e) => handleChange(e, 5)} autoComplete='off' /></td>
              <td><input type='search' name='financialYear' ref={(item) => inputRef.current[6] = item} placeholder='Search:' onChange={(e) => handleChange(e, 6)} autoComplete='off' /></td>
              <td><input type='search' name='status' ref={(item) => inputRef.current[7] = item} placeholder='Search:' onChange={(e) => handleChange(e, 7)} autoComplete='off' /></td>
            </tr>
            {projectList}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ModalTable