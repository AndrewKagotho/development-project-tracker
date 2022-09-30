import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../store/Action'
import Footer from '../layout/Footer'
import { getCounties } from '../utils/functions/getCounties'

const Landing = (props) => {

  React.useEffect(() => {
    getCounties(props)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='banner'>
        <section>
          <h2>Project Management, Redefined.</h2>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </section>
      </div>
      <section className='landing_section landing_section_lg'>
        <h2>County Project Statistics</h2>
        <p>A summary of the national project statistics:</p>
        <div className='landing_section__cards flex'>
          <div className='card card_md flex'>
            <span>All projects</span>
            <span className='badge'>#</span>
          </div>
          <div className='card card_md flex'>
            <span>Ongoing</span>
            <span className='badge'>#</span>
          </div>
          <div className='card card_md flex'>
            <span>Scheduled</span>
            <span className='badge'>#</span>
          </div>
          <div className='card card_md flex'>
            <span>Delayed</span>
            <span className='badge'>#</span>
          </div>
        </div>
      </section>
      <section className='landing_section'>
        <h2>United Nations Sustainable Development Goals</h2>
        <p>This system seeks to contribute to the 17 outlined global goals in the achievement of peace and prosperity for the people and the planet. It does this through these goals:</p>
        <div className='sdg__cards flex'>
          <section className='card card_md flex'>
            <div>
              <h3>Reduce Inequalities</h3>
              <span className='card_md_number_effect'>10</span>
              <p>Reduce inequality within and among countries.</p>
            </div>
            <a className='card__a' target='_blank' rel="noreferrer" href='https://sdgs.un.org/goals/goal10'>View details</a>
          </section>
          <hr/>
          <section className='card card_md flex'>
            <div>
              <h3>Sustainable Cities and Communities</h3>
              <span className='card_md_number_effect'>11</span>
              <p>Make cities and human settlements inclusive, safe, resilient and sustainable.</p>
            </div>
            <a className='card__a' target='_blank' rel="noreferrer" href='https://sdgs.un.org/goals/goal11'>View details</a>
          </section>
        </div>
      </section>
      <section className='landing_section'>
        <h2>What This Platform Can Do</h2>
        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </section>
      <Footer />
    </>
  )
}

export default connect(null, mapDispatchToProps)(Landing)