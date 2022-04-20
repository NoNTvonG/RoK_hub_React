import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { commandersReducer } from './commandersReducer'
import { calculatorsReducer } from './calculatorsReducer'
import { testReducer } from './testReducer'

const rootReducer = combineReducers({
	test: testReducer,
	commanders: commandersReducer,
	calculators: calculatorsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
