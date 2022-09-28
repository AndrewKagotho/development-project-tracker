import React from 'react'
import { connect } from 'react-redux'
import Counties from '../components/counties'
import CountiesList from '../features/CountiesList'

const CountiesView = (props) => {

  const [selectedCounty, setSelectedCounty] = React.useState(0)
  const value = {selectedCounty, setSelectedCounty}

  return (
    <section className='view_content'>
      <h2>Map of counties: <em>(click on any card to view project details)</em></h2>
      <div className='flex'>
        <SelectedContext.Provider value={value}>
          <Counties />
          <CountiesList props={props} />
        </SelectedContext.Provider>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    countyNo: state.counties.number,
    countyName: state.counties.name
  }
}

export default connect(mapStateToProps)(CountiesView)

export const SelectedContext = React.createContext({
  selectedCounty: 0,
  setSelectedCounty: () => {}
}) 