import React from 'react'
import { DashboardContext } from '../../views/admin/Dashboard'
import { dynamicShowMoreOptions } from '../../utils/functions/map'
import { dynamicShowMoreOptionsSVG } from '../../utils/functions/map'
import { countyTableHead } from './countyTable'
import { countyTableSearch } from './countyTable'
import { countyTableRows } from './countyTable'
import { projectsTableHead } from './projectsTable'
import { projectsTableSearch } from './projectsTable'
import { projectsTableRows } from './projectsTable'
import { timelinesTableHead } from './timelinesTable'
import { timelinesTableSearch } from './timelinesTable'
import { timelinesTableRows } from './timelinesTable'
import { implementationsTableHead } from './implementationTable'
import { implementationsTableSearch } from './implementationTable'
import { implementationsTableRows } from './implementationTable'
import { financesTableHead } from './financesTable'
import { financesTableSearch } from './financesTable'
import { financesTableRows } from './financesTable'
import { locationsTableHead } from './locationsTable'
import { locationsTableSearch } from './locationsTable'
import { locationsTableRows } from './locationsTable'

export const showMoreOptions = (trRef, moreOptionsSVGRef, moreOptionsRef, index) => {
  dynamicShowMoreOptions(moreOptionsRef, index)
  dynamicShowMoreOptionsSVG(moreOptionsSVGRef, trRef, index)
}

export const showSidePanel = (props, tableFocus, index, updateProjectPanelState, recordFocus, trackValue) => {
  updateProjectPanelState.setUpdateProjectPanelStatus(true)
  trackValue.setTrackLog({action: 'update'})

  if(tableFocus.tableInFocus === 'projects') {
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
      recordIndex: index,
      projectID: props.projectID[index],
      name: props.projectName[index],
      description: props.description[index],
      status: props.status[index]
    })
  }
  else if(tableFocus.tableInFocus === 'timelines') {
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
      recordIndex: index,
      projectID: props.timeProjectID[index],
      approvalDate: props.approvalDate[index],
      startDate: props.startDate[index],
      endDate: props.endDate[index],
      duration: props.duration[index]
    })
  }
  else if(tableFocus.tableInFocus === 'implementation') {
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
  else if(tableFocus.tableInFocus === 'finances') {
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
      recordIndex: index,
      projectID: props.finProjectID[index],
      estimatedCost: props.estimatedCost[index],
      budget: props.budget[index],
      financialYear: props.financialYear[index],
      fundingSource: props.fundingSource[index]
    })
  }
  else if(tableFocus.tableInFocus === 'locations') {
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

export const showDeleteModal = (props, index, deleteProjectModalState, recordFocus) => {
  deleteProjectModalState.setDeleteProjectModalStatus(true)
  recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
    recordIndex: index,
    projectID: props.projectID[index]
  })
}

const AdminTable = ({props}) => {
  
  const {tableFocus, recordFocus, updateProjectPanelState, deleteProjectModalState, searchState, pageValue, trackValue, resultsRef} = React.useContext(DashboardContext)
  const trRef = React.useRef([])
  const moreOptionsSVGRef = React.useRef([])
  const moreOptionsRef = React.useRef([])
  let tableHead, tableSearch, tableRows
  let resultSetLength = 0, resultSetLengthPerView = 0, firstPageIndex = 0
  let totalPages

  firstPageIndex += pageValue.currentPage*10-10
  const countyTableValues = {props, searchState, trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex, resultSetLength}

  const projectInfoStates = {props, tableFocus, recordFocus, searchState, updateProjectPanelState, deleteProjectModalState, trackValue}  
  const projectInfoVars = {trRef, moreOptionsSVGRef, moreOptionsRef, firstPageIndex}

  if(tableFocus.tableInFocus === 'counties') {
    tableHead = countyTableHead()
    tableSearch = countyTableSearch(searchState, resultsRef)
    tableRows = countyTableRows(countyTableValues)
    resultSetLength = countyTableRows(countyTableValues).length
    resultSetLengthPerView = countyTableRows(countyTableValues).filter((item) => item !== undefined).length
  }

  else if(tableFocus.tableInFocus === 'projects') {
    tableHead = projectsTableHead()
    tableSearch = projectsTableSearch(searchState, resultsRef)
    tableRows = projectsTableRows(projectInfoStates, projectInfoVars)
    resultSetLength = projectsTableRows(projectInfoStates, projectInfoVars).length
    resultSetLengthPerView = projectsTableRows(projectInfoStates, projectInfoVars).filter((item) => item !== undefined).length
  }

  else if(tableFocus.tableInFocus === 'timelines') {
    tableHead = timelinesTableHead()
    tableSearch = timelinesTableSearch(searchState, resultsRef)
    tableRows = timelinesTableRows(projectInfoStates, projectInfoVars)
    resultSetLength = timelinesTableRows(projectInfoStates, projectInfoVars).length
    resultSetLengthPerView = timelinesTableRows(projectInfoStates, projectInfoVars).filter((item) => item !== undefined).length
  }

  else if(tableFocus.tableInFocus === 'implementation') {
    tableHead = implementationsTableHead()
    tableSearch = implementationsTableSearch(searchState, resultsRef)
    tableRows = implementationsTableRows(projectInfoStates, projectInfoVars)
    resultSetLength = implementationsTableRows(projectInfoStates, projectInfoVars).length
    resultSetLengthPerView = implementationsTableRows(projectInfoStates, projectInfoVars).filter((item) => item !== undefined).length
  }

  else if(tableFocus.tableInFocus === 'finances') {
    tableHead = financesTableHead()
    tableSearch = financesTableSearch(searchState, resultsRef)
    tableRows = financesTableRows(projectInfoStates, projectInfoVars)
    resultSetLength = financesTableRows(projectInfoStates, projectInfoVars).length
    resultSetLengthPerView = financesTableRows(projectInfoStates, projectInfoVars).filter((item) => item !== undefined).length
  }

  else if(tableFocus.tableInFocus === 'locations') {
    tableHead = locationsTableHead()
    tableSearch = locationsTableSearch(searchState, resultsRef)
    tableRows = locationsTableRows(projectInfoStates, projectInfoVars)
    resultSetLength = locationsTableRows(projectInfoStates, projectInfoVars).length
    resultSetLengthPerView = locationsTableRows(projectInfoStates, projectInfoVars).filter((item) => item !== undefined).length
  }

  totalPages = Math.ceil(resultSetLength/10)
  if(totalPages < 1) totalPages = 1

  const changeTablePage = (action) => {
    if(action === 'next') {
      if(pageValue.currentPage < totalPages)
        pageValue.setCurrentPage(pageValue.currentPage+1)
    }
    else if(action === 'prev') {
      if(pageValue.currentPage > 1)
        pageValue.setCurrentPage(pageValue.currentPage-1)
    }
  }

  return (
    <section className='page_section page_section_lg'>
      <h2>Viewing table: {tableFocus.tableInFocus}</h2>
      <div className='table_div'>
        <div className='modal__card__table_extras flex'>
          <div>
            <button onClick={() => changeTablePage('prev')}>Prev page</button>
            <button onClick={() => changeTablePage('next')}>Next page</button>
          </div>
          <span>PAGE {pageValue.currentPage} of {totalPages}   </span>
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
      </div>
    </section>
  )
}

export default AdminTable