const StatsView = () => {
  return (
    <section className='view_content'>
      <h2>County Project Statistics</h2>
      <div className='view_content__cards flex'>
        <div className='card'>
          All projects
        </div>
        <div className='card'>
          Ongoing
        </div>
        <div className='card'>
          Scheduled
        </div>
        <div className='card'>
          Delayed
        </div>
      </div>
    </section>
  )
}

export default StatsView