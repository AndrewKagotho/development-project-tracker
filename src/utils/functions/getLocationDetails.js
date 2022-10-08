import axios from 'axios'

let getLocationsScript = 'http://localhost/development-project-tracker/src/utils/php/getLocations.php'

export const getLocationDetails = (props) => {
  props.resetLocationDetails()
  axios.get(getLocationsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addLocationDetails(
        resArray[recordIndex]['sub county'],
        resArray[recordIndex].constituency,
        resArray[recordIndex].ward
      )
      recordIndex++
    }
  })
}