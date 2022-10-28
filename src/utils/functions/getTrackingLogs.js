import axios from 'axios'

let getTrackLogsScript = 'http://localhost/development-project-tracker/src/utils/php/getTrackLogs.php'

export const getTrackingLogs = (props) => {
  props.resetTrackingLogs()
  axios.get(getTrackLogsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addTrackingLogs(
        resArray[recordIndex].date,
        resArray[recordIndex].projectID,
        resArray[recordIndex].field,
        resArray[recordIndex].action,
        resArray[recordIndex]['value from'],
        resArray[recordIndex]['value to']
      )
      recordIndex++
    }
  })
}