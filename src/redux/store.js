import {combineReducers, createStore} from 'redux'
import { usersReducer } from './reducers/usersReducer'


let reducers = combineReducers({
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store