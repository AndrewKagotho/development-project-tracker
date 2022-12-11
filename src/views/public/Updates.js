import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../store/Action'
import { AppContext } from '../../App'
import { getTrackingLogs } from '../../utils/functions/getTrackingLogs'

const Updates = (props) => {

  const {getValue} = React.useContext(AppContext)

  React.useEffect(() => {
    setGet()
    // eslint-disable-next-line
  }, [])

  const setGet = () => {
    if(getValue.getData.getUpdates === false) {
      getTrackingLogs(props)

      getValue.setGetData({...getValue.getData, getUpdates: true})
    }
  }

  const [searchContent, setSearchContent] = React.useState({state: false, selectedInput: 'projectID', inputValue: ''})
  let filterArray, logList

  let currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth()+1
  let date = currentDate.getDate()
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()

  if(month < 10) month = '0' + month
  if(hours < 10) hours = '0' + hours
  if(minutes < 10) minutes = '0' + minutes

  if(searchContent.selectedInput === 'projectID') filterArray = props.projectID
  else if(searchContent.selectedInput === 'logDate') filterArray = props.logDate
  else if(searchContent.selectedInput === 'logAction') filterArray = props.logAction

  logList = props.projectID.map((item, index) => index)
  .filter((index) =>
    filterArray[index].toLowerCase()[searchContent.inputValue.length-1] === searchContent.inputValue.toLowerCase()[searchContent.inputValue.length-1]
    && filterArray[index].toLowerCase()[searchContent.inputValue.length-2] === searchContent.inputValue.toLowerCase()[searchContent.inputValue.length-2]
    && filterArray[index].toLowerCase()[searchContent.inputValue.length-3] === searchContent.inputValue.toLowerCase()[searchContent.inputValue.length-3]
  )
  // eslint-disable-next-line
  .map((index) => {
    if(props.logAction[index] === 'update')
      if(props.valueFrom[index] === '""' || props.valueFrom[index] === '"0"')
        return (
          <li className='card card_sm' key={index}>
            <span><em>Project ID: {props.projectID[index]}</em></span>
            <span>Date: {props.logDate[index]}</span>
            <span>({props.logAction[index].toUpperCase()}) Project {props.field[index].replaceAll('"', '')} added: <em>{props.valueTo[index]}</em></span>
          </li>
        )
      else
        return (
          <li className='card card_sm' key={index}>
            <span><em>Project ID: {props.projectID[index]}</em></span>
            <span>Date: {props.logDate[index]}</span>
            <span>({props.logAction[index].toUpperCase()}) Project {props.field[index].replaceAll('"', '')} changed from <em>{props.valueFrom[index]}</em> to <em>{props.valueTo[index]}</em></span>
          </li>
        ) 
    else if(props.logAction[index] === 'create')
      return (
        <li className='card card_sm' key={index}>
          <span><em>Project ID: {props.projectID[index]}</em></span>
          <span>Date: {props.logDate[index]}</span>
          <span>({props.logAction[index].toUpperCase()}) Project added.</span>
        </li>
      )
    else if(props.logAction[index] === 'delete')
      return (
        <li className='card card_sm' key={index}>
          <span><em>Project ID: {props.projectID[index]}</em></span>
          <span>Date: {props.logDate[index]}</span>
          <span>({props.logAction[index].toUpperCase()}) Project removed.</span>
        </li>
      )
  })

  const handleInputChange = (e) => setSearchContent({...searchContent, state: true, inputValue: e.target.value})
  const handleSelectChange = (e) => setSearchContent({...searchContent, state: true, selectedInput: e.target.value})

  return (
    <>
      <section className='page_section'>
        <h2>Project updates</h2>
        <p>View changes to tracked projects here. Last updated at {hours}:{minutes}, {date}/{month}/{year}</p>
      </section>
      <div className='page_section__input flex'>
        <input type='search' name='inputValue' placeholder='Search:' onChange={handleInputChange} autoComplete='off' />
        <select name='selectedInput' onChange={handleSelectChange} >
          <option value='projectID'>Project ID</option>
          <option value='logDate'>Date</option>
          <option value='logAction'>Action</option>
        </select>
      </div>
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