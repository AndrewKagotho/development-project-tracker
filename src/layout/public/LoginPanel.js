import React from 'react'
import { AppContext } from '../../App'
import { openSidePanel } from '../../utils/functions/panels'
import { closeSidePanel } from '../../utils/functions/panels'

let loginScript = 'http://localhost:3001/api/admin';

const LoginPanel = () => {

  const {panelStatus} = React.useContext(AppContext)
  const [formData, setFormData] = React.useState({username: '', password: ''})
  const loginPanelRef = React.useRef()

  openSidePanel(loginPanelRef, panelStatus.loginPanel)

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

  return (
    <div className='sidePanel' ref={loginPanelRef}>
      <svg className='close_modal_svg' onClick={() => closeSidePanel(loginPanelRef, panelStatus.setLoginPanelStatus)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000"><path d="M0 0h24v24H0V0z" fill="#FFF"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
      <div className='login_container'>
        <div className='sidePanel__content'>
          <form className='login_form' action={loginScript} method='POST'>
            <h3>Administrator login</h3>
            <div className='sidePanel__content__grid'>
              <label htmlFor='username'>Username :</label>
              <input type='text' id='username' name='username' onChange={handleChange} />
              <label htmlFor='password'>Password :</label>
              <input type='password' id='password' name='password' onChange={handleChange} />
            </div>
            <button>Proceed to login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPanel