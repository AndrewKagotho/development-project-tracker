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

  const [projectDetailsPanel, setProjectDetailsPanelStatus] = React.useState(false)
  const projectDetailsPanelState = {projectDetailsPanel, setProjectDetailsPanelStatus}

  const value = {tableFocus, projectDetailsPanelState}

  
  return (
    <>
    <div className='admin_view'>
      <menu className='flex'>
        <section>
          <h3>County data</h3>
          <button onClick={() => setTableInFocus('Counties')}>Counties</button>
        </section>
        <section>
          <h3>Project data</h3>
          <button onClick={() => setTableInFocus('Projects')}>Projects</button>
          <button onClick={() => setTableInFocus('Timelines')}>Timelines</button>
          <button onClick={() => setTableInFocus('Implementation')}>Implementation</button>
          <button onClick={() => setTableInFocus('Financials')}>Financials</button>
          <button onClick={() => setTableInFocus('Location')}>Location</button>
        </section>
        <section>
          <h3>Admin data</h3>
          <button>Administrators</button>
        </section>
        <button onClick={() => setProjectDetailsPanelStatus(true)}>New project</button>
      </menu>
      <div>
        <DashboardContext.Provider value={value}>
          <AdminTable props={props} />
          <ProjectDetailsPanel props={props} />
        </DashboardContext.Provider>
      </div>
    </div>
    </>
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
    contacts: state.implementation.contacts,
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