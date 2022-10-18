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
    status: x4
  }
}

const addTimelineDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'ADD_TIMELINE_DETAILS',
    projectID: x1,
    approvalDate: x2,
    startDate: x3,
    endDate: x4,
    duration: x5
  }
}

const addImplementationDetails = (x1,x2,x3,x4,x5,x6,x7) => {
  return {
    type: 'ADD_IMPLEMENTATION_DETAILS',
    projectID: x1,
    sector: x2,
    ministry: x3,
    agency: x4,
    contractor: x5,
    contacts: x6,
    priority: x7
  }
}

const addFinanceDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'ADD_FINANCE_DETAILS',
    projectID: x1,
    estimatedCost: x2,
    budget: x3,
    financialYear: x4,
    fundingSource: x5
  }
}

const addLocationDetails = (x1,x2,x3,x4,x5) => {
  return {
    type: 'ADD_LOCATION_DETAILS',
    projectID: x1,
    countyNo: x2,
    subCounty: x3,
    constituency: x4,
    ward: x5
  }
}

const resetCountyDetails = () => { return { type: 'RESET_COUNTY_DETAILS' } }

const resetProjectDetails = () => { return { type: 'RESET_PROJECT_DETAILS' } }

const resetTimelineDetails = () => { return { type: 'RESET_TIMELINE_DETAILS' } }

const resetImplementationDetails = () => { return { type: 'RESET_IMPLEMENTATION_DETAILS' } }

const resetFinanceDetails = () => { return { type: 'RESET_FINANCE_DETAILS' } }

const resetLocationDetails = () => { return { type: 'RESET_LOCATION_DETAILS' } }

export const mapDispatchToProps = {
  addCountyDetails,
  addProjectDetails,
  addTimelineDetails,
  addImplementationDetails,
  addFinanceDetails,
  addLocationDetails,
  resetCountyDetails,
  resetProjectDetails,
  resetTimelineDetails,
  resetImplementationDetails,
  resetFinanceDetails,
  resetLocationDetails
}