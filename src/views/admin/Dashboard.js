import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/Action'
import { getCountyDetails } from '../../utils/functions/getCountyDetails'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getTimelineDetails } from '../../utils/functions/getTimelineDetails'
import { getImplementationDetails } from '../../utils/functions/getImplementationDetails'
import { getFinanceDetails } from '../../utils/functions/getFinanceDetails'
import { getLocationDetails } from '../../utils/functions/getLocationDetails'
import AdminTable from '../../features/admin/AdminTable'
import ProjectDetailsPanel from '../../layout/admin/ProjectDetailsPanel'
import UpdateProjectPanel from '../../layout/admin/UpdateProjectPanel'
import DeleteProjectModal from '../../features/admin/DeleteProjectModal'
import InfoModal from '../../features/admin/InfoModal'

export const DashboardContext = React.createContext()

const Dashboard = (props) => {

  React.useEffect(() => {
    getCountyDetails(props)
    getProjectDetails(props)
    getTimelineDetails(props)
    getImplementationDetails(props)
    getFinanceDetails(props)
    getLocationDetails(props)
    // eslint-disable-next-line
  }, [])

  const [tableInFocus, setTableInFocus] = React.useState('Counties')
  const tableFocus = {tableInFocus, setTableInFocus}

  const [recordInFocus, setRecordInFocus] = React.useState(projectTemplate)
  const recordFocus = {recordInFocus, setRecordInFocus}

  const [projectDetailsPanel, setProjectDetailsPanelStatus] = React.useState(false)
  const projectDetailsPanelState = {projectDetailsPanel, setProjectDetailsPanelStatus}

  const [updateProjectPanel, setUpdateProjectPanelStatus] = React.useState(false)
  const updateProjectPanelState = {updateProjectPanel, setUpdateProjectPanelStatus}

  const [deleteProjectModal, setDeleteProjectModalStatus] = React.useState(false)
  const deleteProjectModalState = {deleteProjectModal, setDeleteProjectModalStatus}

  const [infoModalProps, setInfoModalProps] = React.useState({state: false, text:''})
  const infoModal = {infoModalProps, setInfoModalProps}

  const value = {
    tableFocus,
    recordFocus,
    projectDetailsPanelState,
    updateProjectPanelState,
    deleteProjectModalState,
    infoModal
  }

  return (
    <DashboardContext.Provider value={value}>
      <div className='admin_view'>
        <menu className='flex'>
          <section>
            <h3>County data</h3>
            <button onClick={() => setTableInFocus('Counties')}>Counties</button>
          </section>
          <section>
            <h3>Project data</h3>
            <button onClick={() => setTableInFocus('projects')}>Projects</button>
            <button onClick={() => setTableInFocus('timelines')}>Timelines</button>
            <button onClick={() => setTableInFocus('implementation')}>Implementation</button>
            <button onClick={() => setTableInFocus('finances')}>Finances</button>
            <button onClick={() => setTableInFocus('locations')}>Locations</button>
          </section>
          <section>
            <h3>Admin data</h3>
            <button>Administrators</button>
          </section>
          <button onClick={() => setProjectDetailsPanelStatus(true)}>New project</button>
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
    
    projectID: state.projects.projectID,
    projectName: state.projects.name,
    description: state.projects.description,
    status: state.projects.status,

    approvalDate: state.timelines.approvalDate,
    startDate: state.timelines.startDate,
    endDate: state.timelines.endDate,
    duration: state.timelines.duration,

    sector: state.implementation.sector,
    ministry: state.implementation.ministry,
    agency: state.implementation.agency,
    contractor: state.implementation.contractor,
    priority: state.implementation.priority,

    estimatedCost: state.finances.estimatedCost,
    budget: state.finances.budget,
    financialYear: state.finances.financialYear,
    fundingSource: state.finances.fundingSource,

    subCounty: state.locations.subCounty,
    constituency: state.locations.constituency,
    ward: state.locations.ward
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export const projectTemplate = {
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