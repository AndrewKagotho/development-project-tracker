import axios from 'axios'

let getAdminsScript = 'http://localhost/development-project-tracker/src/utils/php/select/getAdmins.php'

export const getAdmins = (props) => {
  props.resetAdmins()
  axios.get(getAdminsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addAdmins(
        resArray[recordIndex].username,
        resArray[recordIndex]['first name'],
        resArray[recordIndex]['last name'],
        resArray[recordIndex].email
      )
      recordIndex++
    }
  })
}