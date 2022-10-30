import { initialState } from './State'

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'COU_ADD':
      return {...state,
        counties: {
          number: [...state.counties.number, action.number],
          name: [...state.counties.name, action.name],
          governor: [...state.counties.governor, action.governor],
          senator: [...state.counties.senator, action.senator]
        }
      }
    case 'COU_RESET':
      return {...state,
        counties: { number: [], name: [], governor: [], senator: [] }
      }
    case 'PRO_ADD_DETAILS':
      return {...state,
        projects: {...state.projects,
          details: {
            projectID: [...state.projects.details.projectID, action.projectID],
            name: [...state.projects.details.name, action.name],
            description: [...state.projects.details.description, action.description],
            status: [...state.projects.details.status, action.status]
          }
        }
      }
    case 'PRO_RESET_DETAILS':
      return {...state,
        projects: {...state.projects,
          details: { projectID: [], name: [], description: [], status: [] }
        }
      }
    case 'PRO_ADD_TIMELINES':
      return {...state,
        projects: {...state.projects,
          timelines: {
            projectID: [...state.projects.timelines.projectID, action.projectID],
            approvalDate: [...state.projects.timelines.approvalDate, action.approvalDate],
            startDate: [...state.projects.timelines.startDate, action.startDate],
            endDate: [...state.projects.timelines.endDate, action.endDate],
            duration: [...state.projects.timelines.duration, action.duration]
          }
        }
      }
    case 'PRO_RESET_TIMELINES':
      return {...state,
        projects: {...state.projects,
          timelines: { projectID: [], approvalDate: [], startDate: [], endDate: [], duration: [] }
        }
      }
    case 'PRO_ADD_IMPLEMENTATIONS':
      return {...state,
        projects: {...state.projects,
          implementation: {
            projectID: [...state.projects.implementation.projectID, action.projectID],
            sector: [...state.projects.implementation.sector, action.sector],
            ministry: [...state.projects.implementation.ministry, action.ministry],
            agency: [...state.projects.implementation.agency, action.agency],
            contractor: [...state.projects.implementation.contractor, action.contractor],
            priority: [...state.projects.implementation.priority, action.priority]
          }
        }
      }
    case 'PRO_RESET_IMPLEMENTATIONS':
      return {...state,
        projects: {...state.projects,
          implementation: { projectID: [], sector: [], ministry: [], agency: [], contractor: [], contacts: [], priority: [] }
        }
      }
    case 'PRO_ADD_FINANCES':
      return {...state,
        projects: {...state.projects,
          finances: {
            projectID: [...state.projects.finances.projectID, action.projectID],
            estimatedCost: [...state.projects.finances.estimatedCost, action.estimatedCost],
            budget: [...state.projects.finances.budget, action.budget],
            financialYear: [...state.projects.finances.financialYear, action.financialYear],
            fundingSource: [...state.projects.finances.fundingSource, action.fundingSource]
          }
        }
      }
    case 'PRO_RESET_FINANCES':
      return {...state,
        projects: {...state.projects,
          finances: { projectID: [], estimatedCost: [], budget: [], financialYear: [], fundingSource: [] }
        }
      }
    case 'PRO_ADD_LOCATIONS':
      return {...state,
        projects: {...state.projects,
          locations: {
            projectID: [...state.projects.locations.projectID, action.projectID],
            countyNo: [...state.projects.locations.countyNo, action.countyNo],
            subCounty: [...state.projects.locations.subCounty, action.subCounty],
            constituency: [...state.projects.locations.constituency, action.constituency],
            ward: [...state.projects.locations.ward, action.ward]
          }
        }
      }
    case 'PRO_RESET_LOCATIONS':
      return {...state,
        projects: {...state.projects,
          locations: { projectID: [], countyNo: [], subCounty: [], constituency: [], ward: [] }  
        }
      }
    case 'TRA_ADD':
    return {...state,
      tracking: {
        date: [...state.tracking.date, action.date],
        projectID: [...state.tracking.projectID, action.projectID],
        field: [...state.tracking.field, action.field],
        action: [...state.tracking.action, action.action],
        valueFrom: [...state.tracking.valueFrom, action.valueFrom],
        valueTo: [...state.tracking.valueTo, action.valueTo]
      }
    }
  case 'TRA_RESET':
    return {...state,
      tracking: { date: [], projectID: [], field: [], action: [], valueFrom: [], valueTo: [] }
    }
  case 'ADM_ADD':
    return {...state,
      admins: {
        username: [...state.admins.username, action.username],
        firstName: [...state.admins.firstName, action.firstName],
        lastName: [...state.admins.lastName, action.lastName],
        email: [...state.admins.email, action.email]
      }
    }
  case 'ADM_RESET':
    return {...state,
      admins: { username: [], firstName: [], lastName: [], email: [] }
    }
    default:
      return state
  }
}