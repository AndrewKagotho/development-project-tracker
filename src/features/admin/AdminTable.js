import React from 'react'
import { DashboardContext } from '../../views/admin/Dashboard'
import { dynamicShowMoreOptions } from '../../utils/functions/map'
import { dynamicShowMoreOptionsSVG } from '../../utils/functions/map'
import { countyTableHead } from './countyTable'
import { countyTableSearch } from './countyTable'
import { countyTableRows } from './countyTable'

export const showMoreOptions = (ref1, ref2, ref3, index) => {
  dynamicShowMoreOptions(ref3, index)
  dynamicShowMoreOptionsSVG(ref2, ref1, index)
}

// ref1 = trRef
// ref2 = moreOptionsSVGRef
// ref3 = moreOptionsRef

const AdminTable = ({props}) => {
  
  const {tableFocus, recordFocus, updateProjectPanelState, deleteProjectModalState} = React.useContext(DashboardContext)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [searchContent, setSearchContent] = React.useState({state: false, selectedInput: '', inputValue: ''})
  const searchState = {searchContent, setSearchContent}
  const resultsRef = React.useRef()
  const trRef = React.useRef([])
  const moreOptionsSVGRef = React.useRef([])
  const moreOptionsRef = React.useRef([])
  let tableHead, tableSearch, tableRows
  let resultSetLength = 0, resultSetLengthPerView = 0, firstPageIndex = 0
  let totalPages

  firstPageIndex += currentPage*10-10
  const tableValues = {props, searchContent, trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex, resultSetLength}

  const showDeleteModal = (index) => {
    deleteProjectModalState.setDeleteProjectModalStatus(true)
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
      recordIndex: index,
      projectID: props.projectID[index]
    })
  }

  const showSidePanel = (table, index) => {
    updateProjectPanelState.setUpdateProjectPanelStatus(true)

    if(table === 'projects') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.projectID[index],
        name: props.projectName[index],
        description: props.description[index],
        status: props.status[index]
      })
    }
    else if(table === 'timelines') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.timeProjectID[index],
        approvalDate: props.approvalDate[index],
        startDate: props.startDate[index],
        endDate: props.endDate[index],
        duration: props.duration[index]
      })
    }
    else if(table === 'implementation') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.impProjectID[index],
        sector: props.sector[index],
        ministry: props.ministry[index],
        agency: props.agency[index],
        contractor: props.contractor[index],
        priority: props.priority[index]
      })
    }
    else if(table === 'finances') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.finProjectID[index],
        estimatedCost: props.estimatedCost[index],
        budget: props.budget[index],
        financialYear: props.financialYear[index],
        fundingSource: props.fundingSource[index]
      })
    }
    else if(table === 'locations') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.locProjectID[index],
        countyNo: props.countyNo[index],
        subCounty: props.subCounty[index],
        constituency: props.constituency[index],
        ward: props.ward[index]
      })
    }
  }

  if(tableFocus.tableInFocus === 'Counties') {
    tableHead = countyTableHead()
    tableSearch = countyTableSearch(searchState, resultsRef)
    tableRows = countyTableRows(tableValues)
    resultSetLength = countyTableRows(tableValues).length
    resultSetLengthPerView = countyTableRows(tableValues).filter((item) => item !== undefined).length
  }

  else if(tableFocus.tableInFocus === 'projects') {
    tableHead = (
      <tr>
        <th>Project ID</th>
        <th>Name</th>
        <th>Description</th>
        <th colSpan='2'>Status</th>
      </tr>
    )
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.projectName[index]}</td>
          <td>{props.description[index]}</td>
          <td>{props.status[index]}</td>
          <td className='td_more_options'>
            <svg className='more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options_expand mul_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
              <button onClick={() => showDeleteModal(index)}>Delete</button>
            </div>
          </td>
        </tr>
      )
    })
  }

  else if(tableFocus.tableInFocus === 'timelines') {
    tableHead = (
      <tr>
        <th>Project ID</th>
        <th>Approval date</th>
        <th>Start date</th>
        <th>End date</th>
        <th colSpan='2'>Duration</th>
      </tr>
    )
    tableRows = props.timeProjectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.timeProjectID[index]}</td>
          <td>{props.approvalDate[index]}</td>
          <td>{props.startDate[index]}</td>
          <td>{props.endDate[index]}</td>
          <td>{props.duration[index]} months</td>
          <td className='td_more_options'>
            <svg className='more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options_expand' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
            </div>
          </td>
        </tr>
      )
    }
  )}

  else if(tableFocus.tableInFocus === 'implementation') {
    tableHead = (
      <tr>
        <th>Project ID</th>
        <th>Sector</th>
        <th>Ministry</th>
        <th>Implementing agency</th>
        <th>Contractor</th>
        <th colSpan='2'>Priority</th>
      </tr>
    )
    tableRows = props.impProjectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.impProjectID[index]}</td>
          <td>{props.sector[index]}</td>
          <td>{props.ministry[index]}</td>
          <td>{props.agency[index]}</td>
          <td>{props.contractor[index]}</td>
          <td>{props.priority[index]}</td>
          <td className='td_more_options'>
            <svg className='more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options_expand' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
            </div>
          </td>
        </tr>
      )
    }
  )}

  else if(tableFocus.tableInFocus === 'finances') {
    tableHead = (
      <tr>
        <th>Project ID</th>
        <th>Estimated cost</th>
        <th>Budget</th>
        <th>Financial year</th>
        <th colSpan='2'>Funding source</th>
      </tr>
    )
    tableRows = props.finProjectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.finProjectID[index]}</td>
          <td>{props.estimatedCost[index]}</td>
          <td>{props.budget[index]}</td>
          <td>{props.financialYear[index]}</td>
          <td>{props.fundingSource[index]}</td>
          <td className='td_more_options'>
            <svg className='more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options_expand' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
            </div>
          </td>
        </tr>
      )
    }
  )}

  else if(tableFocus.tableInFocus === 'locations') {
    tableHead = (
      <tr>
        <th>Project ID</th>
        <th>County No</th>
        <th>Sub-county</th>
        <th>Constituency</th>
        <th colSpan='2'>Ward</th>
      </tr>
    ) 
    tableRows = props.locProjectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.locProjectID[index]}</td>
          <td>{props.locCountyNo[index]}</td>
          <td>{props.subCounty[index]}</td>
          <td>{props.constituency[index]}</td>
          <td>{props.ward[index]}</td>
          <td className='td_more_options'>
            <svg className='more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options_expand' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
            </div>
          </td>
        </tr>
      )
    }
  )}

  totalPages = Math.ceil(resultSetLength/10)
  if(totalPages < 1) totalPages = 1

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
    <section className='page_section'>
      <h2>Viewing table: {tableFocus.tableInFocus}</h2>
      <div className='modal__card__table_extras flex'>
        <div>
          <button onClick={() => changeTablePage('prev')}>Prev page</button>
          <button onClick={() => changeTablePage('next')}>Next page</button>
        </div>
        <span>PAGE {currentPage} of {totalPages}   </span>
        <span ref={resultsRef}>|   SHOWING RESULTS: {resultSetLengthPerView} of {resultSetLength}</span>
      </div>
      <div className='table_container table_container_sm'>
        <table key={tableFocus.tableInFocus}>
          <thead>
            {tableHead}
          </thead>
          <tbody className='admin_tbody'>
            {tableSearch}
            {tableRows}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminTable