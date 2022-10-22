const projectStatusArray = ['Completed', 'In progress', 'Approved', 'Scheduled']
let statusTotalArray = []

const Stats = ({props}) => {
  let nationalAllProjects = 0

  for(let i=0; i<projectStatusArray.length; i++) {
    statusTotalArray[i] = props.status
    .filter((item, index) => props.status[index] === projectStatusArray[i])
    .reduce((acc) => acc + 1, 0)
  }
  statusTotalArray.forEach((x) => nationalAllProjects += x)

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
          <span className='badge'>{statusTotalArray[0]}</span>
        </div>
        <div className='card card_md flex'>
          <span>In progress</span>
          <span className='badge'>{statusTotalArray[1]}</span>
        </div>
        <div className='card card_md flex'>
          <span>Approved</span>
          <span className='badge'>{statusTotalArray[2]}</span>
        </div>
        <div className='card card_md flex'>
          <span>Scheduled</span>
          <span className='badge'>{statusTotalArray[3]}</span>
        </div>
      </div>
    </section>
  )
}

export default Stats