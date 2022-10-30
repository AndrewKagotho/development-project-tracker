const addCounties = (x1,x2,x3,x4) => {
  return {
    type: 'COU_ADD',
    number: x1,
    name: x2,
    governor: x3,
    senator: x4
  }
}

const addProjectDetails = (x1,x2,x3,x4) => {
  return {
    type: 'PRO_ADD_DETAILS',
    projectID: x1,
    name: x2,
    description: x3,
    status: x4
  }
}

const addProjectTimelines = (x1,x2,x3,x4,x5) => {
  return {
    type: 'PRO_ADD_TIMELINES',
    projectID: x1,
    approvalDate: x2,
    startDate: x3,
    endDate: x4,
    duration: x5
  }
}

const addProjectImplementations = (x1,x2,x3,x4,x5,x6,x7) => {
  return {
    type: 'PRO_ADD_IMPLEMENTATIONS',
    projectID: x1,
    sector: x2,
    ministry: x3,
    agency: x4,
    contractor: x5,
    priority: x6
  }
}

const addProjectFinances = (x1,x2,x3,x4,x5) => {
  return {
    type: 'PRO_ADD_FINANCES',
    projectID: x1,
    estimatedCost: x2,
    budget: x3,
    financialYear: x4,
    fundingSource: x5
  }
}

const addProjectLocations = (x1,x2,x3,x4,x5) => {
  return {
    type: 'PRO_ADD_LOCATIONS',
    projectID: x1,
    countyNo: x2,
    subCounty: x3,
    constituency: x4,
    ward: x5
  }
}

const addTrackingLogs = (x1,x2,x3,x4,x5,x6) => {
  return {
    type: 'TRA_ADD',
    date: x1,
    projectID: x2,
    field: x3,
    action: x4,
    valueFrom: x5,
    valueTo: x6
  }
}

const addAdmins = (x1,x2,x3,x4) => {
  return {
    type: 'ADM_ADD',
    username: x1,
    firstName: x2,
    lastName: x3,
    email: x4
  }
}

const resetCounties = () => { return { type: 'COU_RESET' } }

const resetProjectDetails = () => { return { type: 'PRO_RESET_DETAILS' } }

const resetProjectTimelines = () => { return { type: 'PRO_RESET_TIMELINES' } }

const resetProjectImplementations = () => { return { type: 'PRO_RESET_IMPLEMENTATIONS' } }

const resetProjectFinances = () => { return { type: 'PRO_RESET_FINANCES' } }

const resetProjectLocations = () => { return { type: 'PRO_RESET_LOCATIONS' } }

const resetTrackingLogs = () => { return { type: 'TRA_RESET' } }

const resetAdmins = () => { return { type: 'ADM_RESET' } }

export const mapDispatchToProps = {
  addCounties,
  addProjectDetails,
  addProjectTimelines,
  addProjectImplementations,
  addProjectFinances,
  addProjectLocations,
  addTrackingLogs,
  addAdmins,
  resetCounties,
  resetProjectDetails,
  resetProjectTimelines,
  resetProjectImplementations,
  resetProjectFinances,
  resetProjectLocations,
  resetTrackingLogs,
  resetAdmins
}