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
  
  const resultsRef = React.useRef()

  const [countyInFocus, setCountyInFocus] = React.useState({name: '', number: -1})
  const countyFocus = {countyInFocus, setCountyInFocus}

  const [projectInFocus, setProjectInFocus] = React.useState('')
  const projectFocus = {projectInFocus, setProjectInFocus}

  const [openCountyModal, setCountyModalState] = React.useState(false)
  const countyModalState = {openCountyModal, setCountyModalState}

  const [projectDetailsPanel, setProjectDetailsPanelStatus] = React.useState(false)
  const projectDetailsPanelState = {projectDetailsPanel, setProjectDetailsPanelStatus}

  const [searchContent, setSearchContent] = React.useState({selectedInput: '', inputValue: ''})
  const searchState = {searchContent, setSearchContent}

  const value = {countyFocus, projectFocus, countyModalState, projectDetailsPanelState, searchState, resultsRef}

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
        <Stats props={props} />
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
    
    projectID: state.projects.details.projectID,
    projectName: state.projects.details.name,
    description: state.projects.details.description,
    status: state.projects.details.status,

    approvalDate: state.projects.timelines.approvalDate,
    startDate: state.projects.timelines.startDate,
    endDate: state.projects.timelines.endDate,
    duration: state.projects.timelines.duration,

    sector: state.projects.implementation.sector,
    ministry: state.projects.implementation.ministry,
    agency: state.projects.implementation.agency,
    contractor: state.projects.implementation.contractor,
    contacts: state.projects.implementation.contacts,
    priority: state.projects.implementation.priority,

    estimatedCost: state.projects.finances.estimatedCost,
    budget: state.projects.finances.budget,
    financialYear: state.projects.finances.financialYear,
    fundingSource: state.projects.finances.fundingSource,

    locCountyNo: state.projects.locations.countyNo,
    subCounty: state.projects.locations.subCounty,
    constituency: state.projects.locations.constituency,
    ward: state.projects.locations.ward
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counties)