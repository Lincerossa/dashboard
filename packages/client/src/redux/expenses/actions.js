import axios from 'axios'
import { EXPENSES_SET, EXPENSES_LOAD, EXPENSES_LOADED } from './types'
import { getExpenses } from './reducer'

function setExpenses(payload) {
  return {
    type: EXPENSES_SET,
    payload
  }
}

const loadExpenses = () => {
  return {
    type: EXPENSES_LOAD,
  }
}

const loadedExpenses = () => {
  return {
    type: EXPENSES_LOADED,
  }
}


export const asyncSetExpenses = (state) => {
  return async (dispatch, getState) => {

    dispatch(loadExpenses())

    const previousExpenses = getExpenses(getState())
    const expenses = await axios.get("http://localhost:3005/get/expenses").then(x => x.data)

    if(JSON.stringify(previousExpenses) === JSON.stringify(expenses)) {
      dispatch(loadedExpenses())
      return
    }

    dispatch(setExpenses(expenses))
  }
}