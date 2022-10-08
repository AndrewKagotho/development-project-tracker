import axios from 'axios'

let getTimelinesScript = 'http://localhost/development-project-tracker/src/utils/php/getTimelines.php'

export const getTimelineDetails = (props) => {
  props.resetTimelineDetails()
  axios.get(getTimelinesScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addTimelineDetails(
        resArray[recordIndex]['approval date'],
        resArray[recordIndex]['start date'],
        resArray[recordIndex]['end date'],
        resArray[recordIndex].duration
      )
      recordIndex++
    }
  })
}