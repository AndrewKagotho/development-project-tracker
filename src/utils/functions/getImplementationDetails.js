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
        resArray[recordIndex].budget,
        resArray[recordIndex]['financial year'],
        resArray[recordIndex]['source of funds'],
        resArray[recordIndex].status
      )
      recordIndex++
    }
  })
}