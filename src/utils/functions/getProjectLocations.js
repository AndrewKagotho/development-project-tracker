import axios from 'axios'

let getProjectLocationsScript = 'http://localhost/development-project-tracker/src/utils/php/select/getProjectLocations.php'

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