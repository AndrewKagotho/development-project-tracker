import React from 'react'
import { connect } from 'react-redux'
// import { getProjectDetails } from '../utils/functions/getProjectDetails'
import { mapDispatchToProps } from '../store/Action'
import CountiesList from '../features/CountiesList'
import CountiesMap from '../features/CountiesMap'
import ProjectModal from '../features/ProjectModal'

export const AppContext = React.createContext()

const CountiesView = (props) => {

  // React.useEffect(() => {getProjectDetails(props)}, [])

  const [countyInFocus, setCountyInFocus] = React.useState({ name: '', number: 0 })
  const countyFocus = {countyInFocus, setCountyInFocus}

  const [openModal, setModalToOpen] = React.useState(false)
  const modalState = {openModal, setModalToOpen}

  const value = {countyFocus, modalState}

  return (
    <AppContext.Provider value={value}>
      <section className='view_content'>
        <h2>Map of counties: <em>(click on any card to view project details)</em></h2>
        <div className='flex'>
            <CountiesMap />
            <CountiesList props={props} />
        </div>
      </section>
      <ProjectModal props={props} />
    </AppContext.Provider>
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