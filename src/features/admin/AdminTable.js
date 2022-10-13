import React from 'react'
import { DashboardContext } from '../../views/admin/Dashboard'
import { dynamicShowMoreOptions } from '../../utils/functions/map'
import { dynamicShowMoreOptionsSVG } from '../../utils/functions/map'

const AdminTable = ({props}) => {
  
  const {tableFocus, recordFocus, updateProjectPanelState} = React.useContext(DashboardContext)
  const trRef = React.useRef([])
  const moreOptionsSVGRef = React.useRef([])
  const moreOptionsRef = React.useRef([])
  let tableRows, tableHead

  const showMoreOptions = (index) => {
    dynamicShowMoreOptions(moreOptionsRef, index)
    dynamicShowMoreOptionsSVG(moreOptionsSVGRef, trRef, index)
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
        projectID: props.projectID[index],
        approvalDate: props.approvalDate[index],
        startDate: props.startDate[index],
        endDate: props.endDate[index],
        duration: props.duration[index]
      })
    }
    else if(table === 'implementation') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.projectID[index],
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
        projectID: props.projectID[index],
        estimatedCost: props.estimatedCost[index],
        budget: props.budget[index],
        financialYear: props.financialYear[index],
        fundingSource: props.fundingSource[index]
      })
    }
    else if(table === 'locations') {
      recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
        recordIndex: index,
        projectID: props.projectID[index],
        countyNo: props.countyNo[index],
        subCounty: props.subCounty[index],
        constituency: props.constituency[index],
        ward: props.ward[index]
      })
    }
  }

  if(tableFocus.tableInFocus === 'Counties') {
    tableHead = (
      <tr>
        <th>County No</th>
        <th>Name</th>
        <th>Governor</th>
        <th colSpan='2'>Senator</th>
      </tr>
    )
    tableRows = props.countyNo.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.countyNo[index]}</td>
          <td>{props.countyName[index]}</td>
          <td>{props.governor[index]}</td>
          <td>{props.senator[index]}</td>
          <td>
            <div>
              <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
              <div className='td_more_options' ref={(item) => moreOptionsRef.current[index] = item}>
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          </td>
        </tr>
      )
    }
  )}

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
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
              <button>Delete</button>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.approvalDate[index]}</td>
          <td>{props.startDate[index]}</td>
          <td>{props.endDate[index]}</td>
          <td>{props.duration[index]} months</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
              <button>Delete</button>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.sector[index]}</td>
          <td>{props.ministry[index]}</td>
          <td>{props.agency[index]}</td>
          <td>{props.contractor[index]}</td>
          <td>{props.priority[index]}</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
              <button>Delete</button>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.estimatedCost[index]}</td>
          <td>{props.budget[index]}</td>
          <td>{props.financialYear[index]}</td>
          <td>{props.fundingSource[index]}</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
              <button>Delete</button>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.countyNo[index]}</td>
          <td>{props.subCounty[index]}</td>
          <td>{props.constituency[index]}</td>
          <td>{props.ward[index]}</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
      )
    }
  )}

  return (
    <section className='page_section'>
      <h2>Viewing table: {tableFocus.tableInFocus}</h2>
      <p>Create, read, update and delete records here.</p>
      <div className='table_container table_container_sm'>
        <table key={tableFocus.tableInFocus}>
          <thead>
            {tableHead}
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminTable