import React from 'react'
import { CountyContext } from '../../views/public/Counties'
import { openLoginPanel } from '../../utils/functions/panels'
import { closeLoginPanel } from '../../utils/functions/panels'

const ProjectDetailsPanel = ({props}) => {

  const {projectFocus, projectDetailsPanelState} = React.useContext(CountyContext)
  const projectDetailsPanelRef = React.useRef()

  openLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.projectDetailsPanel)

  return (
    <div className='sidePanel' ref={projectDetailsPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.setProjectDetailsPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <aside>
          <h3>Project details</h3>
          <div className='sidePanel__content__grid'>
            <span>Project ID:</span>
            <span>{props.projectID[projectFocus.projectInFocus]}</span>
            <span>Name:</span>
            <span>{props.projectName[projectFocus.projectInFocus]}</span>
            <span>Description:</span>
            <span>{props.description[projectFocus.projectInFocus]}</span>
            <span>Status:</span>
            <span>{props.status[projectFocus.projectInFocus]}</span>
          </div>
          <h3>Timelines</h3>
          <div className='sidePanel__content__grid'>
            <span>Approval date:</span>
            <span>{props.approvalDate[projectFocus.projectInFocus]}</span>
            <span>Start date:</span>
            <span>{props.startDate[projectFocus.projectInFocus]}</span>
            <span>End date:</span>
            <span>{props.endDate[projectFocus.projectInFocus]}</span>
            <span>Duration:</span>
            <span>{props.duration[projectFocus.projectInFocus]} months</span>
          </div>
          <h3>Implementation</h3>
          <div className='sidePanel__content__grid'>
            <span>Sector:</span>
            <span>{props.sector[projectFocus.projectInFocus]}</span>
            <span>Ministry:</span>
            <span>{props.ministry[projectFocus.projectInFocus]}</span>
            <span>Implementing agency:</span>
            <span>{props.agency[projectFocus.projectInFocus]}</span>
            <span>Contractor:</span>
            <span>{props.contractor[projectFocus.projectInFocus]}</span>
            <span>Priority:</span>
            <span>{props.priority[projectFocus.projectInFocus]}</span>
          </div>
          <h3>Financials</h3>
          <div className='sidePanel__content__grid'>
            <span>Estimated cost:</span>
            <span>{props.estimatedCost[projectFocus.projectInFocus]}</span>
            <span>Budget:</span>
            <span>{props.budget[projectFocus.projectInFocus]}</span>
            <span>Financial year:</span>
            <span>{props.financialYear[projectFocus.projectInFocus]}</span>
            <span>Source of funding:</span>
            <span>{props.fundingSource[projectFocus.projectInFocus]}</span>
          </div>
          <h3>Location</h3>
          <div className='sidePanel__content__grid'>
          <span>County:</span>
            <span>{props.locCountyNo[projectFocus.projectInFocus]}</span>
            <span>Sub-county:</span>
            <span>{props.subCounty[projectFocus.projectInFocus]}</span>
            <span>Constituency:</span>
            <span>{props.constituency[projectFocus.projectInFocus]}</span>
            <span>Ward:</span>
            <span>{props.ward[projectFocus.projectInFocus]}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ProjectDetailsPanel