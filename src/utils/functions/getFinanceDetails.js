import axios from 'axios'

let getFinancesScript = 'http://localhost/development-project-tracker/src/utils/php/getFinances.php'

export const getFinanceDetails = (props) => {
  props.resetFinanceDetails()
  axios.get(getFinancesScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addFinanceDetails(
        resArray[recordIndex]['estimated cost'],
        resArray[recordIndex].budget,
        resArray[recordIndex]['financial year'],
        resArray[recordIndex]['funding source']
      )
      recordIndex++
    }
  })
}