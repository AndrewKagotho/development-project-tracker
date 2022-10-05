import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../store/Action'
import Footer from '../layout/Footer'
import { getCountyDetails } from '../utils/functions/getCountyDetails'
import { getProjectDetails } from '../utils/functions/getProjectDetails'
import { getImplementationDetails } from '../utils/functions/getImplementationDetails'
import { getLocationDetails } from '../utils/functions/getLocationDetails'

const bannerArray = ['http://127.0.0.1:8887/banner.jpg', 'http://127.0.0.1:8887/image3.jpeg']

const Landing = (props) => {

  const bannerRef = React.useRef()

  React.useEffect(() => {
    getCountyDetails(props)
    getProjectDetails(props)
    getImplementationDetails(props)
    getLocationDetails(props)
    // eslint-disable-next-line
  }, [])

  const changeBanner = (arg) => {
    let arrayImage = 0
    arrayImage += arg

    // if(arg === 1) {
      if(arrayImage > bannerArray.length-1)
        arrayImage = 0
      // bannerRef.current.style.backgroundImage = `url(${bannerArray[arrayImage]})`
    // }
    // else if(arg === -1) {
      if(arrayImage < 0)
        arrayImage = bannerArray.length-1
      bannerRef.current.style.backgroundImage = `url(${bannerArray[arrayImage]})`
    // }
  }

  return (
    <>
      <div className='banner' ref={bannerRef}>
        <section>
          <h2>Project Management, Redefined.</h2>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </section>
        <svg className='banner__next_icon' onClick={() => changeBanner(-1)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/></svg>
        <svg className='banner__prev_icon' onClick={() => changeBanner(1)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/></svg>
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
            <a className='card_a' target='_blank' rel="noreferrer" href='https://sdgs.un.org/goals/goal10'>View details</a>
          </section>
          <hr/>
          <section className='card card_md flex'>
            <div>
              <h3>Sustainable Cities and Communities</h3>
              <span className='card_md_number_effect'>11</span>
              <p>Make cities and human settlements inclusive, safe, resilient and sustainable.</p>
            </div>
            <a className='card_a' target='_blank' rel="noreferrer" href='https://sdgs.un.org/goals/goal11'>View details</a>
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