import axios from 'axios'

let getProjectTimelinesScript = 'http://localhost:3001/api/projects/timelines'

export const getProjectTimelines = (props) => {
  props.resetProjectTimelines()
  axios.get(getProjectTimelinesScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectTimelines(
        resArray[recordIndex].projectID,
        resArray[recordIndex]['approval date'],
        resArray[recordIndex]['start date'],
        resArray[recordIndex]['end date'],
        resArray[recordIndex].duration
      )
      recordIndex++
    }
  },((error) => console.log(error)))
}