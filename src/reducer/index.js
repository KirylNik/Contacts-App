import {combineReducers} from 'redux'
import contacts from './contacts'
import sidebarState from './sidebar'

export default combineReducers({
    contacts,
    sidebarState
})