import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicNavbarLanding from './layout/public/NavbarLanding'
import PublicNavbar from './layout/public/Navbar'
import AdminNavbar from './layout/admin/Navbar'
import Landing from './views/public/Landing'
import Counties from './views/public/Counties'
import Updates from './views/public/Updates'
import About from './views/public/About'
import Dashboard from './views/admin/Dashboard'
import './styles/main.css'

export const AppContext = React.createContext()
export const baseURL = '/development-project-tracker'
const projectStatusArray = ['Completed', 'In progress', 'Approved', 'Scheduled']
let statusTotalArray = []
let allProjectsArray = []
let completedArray = [], inProgressArray = [], approvedArray = [], scheduledArray = []

const App = (props) => {

  React.useEffect(() => {
    setStats({
      allProjects: allProjectsArray,
      completed: completedArray,
      inProgress: inProgressArray,
      approved: approvedArray,
      scheduled: scheduledArray
    })
  // eslint-disable-next-line
  }, [])

  const [stats, setStats] = React.useState({allProjects: [], completed: [], inProgress: [], approved: [], scheduled: []})
  const statsValues = {stats, setStats}

  const [loginPanel, setLoginPanelStatus] = React.useState(false)
  const panelStatus = {loginPanel, setLoginPanelStatus}

  const [getData, setGetData] = React.useState({getCounties: false, getUpdates: false})
  const getValue = {getData, setGetData}

  const value = {statsValues, panelStatus, getValue}

  for(let i=0; i<47; i++) {
    for(let j=0; j<projectStatusArray.length; j++) {
      statusTotalArray[j] = props.status
      .filter((item, index) =>
        item === projectStatusArray[j] 
        && parseInt(props.locCountyNo[index]-1) === i
        )
      .reduce((acc) => acc + 1, 0)
    }
    allProjectsArray[i] = statusTotalArray[0] + statusTotalArray[1] + statusTotalArray[2] + statusTotalArray[3]
    completedArray[i] = statusTotalArray[0]
    inProgressArray[i] = statusTotalArray[1]
    approvedArray[i] = statusTotalArray[2]
    scheduledArray[i] = statusTotalArray[3]
  }

  return (
    <AppContext.Provider value={value} >
      <BrowserRouter>
        <Routes>
          <Route path={baseURL} element={<PublicNavbarLanding />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path={baseURL} element={<PublicNavbar />}>
            <Route path={baseURL +'/counties'} element={<Counties />} />
            <Route path={baseURL +'/updates'} element={<Updates />} />
            <Route path={baseURL +'/about'} element={<About />} />
          </Route>
          <Route path={baseURL +'/admin'} element={<AdminNavbar />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.projects.details.status,
    locCountyNo: state.projects.locations.countyNo
  }
}

export default connect(mapStateToProps)(App)
