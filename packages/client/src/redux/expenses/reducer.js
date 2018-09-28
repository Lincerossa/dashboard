import { EXPENSES_SET, EXPENSES_LOAD, EXPENSES_LOADED } from './types'
const defaultState = {}

export default (state, action) => {

  switch (action.type) {
    case EXPENSES_SET:
      return {
        ...state,
        data: [
          ...action.payload,
        ],
        status: "LOADED"
    }

    case EXPENSES_LOAD: {
      return {
        ...state,
        status: "LOADING"
      }
    }

    case EXPENSES_LOADED: {
      return {
        ...state,
        status: "LOADED"
      }
    }

    default:
      return defaultState
  }
}


export const getExpenses = state => state && state.expenses && state.expenses.data
export const getExpensesStatus = state => state && state.expenses && state.expenses.status