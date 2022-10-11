import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { openLoginPanel } from '../../utils/functions/panels'
import { closeLoginPanel } from '../../utils/functions/panels'

let addProjectScript = 'http://localhost/development-project-tracker/src/utils/php/addProject.php'

const ProjectDetailsPanel = ({props}) => {

  const {projectDetailsPanelState} = React.useContext(DashboardContext)
  const [projectData, setProjectData] = React.useState(projectTemplate)
  const projectDetailsPanelRef = React.useRef()

  const handleChange = (e) => setProjectData({...projectData, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    axios.post(addProjectScript, projectData)
    .then((response) => {
      console.log(response)
    })

    e.preventDefault()
  }

  openLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.projectDetailsPanel)

  return (
    <div className='sidePanel' ref={projectDetailsPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeLoginPanel(projectDetailsPanelRef, projectDetailsPanelState.setProjectDetailsPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={handleSubmit}>
          <h3>Project details</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='projectID'>Project ID:</label>
            <input type='text' id='projectID' name='projectID' onChange={handleChange} />
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' onChange={handleChange} />
            <label htmlFor='description'>Description:</label>
            <input type='text' id='description' name='description' onChange={handleChange} />
            <label htmlFor='status'>Status:</label>
            <input type='text' id='status' name='status' onChange={handleChange} />
          </div>
          <h3>Timelines</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='approvalDate'>Approval date:</label>
            <input type='text' id='approvalDate' name='approvalDate' onChange={handleChange} />
            <label htmlFor='startDate'>Start date:</label>
            <input type='text' id='startDate' name='startDate' onChange={handleChange} />
            <label htmlFor='endDate'>End date:</label>
            <input type='text' id='endDate' name='endDate' onChange={handleChange} />
            <label htmlFor='duration'>Duration:</label>
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
            <label htmlFor='contacts'>Contacts:</label>
            <input type='text' id='contacts' name='contacts' onChange={handleChange} />
            <label htmlFor='priority'>Priority:</label>
            <input type='text' id='priority' name='priority' onChange={handleChange} />
          </div>
          <h3>Financials</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='estimatedCost'>Estimated cost:</label>
            <input type='text' id='estimatedCost' name='estimatedCost' onChange={handleChange} />
            <label htmlFor='budget'>Budget:</label>
            <input type='text' id='budget' name='budget' onChange={handleChange} />
            <label htmlFor='financialYear'>Financial year:</label>
            <input type='text' id='financialYear' name='financialYear' onChange={handleChange} />
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

const projectTemplate = {
  projectID: '',
  name: '',
  description: '',
  status: '',
  approvalDate: '',
  startDate: '',
  endDate: '',
  duration: '',
  sector: '',
  ministry: '',
  agency: '',
  contractor: '',
  contacts: '',
  priority: '',
  estimatedCost: '',
  budget: '',
  financialYear: '',
  fundingSource: '',
  countyNo: '',
  subCounty: '',
  constituency: '',
  ward: ''
}