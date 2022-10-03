const addCountyDetails = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_COUNTY_DETAILS',
    number: x1,
    name: x2,
    governor: x3,
    senator: x4
  }
}

const addProjectDetails = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_PROJECT_DETAILS',
    projectID: x1,
    name: x2,
    description: x3,
    department: x4
  }
}

const addImplementationDetails = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_IMPLEMENTATION_DETAILS',
    budget: x1,
    financialYear: x2,
    fundSource: x3,
    status: x4
  }
}

const addLocationDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'ADD_LOCATION_DETAILS',
    subCounty: x1,
    ward: x2,
    subWard: x3,
    location: x4,
    subLocation: x5
  }
}

const resetCountiesDetails = () => { return { type: 'RESET_COUNTY_DETAILS' } }

const resetProjectDetails = () => { return { type: 'RESET_PROJECT_DETAILS' } }

const resetImplementationDetails = () => { return { type: 'RESET_IMPLEMENTATION_DETAILS' } } 

const resetLocationDetails = () => { return { type: 'RESET_LOCATION_DETAILS' } }

export const mapDispatchToProps = {
  addCountyDetails,
  addProjectDetails,
  addImplementationDetails,
  addLocationDetails,
  resetCountiesDetails,
  resetProjectDetails,
  resetImplementationDetails,
  resetLocationDetails
}