import { combineReducers } from 'redux'
import contacts from './contacts'
import sidebarState from './sidebar'
import viewableContact from './viewableContact'

export default combineReducers({
  contacts,
  sidebarState,
  viewableContact
})