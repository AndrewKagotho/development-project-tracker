import React from 'react'
import axios from 'axios'
import { DashboardContext } from '../../views/admin/Dashboard'
import { adminObject } from '../../utils/templates/objects'
import { openSidePanel } from '../../utils/functions/panels'
import { closeSidePanel } from '../../utils/functions/panels'
import { getAdmins } from '../../utils/functions/getAdmins'

let addAdminScript = 'http://localhost/development-project-tracker/src/utils/php/insert/addAdmin.php'

const CreateAdminPanel = ({props}) => {

  const {adminFocus, createAdminPanelState, infoModal} = React.useContext(DashboardContext)
  const [adminData, setAdminData] = React.useState(adminObject)
  const adminDetailsPanelRef = React.useRef()

  openSidePanel(adminDetailsPanelRef, createAdminPanelState.createAdminPanel)

  const handleChange = (e) => setAdminData({...adminData, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    axios.post(addAdminScript, adminData)
    .then((response) => {
      if(response.data) {
        infoModal.setInfoModalProps({state: true, icon:'success', text:'Successfully added!'})
        getAdmins(props)
      }
      else
        infoModal.setInfoModalProps({state: true, icon:'fail', text:'Error! Try again.'})
    })

    adminFocus.setAdminInFocus(adminObject)
    closeSidePanel(adminDetailsPanelRef, createAdminPanelState.setCreateAdminPanelStatus)
    e.preventDefault()
  }

  return (
    <div className='sidePanel' ref={adminDetailsPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeSidePanel(adminDetailsPanelRef, createAdminPanelState.setCreateAdminPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='sidePanel__content'>
        <form onSubmit={handleSubmit}>
          <h3>Creating project:</h3>
          <div className='sidePanel__content__grid'>
            <label htmlFor='adminUserName'>Username:</label>
            <input type='text' id='adminUserName' name='adminUserName' onChange={handleChange} required autoComplete='off' />
            <label htmlFor='adminFirstName'>First name:</label>
            <input type='text' id='adminFirstName' name='adminFirstName' onChange={handleChange} autoComplete='off' />
            <label htmlFor='adminLastName'>Last name:</label>
            <input type='text' id='adminLastName' name='adminLastName' onChange={handleChange} />
            <label htmlFor='adminPassword'>Password:</label>
            <input type='password' id='adminPassword' name='adminPassword' onChange={handleChange} />
            <label htmlFor='adminEmail'>Email address:</label>
            <input type='text' id='adminEmail' name='adminEmail' onChange={handleChange} />
          </div>
          <button>Create admin</button>
        </form>
      </div>
    </div>
  )
}

export default CreateAdminPanel