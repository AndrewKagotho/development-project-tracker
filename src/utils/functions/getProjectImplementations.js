import axios from 'axios'

let getProjectImplementationsScript = 'http://localhost/development-project-tracker/src/utils/php/select/getProjectImplementations.php'

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