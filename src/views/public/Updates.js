import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/Action'

const Updates = (props) => {

  let currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth()+1
  let date = currentDate.getDate()
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()

  if(month < 10) month = '0' + month
  if(hours < 10) hours = '0' + hours
  if(minutes < 10) minutes = '0' + minutes

  // eslint-disable-next-line
  const logList = props.projectID.map((item, index) => {
    if(props.logAction[index] === 'update')
      return (
        <li className='card card_sm' key={index}>
          <span><em>Project ID: {item}</em></span>
          <span>Date: {props.logDate[index]}</span>
          <span>Project {props.field[index].replaceAll('"', '')} changed from <em>{props.valueFrom[index]}</em> to <em>{props.valueTo[index]}</em></span>
        </li>
        )
    else if(props.logAction[index] === 'create')
      return (
        <li className='card card_sm' key={index}>
          <span><em>Project ID: {item}</em></span>
          <span>Date: {props.logDate[index]}</span>
          <span>Project <em>created</em>.</span>
        </li>
      )
  })

  return (
    <>
      <section className='page_section'>
        <h2>Project updates</h2>
        <p>View changes to tracked projects here. Last updated at {hours}:{minutes}, {date}/{month}/{year}</p>
      </section>
      <ul className='updates flex'>{logList}</ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    logDate: state.tracking.date,
    projectID: state.tracking.projectID,
    field: state.tracking.field,
    logAction: state.tracking.action,
    valueFrom: state.tracking.valueFrom,
    valueTo: state.tracking.valueTo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Updates)