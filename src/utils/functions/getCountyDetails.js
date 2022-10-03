import axios from 'axios'

let getCountiesScript = 'http://localhost/development-project-tracker/src/utils/php/getCounties.php'

export const getCountyDetails = (props) => {
  props.resetCountiesDetails()
  axios.get(getCountiesScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addCountyDetails(
        resArray[recordIndex].countyNo,
        resArray[recordIndex].name,
        resArray[recordIndex].governor,
        resArray[recordIndex].senator
      )
      recordIndex++
    }
  })
}