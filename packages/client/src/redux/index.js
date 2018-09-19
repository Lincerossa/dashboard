import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';
import expenses from './expenses/reducer'

const rootReducer = combineReducers({
  expenses
})



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store