import { initialState } from './State'

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_COUNTY_DETAILS':
      return {...state,
        counties: {
          number: [...state.counties.number, action.number],
          name: [...state.counties.name, action.name],
          governor: [...state.counties.governor, action.governor],
          senator: [...state.counties.senator, action.senator]
        }
      }
    case 'RESET_COUNTY_DETAILS':
      return {...state,
        counties: { number: [], name: [], governor: [], senator: [] }
      }
    case 'ADD_PROJECT_DETAILS':
      return {...state,
        projects: {
          projectID: [...state.projects.projectID, action.projectID],
          name: [...state.projects.name, action.name],
          description: [...state.projects.description, action.description],
          status: [...state.projects.status, action.status]
        }
      }
    case 'RESET_PROJECT_DETAILS':
      return {...state,
        projects: { projectID: [], name: [], description: [], status: [] }
      }
    case 'ADD_TIMELINE_DETAILS':
      return {...state,
        timelines: {
          projectID: [...state.timelines.projectID, action.projectID],
          approvalDate: [...state.timelines.approvalDate, action.approvalDate],
          startDate: [...state.timelines.startDate, action.startDate],
          endDate: [...state.timelines.endDate, action.endDate],
          duration: [...state.timelines.duration, action.duration]
        }
      }
    case 'RESET_TIMELINE_DETAILS':
      return {...state,
        timelines: { projectID: [], approvalDate: [], startDate: [], endDate: [], duration: [] }
      }
    case 'ADD_IMPLEMENTATION_DETAILS':
      return {...state,
        implementation: {
          projectID: [...state.implementation.projectID, action.projectID],
          sector: [...state.implementation.sector, action.sector],
          ministry: [...state.implementation.ministry, action.ministry],
          agency: [...state.implementation.agency, action.agency],
          contractor: [...state.implementation.contractor, action.contractor],
          contacts: [...state.implementation.contacts, action.contacts],
          priority: [...state.implementation.priority, action.priority]
        }
      }
    case 'RESET_IMPLEMENTATION_DETAILS':
      return {...state,
        implementation: { projectID: [], sector: [], ministry: [], agency: [], contractor: [], contacts: [], priority: [] }
      }
    case 'ADD_FINANCE_DETAILS':
      return {...state,
        finances: {
          projectID: [...state.finances.projectID, action.projectID],
          estimatedCost: [...state.finances.estimatedCost, action.estimatedCost],
          budget: [...state.finances.budget, action.budget],
          financialYear: [...state.finances.financialYear, action.financialYear],
          fundingSource: [...state.finances.fundingSource, action.fundingSource]
        }
      }
    case 'RESET_FINANCE_DETAILS':
      return {...state,
        finances: { projectID: [], estimatedCost: [], budget: [], financialYear: [], fundingSource: [] }
      }
    case 'ADD_LOCATION_DETAILS':
      return {...state,
        locations: {
          projectID: [...state.locations.projectID, action.projectID],
          countyNo: [...state.locations.countyNo, action.countyNo],
          subCounty: [...state.locations.subCounty, action.subCounty],
          constituency: [...state.locations.constituency, action.constituency],
          ward: [...state.locations.ward, action.ward]
        }
      }
    case 'RESET_LOCATION_DETAILS':
      return {...state,
        locations: { projectID: [], countyNo: [], subCounty: [], constituency: [], ward: [] }  
      }
    default:
      return state
  }
}