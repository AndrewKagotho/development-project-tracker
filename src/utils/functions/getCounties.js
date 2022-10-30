import axios from 'axios'

let getCountiesScript = 'http://localhost/development-project-tracker/src/utils/php/select/getCounties.php'

export const getCounties = (props) => {
  props.resetCounties()
  axios.get(getCountiesScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addCounties(
        resArray[recordIndex].countyNo,
        resArray[recordIndex].name,
        resArray[recordIndex].governor,
        resArray[recordIndex].senator
      )
      recordIndex++
    }
  })
}