import React from 'react'
import { DashboardContext } from '../../../views/admin/Dashboard'
import { dynamicShowMoreOptions } from '../../../utils/functions/map'
import { dynamicShowMoreOptionsSVG } from '../../../utils/functions/map'

const Projects = ({props}) => {

  const {tableFocus, recordFocus, updateProjectPanelState} = React.useContext(DashboardContext)
  const trRef = React.useRef([])
  const moreOptionsSVGRef = React.useRef([])
  const moreOptionsRef = React.useRef([])

  const showMoreOptions = (index) => {
    dynamicShowMoreOptions(moreOptionsRef, index)
    dynamicShowMoreOptionsSVG(moreOptionsSVGRef, trRef, index)
  }

  const showSidePanel = (index) => {
    updateProjectPanelState.setUpdateProjectPanelStatus(true)
    recordFocus.setRecordInFocus({...recordFocus.recordInFocus,
      recordIndex: index,
      projectID: props.projectID[index],
      name: props.projectName[index],
      description: props.description[index],
      status: props.status[index]
    })
    console.log(recordFocus.recordInFocus.recordIndex)
  }

  let tableHead = (
    <tr>
      <th>Project ID</th>
      <th>Name</th>
      <th>Description</th>
      <th colSpan='2'>Status</th>
    </tr>
  )

  let tableRows = props.projectID.map((item, index) => {
    return (
      <tr key={index} ref={(item) => trRef.current[index] = item}>
        <td>{props.projectID[index]}</td>
        <td>{props.projectName[index]}</td>
        <td>{props.description[index]}</td>
        <td>{props.status[index]}</td>
        <td>
          <svg className='td_more_options_svg' onClick={() => showMoreOptions(index)} ref={(item) => moreOptionsSVGRef.current[index] = item} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
          <div className='td_more_options' ref={(item) => moreOptionsRef.current[index] = item}>
            <button onClick={() => showSidePanel(index)}>Update</button>
            <button>Delete</button>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <section className='page_section'>
      <h2>Viewing table: {tableFocus.tableInFocus}</h2>
      <p>Create, read, update and delete records here.</p>
      <div className='table_container table_container_sm'>
        <table>
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

export default Projects