import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../store/Action'
import Map from '../features/counties/Map'
import CountiesList from '../features/counties/CountiesList'
import Stats from '../features/counties/Stats'
import ProjectModal from '../features/ProjectModal'

export const CountyContext = React.createContext()

const CountiesView = (props) => {

  const [countyInFocus, setCountyInFocus] = React.useState({ name: '', number: 0 })
  const countyFocus = {countyInFocus, setCountyInFocus}

  const [openCountyModal, setCountyModalState] = React.useState(false)
  const countyModalState = {openCountyModal, setCountyModalState}

  const value = {countyFocus, countyModalState}

  return (
    <>
    <section className='page_section'>
      <h2>County Projects</h2>
      <p>Projects by county. Click on any card to view county details. Select <b>View projects</b> to see projects in that county.</p>
    </section>
    <CountyContext.Provider value={value}>
      <div className='counties flex'>
        <Map />
        <CountiesList props={props} />
      </div>
      <Stats />
      <ProjectModal props={props} />
    </CountyContext.Provider>
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
    department: state.projects.department,
    budget: state.implementation.budget,
    financialYear: state.implementation.financialYear,
    fundsSource: state.implementation.fundsSource,
    status: state.implementation.status,
    subCounty: state.location.subCounty,
    ward: state.location.ward,
    subWard: state.location.subWard,
    location: state.location.location,
    subLocation: state.location.subLocation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountiesView)