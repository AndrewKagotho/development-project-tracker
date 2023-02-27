import axios from 'axios'

let getProjectDetailsScript = 'https://dev-project-tracker-ak.herokuapp.com/api/projects'

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
  },((error) => console.log(error)))
}