import axios from 'axios'

let getProjectDetailsScript = 'http://localhost/development-project-tracker/src/utils/php/select/getProjectDetails.php'

export const getProjectDetails = (props) => {
  props.resetProjectDetails()
  axios.get(getProjectDetailsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectDetails(
        resArray[recordIndex].projectID,
        resArray[recordIndex].name,
        resArray[recordIndex].description,
        resArray[recordIndex].status
      )
      recordIndex++
    }
  })
}