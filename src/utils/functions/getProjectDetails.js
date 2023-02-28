import axios from 'axios'
import { url } from './getCounties'

let getProjectDetailsScript = `${url}/api/projects`

export const getProjectDetails = (props) => {
  props.resetProjectDetails()
  axios.get(getProjectDetailsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectDetails(
        resArray[recordIndex].projectID,
        resArray[recordIndex].name,
        resArray[recordIndex].description,
        resArray[recordIndex].status
      )
      recordIndex++
    }
  },((error) => console.log(error)))
}