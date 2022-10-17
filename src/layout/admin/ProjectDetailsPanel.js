import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { projectTemplate } from '../../views/admin/Dashboard'
import { openLoginPanel } from '../../utils/functions/panels'
import { closeLoginPanel } from '../../utils/functions/panels'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getTimelineDetails } from '../../utils/functions/getTimelineDetails'
import { getImplementationDetails } from '../../utils/functions/getImplementationDetails'
import { getFinanceDetails } from '../../utils/functions/getFinanceDetails'
import { getLocationDetails } from '../../utils/functions/getLocationDetails'

let addProjectScript = 'http://localhost/development-project-tracker/src/utils/php/add/addProject.php'
let addProjectDetailsScript = 'http://localhost/development-project-tracker/src/utils/php/add/addProjectDetails.php'

const ProjectDetailsPanel = ({props}) => {

  const {projectDetailsPanelState, infoModal} = React.useContext(DashboardContext)
  const [projectData, setProjectData] = React.useState(projectTemplate)
  const projectDetailsPanelRef = React.useRef()

  openLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.projectDetailsPanel)

  const handleChange = (e) => setProjectData({...projectData, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    axios.post(addProjectScript, projectData)
    .then((response) => {
      if(response.data) {
        axios.post(addProjectDetailsScript, projectData)
        .then((response) => {
          infoModal.setInfoModalProps({state: true, text:'Successfully added!'})
          getProjectDetails(props)
          getTimelineDetails(props)
          getImplementationDetails(props)
          getFinanceDetails(props)
          getLocationDetails(props)
        })
      }
    })

    closeLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.setProjectDetailsPanelStatus)
    e.preventDefault()
  }

  return (
    <div className='sidePanel' ref={projectDetailsPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.setProjectDetailsPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={handleSubmit}>
          <h3>Project details</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='projectID'>Project ID:</label>
            <input type='text' id='projectID' name='projectID' onChange={handleChange} required autoComplete='off' />
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' onChange={handleChange} required />
            <label htmlFor='description'>Description:</label>
            <textarea type='text' id='description' name='description' onChange={handleChange} />
            <label htmlFor='status'>Status:</label>
            <select id='status' name='status' onChange={handleChange} >
              <option value='Completed'>Completed</option>
              <option value='In progress'>In progress</option>
              <option value='Not started'>Not started</option>
              <option value='Approved'>Approved</option>
              <option value='Delayed'>Delayed</option>
            </select>
          </div>
          <h3>Timelines</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='approvalDate'>Approval date:</label>
            <input type='text' id='approvalDate' name='approvalDate' placeholder='i.e. YYYY-MM-DD' onChange={handleChange} />
            <label htmlFor='startDate'>Start date:</label>
            <input type='text' id='startDate' name='startDate' placeholder='i.e. YYYY-MM-DD' onChange={handleChange} />
            <label htmlFor='endDate'>End date:</label>
            <input type='text' id='endDate' name='endDate' placeholder='i.e. YYYY-MM-DD' onChange={handleChange} />
            <label htmlFor='duration'>Duration (months):</label>
            <input type='text' id='duration' name='duration' onChange={handleChange} />
          </div>
          <h3>Implementation</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='sector'>Sector:</label>
            <input type='text' id='sector' name='sector' onChange={handleChange} />
            <label htmlFor='ministry'>Ministry:</label>
            <input type='text' id='ministry' name='ministry' onChange={handleChange} />
            <label htmlFor='agency'>Implementing agency:</label>
            <input type='text' id='agency' name='agency' onChange={handleChange} />
            <label htmlFor='contractor'>Contractor:</label>
            <input type='text' id='contractor' name='contractor' onChange={handleChange} />
            <label htmlFor='priority'>Priority:</label>
            <select id='priority' name='priority' onChange={handleChange} >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <h3>Financials</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='estimatedCost'>Estimated cost:</label>
            <input type='text' id='estimatedCost' name='estimatedCost' placeholder='KSH' onChange={handleChange} />
            <label htmlFor='budget'>Budget:</label>
            <input type='text' id='budget' name='budget' placeholder='KSH' onChange={handleChange} />
            <label htmlFor='financialYear'>Financial year:</label>
            <input type='text' id='financialYear' name='financialYear' placeholder='KSH' onChange={handleChange} />
            <label htmlFor='fundingSource'>Source of funding:</label>
            <input type='text' id='fundingSource' name='fundingSource' onChange={handleChange} />
          </div>
          <h3>Location</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='countyNo'>County:</label>
            <input type='text' id='countyNo' name='countyNo' onChange={handleChange} />
            <label htmlFor='subCounty'>Sub-county:</label>
            <input type='text' id='subCounty' name='subCounty' onChange={handleChange} />
            <label htmlFor='constituency'>Constituency:</label>
            <input type='text' id='constituency' name='constituency' onChange={handleChange} />
            <label htmlFor='ward'>Ward:</label>
            <input type='text' id='ward' name='ward' onChange={handleChange} />
          </div>
          <button>Create project</button>
        </form>
      </div>
    </div>
  )
}

export default ProjectDetailsPanel