import axios from 'axios'

let getImplementationsScript = 'http://localhost/development-project-tracker/src/utils/php/getImplementations.php'

export const getImplementationDetails = (props) => {
  props.resetImplementationDetails()
  axios.get(getImplementationsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addImplementationDetails(
        resArray[recordIndex].projectID,
        resArray[recordIndex].sector,
        resArray[recordIndex].ministry,
        resArray[recordIndex]['implementing agency'],
        resArray[recordIndex].contractor,
        resArray[recordIndex].contacts,
        resArray[recordIndex].priority
      )
      recordIndex++
    }
  })
}