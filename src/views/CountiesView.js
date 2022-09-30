import React from 'react'
import { connect } from 'react-redux'
import { CountyInFocus } from '../utils/context/countyInFocus'
import CountiesList from '../features/CountiesList'
import CountiesMap from '../features/CountiesMap'
import ProjectModal from '../features/ProjectModal'

const CountiesView = (props) => {

  const [countyInFocus, setCountyInFocus] = React.useState({ name: '', number: 0 })
  const county = {countyInFocus, setCountyInFocus}

  return (
    <>
      <section className='view_content'>
        <h2>Map of counties: <em>(click on any card to view project details)</em></h2>
        <div className='flex'>
          <CountyInFocus.Provider value={county}>
            <CountiesMap />
            <CountiesList props={props} />
          </CountyInFocus.Provider>
        </div>
      </section>
      <ProjectModal />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    countyNo: state.counties.number,
    countyName: state.counties.name
  }
}

export default connect(mapStateToProps)(CountiesView)