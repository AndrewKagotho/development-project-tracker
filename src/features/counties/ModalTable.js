import React from 'react'
import { CountyContext } from '../../views/public/Counties'

let projectList, resultSetLength

const ModalTable = ({props, searchState}) => {
  let firstPageIndex = 0, lastPageIndex = 0
  let recordCounter = 0

  const {countyFocus, projectFocus, projectDetailsPanelState} = React.useContext(CountyContext)
  const [page, setPage] = React.useState(1)

  const resultsRef = React.useRef()

  const showProjectDetails = (index) => {
    projectDetailsPanelState.setProjectDetailsPanelStatus(true)
    projectFocus.setProjectInFocus(index)
  }
  
  firstPageIndex += page*10-11
  lastPageIndex += page*10

  if(!searchState.searchContent.state) {
    // eslint-disable-next-line
    projectList = props.projectID.map((item, index) => {
      while(index > firstPageIndex && index < lastPageIndex) {
        recordCounter++
        return (
          <tr key={index}>
            <td className='td_view_project' onClick={() => showProjectDetails(index)}>
              <svg className='visibilitySVG' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </td>
            <td>{recordCounter}. {item}</td>
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
      }
    )
    .filter((item, index) => parseInt(props.locCountyNo[index]-1) === countyFocus.countyInFocus.number)
  }

  const handleChange = (e) => {
    searchState.setsearchState.searchContent({state: true, value: e.target.value})
    resultsRef.current.style.display = 'block'
    let selectedInput = e.target.name
    let inputValue = e.target.value
    let filterArray

    if(selectedInput === 'projectID') filterArray = props.projectID
    else if(selectedInput === 'projectName') filterArray = props.projectName
    else if(selectedInput === 'startDate') filterArray = props.startDate
    else if(selectedInput === 'duration') filterArray = props.duration
    else if(selectedInput === 'sector') filterArray = props.sector
    else if(selectedInput === 'estimatedCost') filterArray = props.estimatedCost
    else if(selectedInput === 'financialYear') filterArray = props.financialYear
    else if(selectedInput === 'status') filterArray = props.status

    
    projectList = props.projectID.map((item, index) => {
      while(index > firstPageIndex && index < lastPageIndex) {
        return (
          <tr key={index}>
            <td className='td_view_project' onClick={() => showProjectDetails(index)}>
              <svg className='visibilitySVG' xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </td>
            <td>{index+1}. {item}</td>
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
      }
    )
    .filter((item, index) => 
      parseInt(props.locCountyNo[index]-1) === countyFocus.countyInFocus.number
      && filterArray[index][inputValue.length-1] === inputValue[inputValue.length-1]
      && filterArray[index][inputValue.length-2] === inputValue[inputValue.length-2]
      && filterArray[index][inputValue.length-3] === inputValue[inputValue.length-3]
    )
    
    resultSetLength = projectList.reduce((acc) => acc + 1, 0)
  }

  const changeTablePage = (arg) => {
    if(arg === 'next') {
      if(page < Math.ceil(props.projectID.length/10))
        setPage(page+1)
    }
    else if(arg === 'prev') {
      if(page > 1)
        setPage(page-1)
    }
  }

  return (
    <>
      <div className='modal__card__table_extras flex'>
        <div>
          <button onClick={() => changeTablePage('prev')}>Prev page</button>
          <button onClick={() => changeTablePage('next')}>Next page</button>
        </div>
        <span>PAGE {page} of {Math.ceil(props.projectID.length/10)}   </span>
        <span ref={resultsRef}>|   SHOWING RESULTS: {resultSetLength}</span>
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
                <th>FIN year</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className='tr_search'>
                <td></td>
                <td><input type='search' name='projectID' value={searchState.searchContent.projectID} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='projectName' value={searchState.searchContent.projectName} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='startDate' value={searchState.searchContent.startDate} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='duration' value={searchState.searchContent.duration} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='sector' value={searchState.searchContent.sector} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='estimatedCost' value={searchState.searchContent.estimatedCost} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='financialYear' value={searchState.searchContent.financialYear} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
                <td><input type='search' name='status' value={searchState.searchContent.status} placeholder='Search:' onChange={handleChange} autoComplete='off' /></td>
              </tr>
              {projectList}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default ModalTable