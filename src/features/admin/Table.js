const Table = ({props, value}) => {

  const {tableInFocus} = value
  let tableRows, tableHead

  if(tableInFocus === 'Projects') {
    tableHead = (
      <tr>
        <th>Project ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    )
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index}>
          <td>{props.projectID[index]}</td>
          <td>{props.projectName[index]}</td>
          <td>{props.description[index]}</td>
          <td>{props.status[index]}</td>
        </tr>
      )
    }
  )}

  else if(tableInFocus === 'Timelines') {
    tableHead = (
      <tr>
        <th>Approval date</th>
        <th>Start date</th>
        <th>End date</th>
        <th>Duration</th>
      </tr>
    )
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index}>
          <td>{props.approvalDate[index]}</td>
          <td>{props.startDate[index]}</td>
          <td>{props.endDate[index]}</td>
          <td>{props.duration[index]}</td>
        </tr>
      )
    }
  )}

  else if(tableInFocus === 'Implementation') {
    tableHead = (
      <tr>
        <th>Sector</th>
        <th>Ministry</th>
        <th>Implementing agency</th>
        <th>Contractor</th>
        <th>Contacts</th>
        <th>Priority</th>
      </tr>
    )
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index}>
          <td>{props.sector[index]}</td>
          <td>{props.ministry[index]}</td>
          <td>{props.agency[index]}</td>
          <td>{props.contractor[index]}</td>
          <td>{props.contacts[index]}</td>
          <td>{props.priority[index]}</td>
        </tr>
      )
    }
  )}

  else if(tableInFocus === 'Financials') {
    tableHead = (
      <tr>
        <th>Estimated cost</th>
        <th>Budget</th>
        <th>Financial year</th>
        <th>Funding source</th>
      </tr>
    )
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index}>
          <td>{props.estimatedCost[index]}</td>
          <td>{props.budget[index]}</td>
          <td>{props.financialYear[index]}</td>
          <td>{props.fundingSource[index]}</td>
        </tr>
      )
    }
  )}

  else if(tableInFocus === 'Location') {
    tableHead = (
      <tr>
        <th>Sub-county</th>
        <th>Constituency</th>
        <th>Ward</th>
      </tr>
    )
    tableRows = props.projectID.map((item, index) => {
      return (
        <tr key={index}>
          <td>{props.subCounty[index]}</td>
          <td>{props.constituency[index]}</td>
          <td>{props.ward[index]}</td>
        </tr>
      )
    }
  )}

  // <td>{index+1}. {props.projectName[index]}</td>

  return (
    <section className='page_section'>
      <h2>Viewing: {tableInFocus}</h2>
      <div className='table_container'>
        <table>
          <thead>
            {tableHead}
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Table