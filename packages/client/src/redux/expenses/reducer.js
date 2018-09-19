import { EXPENSES_SET } from './types'
const defaultState = []

export default (state, action) => {

  switch (action.type) {
    case EXPENSES_SET:

      return [
        ...state,
        ...action.payload,
      ]
    default:
      return defaultState
  }
}


export const getExpenses = state => state.expenses