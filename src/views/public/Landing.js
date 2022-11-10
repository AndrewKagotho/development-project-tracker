import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/Action'
import { getCounties } from '../../utils/functions/getCounties'
import { getProjectDetails } from '../../utils/functions/getProjectDetails'
import { getProjectTimelines } from '../../utils/functions/getProjectTimelines'
import { getProjectImplementations } from '../../utils/functions/getProjectImplementations'
import { getProjectFinances } from '../../utils/functions/getProjectFinances'
import { getProjectLocations } from '../../utils/functions/getProjectLocations'
import { getTrackingLogs } from '../../utils/functions/getTrackingLogs'
import LoginPanel from '../../layout/public/LoginPanel'
import Footer from '../../layout/Footer'

const bannerArray = ['http://127.0.0.1:8887/banner.jpg', 'http://127.0.0.1:8887/image3.jpeg']
let imageOnDisplay = 0

setTimeout(() => console.log('active'), 2000)

const Landing = (props) => {

  React.useEffect(() => {
    getCounties(props)
    getProjectDetails(props)
    getProjectTimelines(props)
    getProjectImplementations(props)
    getProjectFinances(props)
    getProjectLocations(props)
    getTrackingLogs(props)

    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
    }, 1000)

    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [])

  const bannerRef = React.useRef()

  const changeBanner = (arg) => {
    imageOnDisplay += arg

    if(imageOnDisplay > bannerArray.length-1)
      imageOnDisplay = 0
      
    if(imageOnDisplay < 0)
      imageOnDisplay = bannerArray.length-1

    bannerRef.current.style.backgroundImage = `url(${bannerArray[imageOnDisplay]})`
  }

  return (
    <>
      <div className='banner' ref={bannerRef}>
        <section>
          <h2>Project Tracking, Redefined.</h2>
          <p>The County Development Project Tracker is an online system that facilitates the measurement of project metrics, keeping records of progress for consumption by stakeholders.</p>
        </section>
        <svg className='banner__next_icon' onClick={() => changeBanner(1)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/></svg>
        <svg className='banner__prev_icon' onClick={() => changeBanner(-1)} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"/></svg>
      </div>
      <section className='page_section page_section_sm'>
        <h2>Explore the feature-packed online platform!</h2>
        <p>The CDPT is a tool that facilitates the logging of county projects - past, present and future - and tracks these projects for transparency and accountability. It seeks to address the static nature of most project tracking systems, offering itself as an easy-to-use platform that prioritizes public engagement and scrutiny.</p>
        <span>Features included:</span>
        <div className='page_section__features flex'>
          <span className='card card_sm'>County insights</span>
          <span className='card card_sm'>Active updates</span>
          <span className='card card_sm'>Report generation</span>
          <span className='card card_sm'>DB management</span>
        </div>
      </section>
      <section className='page_section page_section_sm'>
        <h2>United Nations Sustainable Development Goals</h2>
        <p>The CPDT seeks to contribute to the 17 outlined global goals through SDGs 10 & 11, in the achievement of peace and prosperity for the people and the planet. For more information, follow the links provided.</p>
        <div className='sdg__cards flex'>
          <section className='card card_lg flex'>
            <div>
              <h3>Reduce Inequalities</h3>
              <span className='card_number_effect_lg'>10</span>
              <p>Reduce inequality within and among countries.</p>
            </div>
            <a className='card_a' target='_blank' rel="noreferrer" href='https://sdgs.un.org/goals/goal10'>More information</a>
          </section>
          <hr/>
          <section className='card card_lg flex'>
            <div>
              <h3>Sustainable Cities and Communities</h3>
              <span className='card_number_effect_lg'>11</span>
              <p>Make cities and human settlements inclusive, safe, resilient and sustainable.</p>
            </div>
            <a className='card_a' target='_blank' rel="noreferrer" href='https://sdgs.un.org/goals/goal11'>More information</a>
          </section>
        </div>
      </section>
      <LoginPanel />
      <Footer />
    </>
  )
}

export default connect(null, mapDispatchToProps)(Landing)