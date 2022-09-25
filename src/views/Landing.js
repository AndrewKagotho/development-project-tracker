import Img2 from '../assets/images/image2.jpg'

const Landing = () => {
  return (
    <>
      <div className='intro flex'>
        <img src={Img2} alt='' />
        <section>
          <h2>What is the County Development Project Tracker?</h2>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </section>
      </div>
      <div className='sdg flex'>
        <section className='card flex'>
          <div>
            <h3>Reduce Inequalities</h3>
            <span>10</span>
            <p>Reduce inequality within and among countries.</p>
          </div>
          <a href='https://sdgs.un.org/goals/goal10'>View</a>
        </section>
        <section className='card flex'>
          <div>
            <h3>Sustainable Cities and Communities</h3>
            <span>11</span>
            <p>Make cities and human settlements inclusive, safe, resilient and sustainable.</p>
          </div>
          <a href='https://sdgs.un.org/goals/goal11'>View</a>
        </section>
      </div>
    </>
  )
}

export default Landing