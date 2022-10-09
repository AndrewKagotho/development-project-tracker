import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../store/Action'
import { getCountyDetails } from '../utils/functions/getCountyDetails'
import { getProjectDetails } from '../utils/functions/getProjectDetails'
import { getTimelineDetails } from '../utils/functions/getTimelineDetails'
import { getImplementationDetails } from '../utils/functions/getImplementationDetails'
import { getFinanceDetails } from '../utils/functions/getFinanceDetails'
import { getLocationDetails } from '../utils/functions/getLocationDetails'
import Table from '../features/admin/Table'

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

  const [tableInFocus, setTableInFocus] = React.useState('')
  const value = {tableInFocus, setTableInFocus}

  return (
    <div className='admin_view'>
      <menu>
        <h3>Tables</h3>
        <button onClick={() => setTableInFocus('Counties')}>Counties</button>
        <button onClick={() => setTableInFocus('Projects')}>Projects</button>
        <button onClick={() => setTableInFocus('Timelines')}>Timelines</button>
        <button onClick={() => setTableInFocus('Implementation')}>Implementation</button>
        <button onClick={() => setTableInFocus('Financials')}>Financials</button>
        <button onClick={() => setTableInFocus('Location')}>Location</button>
      </menu>
      <div>
        <Table props={props} value={value} />
      </div>
    </div>
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