import Counties from '../components/counties'

const Map = () => {
  return (
    <div className='counties flex'>
      <section>
        <h2>Map of counties</h2>
        <Counties />
      </section>
      <div className='counties__list'>
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
        <div className='card'>
          Five
        </div>
        <div className='card'>
          Six
        </div>
      </div>
    </div>
  )
}

export default Map