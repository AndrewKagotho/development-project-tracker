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
          department: [...state.projects.department, action.department]
        }
      }
    case 'RESET_PROJECT_DETAILS':
      return {...state,
        projects: { projectID: [], name: [], description: [], department: [] }
      }
    case 'ADD_IMPLEMENTATION_DETAILS':
      return {...state,
        implementation: {
          budget: [...state.implementation.budget, action.budget],
          financialYear: [...state.implementation.financialYear, action.financialYear],
          fundsSource: [...state.implementation.fundsSource, action.fundSource],
          status: [...state.implementation.status, action.status]
        }
      }
    case 'RESET_IMPLEMENTATION_DETAILS':
      return {...state,
        implementation: { budget: [], financialYear: [], fundsSource: [], status: [] }
      }
    case 'ADD_LOCATION_DETAILS':
      return {...state,
        location: {
          subCounty: [...state.location.subCounty, action.subCounty],
          ward: [...state.location.ward, action.ward],
          subWard: [...state.location.subWard, action.subWard],
          location: [...state.location.location, action.location],
          subLocation: [...state.location.subLocation, action.subLocation]
        }
      }
    case 'RESET_LOCATION_DETAILS':
      return {...state,
        location: { subCounty: [], ward: [], subWard: [], location: [], subLocation: [] }
      }
    default:
      return state
  }
}