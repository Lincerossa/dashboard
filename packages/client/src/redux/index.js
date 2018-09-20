import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';
import expenses from './expenses/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  expenses
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
export const persistor = persistStore(store)

