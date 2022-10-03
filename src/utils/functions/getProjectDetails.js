import axios from 'axios'

let getProjectsScript = 'http://localhost/development-project-tracker/src/utils/php/getProjects.php'

export const getProjectDetails = (props) => {
  props.resetProjectDetails()
  axios.get(getProjectsScript)
  .then((response) => {
    let resArray = response.data
    let recordIndex = 0
    while(recordIndex < resArray.length) {
      props.addProjectDetails(
        resArray[recordIndex].projectID,
        resArray[recordIndex].name,
        resArray[recordIndex].description,
        resArray[recordIndex].department
      )
      recordIndex++
    }
  })
}