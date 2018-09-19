import axios from 'axios'
import { EXPENSES_SET } from './types'

function setExpenses(payload) {
  return {
    type: EXPENSES_SET,
    payload
  }
}

export const asyncSetExpenses = () => {
  return async dispatch => {
    const expenses = await axios.get("http://localhost:3002/")
    dispatch(setExpenses(expenses.data))
  }
}