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

const addTimelineDetails = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_TIMELINE_DETAILS',
    approvalDate: x1,
    startDate: x2,
    endDate: x3,
    duration: x4
  }
}

const addImplementationDetails = (x1,x2,x3,x4,x5,x6) => {
  return {
    type: 'ADD_IMPLEMENTATION_DETAILS',
    sector: x1,
    ministry: x2,
    agency: x3,
    contractor: x4,
    contacts: x5,
    priority: x6
  }
}

const addFinanceDetails = (x1,x2,x3,x4) => {
  return {
    type: 'ADD_FINANCE_DETAILS',
    estimatedCost: x1,
    budget: x2,
    financialYear: x3,
    fundingSource: x4
  }
}

const addLocationDetails = (x1,x2,x3) => {
  return {
    type: 'ADD_LOCATION_DETAILS',
    subCounty: x1,
    constituency: x2,
    ward: x3
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