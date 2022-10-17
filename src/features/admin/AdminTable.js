import React from 'react'
import { DashboardContext } from '../../views/admin/Dashboard'
import { dynamicShowMoreOptions } from '../../utils/functions/map'
import { dynamicShowMoreOptionsSVG } from '../../utils/functions/map'

const AdminTable = ({props}) => {
  
  const {tableFocus, recordFocus, updateProjectPanelState, deleteProjectModalState} = React.useContext(DashboardContext)
  const trRef = React.useRef([])
  const moreOptionsSVGRef = React.useRef([])
  const moreOptionsRef = React.useRef([])
  let tableRows, tableHead

  const showMoreOptions = (index) => {
    dynamicShowMoreOptions(moreOptionsRef, index)
    dynamicShowMoreOptionsSVG(moreOptionsSVGRef, trRef, index)
  }

  const showDeleteModal = (index) => {
    deleteProjectModalState.setDeleteProjectModalStatus(true)
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus, recordIndex: index })
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
              <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
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
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.approvalDate[index]}</td>
          <td>{props.startDate[index]}</td>
          <td>{props.endDate[index]}</td>
          <td>{props.duration[index]} months</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
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
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.estimatedCost[index]}</td>
          <td>{props.budget[index]}</td>
          <td>{props.financialYear[index]}</td>
          <td>{props.fundingSource[index]}</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
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
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index} ref={(item) => trRef.current[index] = item}>
          <td>{props.projectID[index]}</td>
          <td>{props.countyNo[index]}</td>
          <td>{props.subCounty[index]}</td>
          <td>{props.constituency[index]}</td>
          <td>{props.ward[index]}</td>
          <td>
            <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <div className='td_more_options flex' ref={(item) => moreOptionsRef.current[index] = item}>
              <button onClick={() => showSidePanel(tableFocus.tableInFocus, index)}>Update</button>
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