import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/Action'
import Map from '../../features/counties/Map'
import CountiesList from '../../features/counties/Names'
import Stats from '../../features/counties/Stats'
import Modal from '../../features/counties/Modal'
import Footer from '../../layout/Footer'

export const CountyContext = React.createContext()

const Counties = (props) => {

  const [countyInFocus, setCountyInFocus] = React.useState({ name: '', number: 0 })
  const countyFocus = {countyInFocus, setCountyInFocus}

  const [openCountyModal, setCountyModalState] = React.useState(false)
  const countyModalState = {openCountyModal, setCountyModalState}

  const [projectDetailsPanel, setProjectDetailsPanelStatus] = React.useState(false)
  const projectDetailsPanelState = {projectDetailsPanel, setProjectDetailsPanelStatus}

  const value = {countyFocus, countyModalState, projectDetailsPanelState}

  return (
    <>
      <section className='page_section'>
        <h2>County Projects</h2>
        <p>Projects by county. Click on any card to view project summaries  in that county, and <em>[View projects]</em> to see all tracked projects.</p>
      </section>
      <CountyContext.Provider value={value}>
        <div className='counties flex'>
          <Map />
          <CountiesList props={props} />
        </div>
        <Stats />
        <Modal props={props} />
      </CountyContext.Provider>
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Counties)