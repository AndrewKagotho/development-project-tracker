import React from 'react'
import { CountyContext } from '../views/CountiesView'
import { openLoginPanel } from '../utils/functions/panels'
import { closeLoginPanel } from '../utils/functions/panels'

const ProjectDetailsPanel = ({props}) => {

  const {projectDetailsPanelState} = React.useContext(CountyContext)
  const projectDetailsPanelRef = React.useRef()

  openLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.projectDetailsPanel)

  return (
    <div className='sidePanel' ref={projectDetailsPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.setProjectDetailsPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__info flex'>
        <aside className='card card_sm'>
          <h3>Project details</h3>
          <div className='aside_grid'>
            <span>Project ID:</span>
            <span>{props.projectID[1]}</span>
            <span>Name:</span>
            <span>{props.projectName[1]}</span>
            <span>Description:</span>
            <span>{props.description[1]}</span>
            <span>Status:</span>
            <span>{props.status[1]}</span>
          </div>
        </aside>
        <aside className='card card_sm'>
          <h3>Timelines</h3>
          <div className='aside_grid'>
            <span>Approval date:</span>
            <span>{props.approvalDate[1]}</span>
            <span>Start date:</span>
            <span>{props.startDate[1]}</span>
            <span>End date:</span>
            <span>{props.endDate[1]}</span>
            <span>Duration:</span>
            <span>{props.duration[1]}</span>
          </div>
        </aside>
        <aside className='card card_sm'>
          <h3>Implementation</h3>
          <div className='aside_grid'>
            <span>Sector:</span>
            <span>{props.sector[1]}</span>
            <span>Ministry:</span>
            <span>{props.ministry[1]}</span>
            <span>Implementing agency:</span>
            <span>{props.agency[1]}</span>
            <span>Contractor:</span>
            <span>{props.contractor[1]}</span>
            <span>Contacts:</span>
            <span>{props.contacts[1]}</span>
            <span>Priority:</span>
            <span>{props.priority[1]}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ProjectDetailsPanel