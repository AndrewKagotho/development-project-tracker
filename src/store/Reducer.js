import { initialState } from './State'

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_COUNTIES':
      return {...state,
        counties: {
          number: [...state.counties.number, action.number],
          name: [...state.counties.name, action.name]
        }
      }
    case 'RESET_COUNTIES':
      return {...state,
        counties: { number: [], name: [] }
      }
    default:
      return state
  }
}