import React from 'react'
import { CountyContext } from '../../views/public/Counties'

let projectList

const ModalTable = ({props, searchState}) => {
  
  let resultSetLength = 0, resultSetLengthPerView = 0
  let filterArray

  const {countyFocus, projectFocus, projectDetailsPanelState} = React.useContext(CountyContext)
  const [searchContent, setSearchContent] = React.useState({selectedInput: '', inputValue: ''})
  const [page, setPage] = React.useState(1)
  const resultsRef = React.useRef()

  let firstPageIndex = 0
  firstPageIndex += page*10-10

  const showProjectDetails = (index) => {
    projectDetailsPanelState.setProjectDetailsPanelStatus(true)
    projectFocus.setProjectInFocus(index)
  }

  if(!searchState.searchContent.state)
    // eslint-disable-next-line
    projectList = props.projectID.map((item, index) => {
      while(index >= firstPageIndex && index < firstPageIndex+10) {
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
    .filter((item, index) => parseInt(props.locCountyNo[index]-1) === countyFocus.countyInFocus.number)

  if(searchState.searchContent.state) {
    if(searchContent.selectedInput === 'projectID') filterArray = props.projectID
    else if(searchContent.selectedInput === 'projectName') filterArray = props.projectName
    else if(searchContent.selectedInput === 'startDate') filterArray = props.startDate
    else if(searchContent.selectedInput === 'duration') filterArray = props.duration
    else if(searchContent.selectedInput === 'sector') filterArray = props.sector
    else if(searchContent.selectedInput === 'estimatedCost') filterArray = props.estimatedCost
    else if(searchContent.selectedInput === 'financialYear') filterArray = props.financialYear
    else if(searchContent.selectedInput === 'status') filterArray = props.status

    // eslint-disable-next-line
    projectList = props.projectID.map((item, index) => {
      while(index >= firstPageIndex && index < firstPageIndex+10) {
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
    // eslint-disable-next-line
    .filter((item, index) => {
      resultSetLengthPerView = 0
      let truthTests = parseInt(props.locCountyNo[index]-1) === countyFocus.countyInFocus.number
      && filterArray[index][searchContent.inputValue.length-1] === searchContent.inputValue[searchContent.inputValue.length-1]
      && filterArray[index][searchContent.inputValue.length-2] === searchContent.inputValue[searchContent.inputValue.length-2]
      && filterArray[index][searchContent.inputValue.length-3] === searchContent.inputValue[searchContent.inputValue.length-3]

      if(truthTests) resultSetLength++

      while(index >= firstPageIndex && index < firstPageIndex+10){
        resultSetLengthPerView++
      
      return ( truthTests )}
      
    })

    resultSetLengthPerView = projectList.reduce((acc) => acc + 1, 0)
  }

  const handleChange = (e) => {
    setSearchContent({selectedInput: e.target.name, inputValue: e.target.value})
    searchState.setSearchContent({state: true, value: e.target.value})
    resultsRef.current.style.display = 'block'
  }

  const changeTablePage = (action) => {
    if(action === 'next') {
      if(page < Math.ceil(props.projectID.length/10))
        setPage(page+1)
    }
    else if(action === 'prev') {
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