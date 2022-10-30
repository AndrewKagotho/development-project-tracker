import axios from 'axios'

let getProjectFinancesScript = 'http://localhost/development-project-tracker/src/utils/php/select/getProjectFinances.php'

export const getProjectFinances = (props) => {
  props.resetProjectFinances()
  axios.get(getProjectFinancesScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectFinances(
        resArray[recordIndex].projectID,
        resArray[recordIndex]['estimated cost'],
        resArray[recordIndex].budget,
        resArray[recordIndex]['financial year'],
        resArray[recordIndex]['funding source']
      )
      recordIndex++
    }
  })
}