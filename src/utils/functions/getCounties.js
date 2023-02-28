import axios from 'axios'

export const url = 'https://dev-project-tracker-ak.herokuapp.com'
// export const url = 'http://localhost:3001'

let getCountiesScript = `${url}/api/counties`

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
  },((error) => console.log(error)))
}