import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/Action'
import { getCounties } from '../../utils/functions/getCounties'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getProjectTimelines } from '../../utils/functions/getProjectTimelines'
import { getProjectImplementations } from '../../utils/functions/getProjectImplementations'
import { getProjectFinances } from '../../utils/functions/getProjectFinances'
import { getProjectLocations } from '../../utils/functions/getProjectLocations'
import { getTrackingLogs } from '../../utils/functions/getTrackingLogs'
import { getAdmins } from '../../utils/functions/getAdmins'
import { projectObject } from '../../utils/templates/objects'
import { countyObject } from '../../utils/templates/objects'
import { adminObject } from '../../utils/templates/objects'
import AdminTable from '../../features/admin/AdminTable'
import CreateProjectPanel from '../../layout/admin/CreateProjectPanel'
import CreateAdminPanel from '../../layout/admin/CreateAdminPanel'
import UpdateProjectPanel from '../../layout/admin/UpdateProjectPanel'
import UpdateOtherPanel from '../../layout/admin/UpdateOtherPanel'
import DeleteProjectModal from '../../features/admin/DeleteProjectModal'
import DeleteAdminModal from '../../features/admin/DeleteAdminModal'
import InfoModal from '../../features/admin/InfoModal'
import { dynamicMenu } from '../../utils/functions/map'

export const DashboardContext = React.createContext()

const Dashboard = (props) => {

  React.useEffect(() => {
    getCounties(props)
    getProjectDetails(props)
    getProjectTimelines(props)
    getProjectImplementations(props)
    getProjectFinances(props)
    getProjectLocations(props)
    getTrackingLogs(props)
    getAdmins(props)
    // eslint-disable-next-line
  }, [])

  const menuRef = React.useRef([])
  const resultsRef = React.useRef()

  const [tableInFocus, setTableInFocus] = React.useState('projects')
  const [recordInFocus, setRecordInFocus] = React.useState(projectObject)
  const [countyInFocus, setCountyInFocus] = React.useState(countyObject)
  const [adminInFocus, setAdminInFocus] = React.useState(adminObject)
  const [createProjectPanel, setCreateProjectPanelStatus] = React.useState(false)
  const [createAdminPanel, setCreateAdminPanelStatus] = React.useState(false)
  const [updateProjectPanel, setUpdateProjectPanelStatus] = React.useState(false)
  const [updateOtherPanel, setUpdateOtherPanelStatus] = React.useState(false)
  const [deleteProjectModal, setDeleteProjectModalStatus] = React.useState(false)
  const [deleteAdminModal, setDeleteAdminModalStatus] = React.useState(false)
  const [infoModalProps, setInfoModalProps] = React.useState({state: false, icon: '', text:''})
  const [searchContent, setSearchContent] = React.useState({selectedInput: '', inputValue: ''})
  const [currentPage, setCurrentPage] = React.useState(1)
  const [trackedChanges, setTrackedChanges] = React.useState({action: ''})

  const tableFocus = {tableInFocus, setTableInFocus}
  const recordFocus = {recordInFocus, setRecordInFocus}
  const countyFocus = {countyInFocus, setCountyInFocus}
  const adminFocus = {adminInFocus, setAdminInFocus}
  const createProjectPanelState = {createProjectPanel, setCreateProjectPanelStatus}
  const createAdminPanelState = {createAdminPanel, setCreateAdminPanelStatus}
  const updateProjectPanelState = {updateProjectPanel, setUpdateProjectPanelStatus}
  const updateOtherPanelState = {updateOtherPanel, setUpdateOtherPanelStatus}
  const deleteProjectModalState = {deleteProjectModal, setDeleteProjectModalStatus}
  const deleteAdminModalState = {deleteAdminModal, setDeleteAdminModalStatus}
  const infoModal = {infoModalProps, setInfoModalProps}
  const searchState = {searchContent, setSearchContent}
  const pageValue = {currentPage, setCurrentPage}
  const trackingValues = {trackedChanges, setTrackedChanges}

  const value = {
    tableFocus,
    recordFocus,
    countyFocus,
    adminFocus,
    createProjectPanelState,
    createAdminPanelState,
    updateProjectPanelState,
    updateOtherPanelState,
    deleteProjectModalState,
    deleteAdminModalState,
    infoModal,
    searchState,
    pageValue,
    trackingValues,
    resultsRef
  }

  const showTable = (table, index) => {
    setTableInFocus(table)
    setSearchContent({selectedInput: '', inputValue: ''})
    setCurrentPage(1)
    dynamicMenu(menuRef, index)
  }

  const createProject = () => {
    setCreateProjectPanelStatus(true)
    setTrackedChanges({action: 'create'})
  }

  return (
    <DashboardContext.Provider value={value}>
      <div className='admin_view'>
        <menu className='flex'>
          <section>
            <h3>County data</h3>
            <button ref={(item) => menuRef.current[0] = item} onClick={() => showTable('counties', 0)}>Counties</button>
          </section>
          <section>
            <h3>Project data</h3>
            <button ref={(item) => menuRef.current[1] = item} onClick={() => showTable('projects', 1)}>Projects</button>
            <button ref={(item) => menuRef.current[2] = item} onClick={() => showTable('timelines', 2)}>Timelines</button>
            <button ref={(item) => menuRef.current[3] = item} onClick={() => showTable('implementation', 3)}>Implementation</button>
            <button ref={(item) => menuRef.current[4] = item} onClick={() => showTable('finances', 4)}>Finances</button>
            <button ref={(item) => menuRef.current[5] = item} onClick={() => showTable('locations', 5)}>Locations</button>
          </section>
          <section>
            <h3>Tracking data</h3>
            <button ref={(item) => menuRef.current[6] = item} onClick={() => showTable('tracking logs', 6)}>Logs</button>
          </section>
          <section>
            <h3>Admin data</h3>
            <button ref={(item) => menuRef.current[7] = item} onClick={() => showTable('admin', 7)}>Administrators</button>
          </section>
          <div className='admin_view__add_project flex' onClick={createProject}>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
            <span>New project</span>
          </div>
        </menu>
        <div className='admin_view__content'>
          <AdminTable props={props} />
          <CreateProjectPanel props={props} />
          <UpdateProjectPanel props={props} />
          <UpdateOtherPanel props={props} />
          <CreateAdminPanel props={props} />
        </div>
      </div>
      <DeleteProjectModal props={props} />
      <DeleteAdminModal props={props} />
      <InfoModal />
    </DashboardContext.Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    countyNo: state.counties.number,
    countyName: state.counties.name,
    governor: state.counties.governor,
    senator: state.counties.senator,
    
    projectID: state.projects.details.projectID,
    projectName: state.projects.details.name,
    description: state.projects.details.description,
    status: state.projects.details.status,

    timeProjectID: state.projects.timelines.projectID,
    approvalDate: state.projects.timelines.approvalDate,
    startDate: state.projects.timelines.startDate,
    endDate: state.projects.timelines.endDate,
    duration: state.projects.timelines.duration,

    impProjectID: state.projects.implementation.projectID,
    sector: state.projects.implementation.sector,
    ministry: state.projects.implementation.ministry,
    agency: state.projects.implementation.agency,
    contractor: state.projects.implementation.contractor,
    priority: state.projects.implementation.priority,

    finProjectID: state.projects.finances.projectID,
    estimatedCost: state.projects.finances.estimatedCost,
    budget: state.projects.finances.budget,
    financialYear: state.projects.finances.financialYear,
    fundingSource: state.projects.finances.fundingSource,

    locProjectID: state.projects.locations.projectID,
    locCountyNo: state.projects.locations.countyNo,
    subCounty: state.projects.locations.subCounty,
    constituency: state.projects.locations.constituency,
    ward: state.projects.locations.ward,

    logDate: state.tracking.date,
    logProjectID: state.tracking.projectID,
    logField: state.tracking.field,
    logAction: state.tracking.action,
    valueFrom: state.tracking.valueFrom,
    valueTo: state.tracking.valueTo,

    adminUsername: state.admins.username,
    adminFirstName: state.admins.firstName,
    adminLastName: state.admins.lastName,
    adminEmail: state.admins.email
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)