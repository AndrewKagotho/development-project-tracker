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
import AdminTable from '../../features/admin/AdminTable'
import ProjectDetailsPanel from '../../layout/admin/ProjectDetailsPanel'
import UpdateProjectPanel from '../../layout/admin/UpdateProjectPanel'
import DeleteProjectModal from '../../features/admin/DeleteProjectModal'
import InfoModal from '../../features/admin/InfoModal'

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

  const resultsRef = React.useRef()

  const [tableInFocus, setTableInFocus] = React.useState('counties')
  const tableFocus = {tableInFocus, setTableInFocus}

  const [recordInFocus, setRecordInFocus] = React.useState(projectTemplate)
  const recordFocus = {recordInFocus, setRecordInFocus}

  const [projectDetailsPanel, setProjectDetailsPanelStatus] = React.useState(false)
  const projectDetailsPanelState = {projectDetailsPanel, setProjectDetailsPanelStatus}

  const [updateProjectPanel, setUpdateProjectPanelStatus] = React.useState(false)
  const updateProjectPanelState = {updateProjectPanel, setUpdateProjectPanelStatus}

  const [deleteProjectModal, setDeleteProjectModalStatus] = React.useState(false)
  const deleteProjectModalState = {deleteProjectModal, setDeleteProjectModalStatus}

  const [infoModalProps, setInfoModalProps] = React.useState({state: false, icon: '', text:''})
  const infoModal = {infoModalProps, setInfoModalProps}

  const [searchContent, setSearchContent] = React.useState({state: false, selectedInput: '', inputValue: ''})
  const searchState = {searchContent, setSearchContent}

  const [currentPage, setCurrentPage] = React.useState(1)
  const pageValue = {currentPage, setCurrentPage}

  const [trackLog, setTrackLog] = React.useState({action: ''})
  const trackValue = {trackLog, setTrackLog}

  const value = {
    tableFocus,
    recordFocus,
    projectDetailsPanelState,
    updateProjectPanelState,
    deleteProjectModalState,
    infoModal,
    searchState,
    pageValue,
    trackValue,
    resultsRef
  }

  const showTable = (table) => {
    setTableInFocus(table)
    setSearchContent({state: false, selectedInput: '', inputValue: ''})
    setCurrentPage(1)
    resultsRef.current.style.display = 'none'
  }

  return (
    <DashboardContext.Provider value={value}>
      <div className='admin_view'>
        <menu className='flex'>
          <section>
            <h3>County data</h3>
            <button onClick={() => showTable('counties')}>Counties</button>
          </section>
          <section>
            <h3>Project data</h3>
            <button onClick={() => showTable('projects')}>Projects</button>
            <button onClick={() => showTable('timelines')}>Timelines</button>
            <button onClick={() => showTable('implementation')}>Implementation</button>
            <button onClick={() => showTable('finances')}>Finances</button>
            <button onClick={() => showTable('locations')}>Locations</button>
          </section>
          <section>
            <h3>Tracking data</h3>
            <button onClick={() => showTable('tracking logs')}>Logs</button>
          </section>
          <section>
            <h3>Admin data</h3>
            <button onClick={() => showTable('admin')}>Administrators</button>
          </section>
          <div className='admin_view__add_project flex' onClick={() => setProjectDetailsPanelStatus(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
            <span>New project</span>
          </div>
        </menu>
        <div className='admin_view__content'>
          <AdminTable props={props} />
          <ProjectDetailsPanel props={props} />
          <UpdateProjectPanel props={props} />
        </div>
      </div>
      <DeleteProjectModal props={props} />
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

export const projectTemplate = {
  recordIndex: '',
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