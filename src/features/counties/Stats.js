const Stats = ({props}) => {

  const nationalCompleted = props.status.filter((x, index) => props.status[index] === 'Completed').reduce((acc) => acc + 1, 0)
  const nationalInprogress = props.status.filter((x, index) => props.status[index] === 'In progress').reduce((acc) => acc + 1, 0)
  const nationalApproved = props.status.filter((x, index) => props.status[index] === 'Approved').reduce((acc) => acc + 1, 0)
  const nationalDelayed = props.status.filter((x, index) => props.status[index] === 'Delayed').reduce((acc) => acc + 1, 0)
  const nationalScheduled = props.status.filter((x, index) => props.status[index] === 'Scheduled').reduce((acc) => acc + 1, 0)
  const nationalAllProjects = nationalCompleted + nationalInprogress + nationalApproved + nationalDelayed + nationalScheduled

  return (
    <section className='page_section'>
      <h2>National Statistics</h2>
      <p>A summary of the national project statistics:</p>
      <div className='page_section__stats flex'>
        <div className='card card_md flex'>
          <span>All projects</span>
          <span className='badge'>{nationalAllProjects}</span>
        </div>
        <div className='card card_md flex'>
          <span>Completed</span>
          <span className='badge'>{nationalCompleted}</span>
        </div>
        <div className='card card_md flex'>
          <span>In progress</span>
          <span className='badge'>{nationalInprogress}</span>
        </div>
        <div className='card card_md flex'>
          <span>Approved</span>
          <span className='badge'>{nationalApproved}</span>
        </div>
        <div className='card card_md flex'>
          <span>Delayed</span>
          <span className='badge'>{nationalDelayed}</span>
        </div>
        <div className='card card_md flex'>
          <span>Scheduled</span>
          <span className='badge'>{nationalScheduled}</span>
        </div>
      </div>
    </section>
  )
}

export default Stats