import React from 'react'
import { connect } from 'react-redux'
import CountiesList from '../features/CountiesList'
import CountiesMap from '../features/CountiesMap'
import ProjectModal from '../features/ProjectModal'

export const AppContext = React.createContext()

const CountiesView = (props) => {

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
      <ProjectModal />
    </AppContext.Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    countyNo: state.counties.number,
    countyName: state.counties.name
  }
}

export default connect(mapStateToProps)(CountiesView)