import axios from 'axios'
import { url } from './getCounties'

let getTrackLogsScript = `${url}/api/updates`

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
  },((error) => console.log(error)))
}