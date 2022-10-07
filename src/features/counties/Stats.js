const Stats = () => {
  return (
    <section className='page_section page_section_lg'>
      <h2>National Statistics</h2>
      <p>A summary of the national project statistics:</p>
      <div className='page_section__stats flex'>
        <div className='card card_lg flex'>
          <span>All projects</span>
          <span className='badge'>#</span>
        </div>
        <div className='card card_lg flex'>
          <span>Complete</span>
          <span className='badge'>#</span>
        </div>
        <div className='card card_lg flex'>
          <span>Ongoing</span>
          <span className='badge'>#</span>
        </div>
        <div className='card card_lg flex'>
          <span>Scheduled</span>
          <span className='badge'>#</span>
        </div>
        <div className='card card_lg flex'>
          <span>Delayed</span>
          <span className='badge'>#</span>
        </div>
      </div>
    </section>
  )
}

export default Stats