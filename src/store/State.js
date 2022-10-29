export const initialState = {
  counties: {
    number: [],
    name: [],
    governor: [],
    senator: []
  },
  projects: {
    projectID: [],
    name: [],
    description: [],
    status: []
  },
  timelines: {
    projectID: [],
    approvalDate: [],
    startDate: [],
    endDate: [],
    duration: []
  },
  implementation: {
    projectID: [],
    sector: [],
    ministry: [],
    agency: [],
    contractor: [],
    priority: []
  },
  finances: {
    projectID: [],
    estimatedCost: [],
    budget: [],
    financialYear: [],
    fundingSource: []
  },
  locations: {
    projectID: [],
    countyNo: [],
    subCounty: [],
    constituency: [],
    ward: []
  },
  tracking: {
    date: [],
    projectID: [],
    field: [],
    action: [],
    valueFrom: [],
    valueTo: []
  },
  admins: {
    username: [],
    firstName: [],
    lastName: [],
    email: []
  }
}