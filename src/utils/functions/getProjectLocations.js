import axios from 'axios'
import { url } from './getCounties'

let getProjectLocationsScript = `${url}/api/projects/locations`

export const getProjectLocations = (props) => {
  props.resetProjectLocations()
  axios.get(getProjectLocationsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectLocations(
        resArray[recordIndex].projectID,
        resArray[recordIndex].countyNo,
        resArray[recordIndex]['sub county'],
        resArray[recordIndex].constituency,
        resArray[recordIndex].ward
      )
      recordIndex++
    }
  },((error) => console.log(error)))
}