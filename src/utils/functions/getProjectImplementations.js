import axios from 'axios'
import { url } from './getCounties'

let getProjectImplementationsScript = `${url}/api/projects/implementations`

export const getProjectImplementations = (props) => {
  props.resetProjectImplementations()
  axios.get(getProjectImplementationsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectImplementations(
        resArray[recordIndex].projectID,
        resArray[recordIndex].sector,
        resArray[recordIndex].ministry,
        resArray[recordIndex]['implementing agency'],
        resArray[recordIndex].contractor,
        resArray[recordIndex].priority
      )
      recordIndex++
    }
  },((error) => console.log(error)))
}