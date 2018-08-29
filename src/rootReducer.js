import { combineReducers } from 'redux'
import actionsHandlerContacts from './utils/actionsHandler/contacts/actionsHandlerContacts'
import actionsHandlerSidebar from './components/Sidebar/utils/actionsHandler/actionsHandlerSidebar'
import actionsHandlerViewableContact from './components/WindowContactViewing/utils/actionsHandler/actionsHandlerViewableContact'
import actionsHandlerGroups from './utils/actionsHandler/groups/actionsHandlerGroups'

const dicts = {
  contacts : createReducer({}, actionsHandlerContacts),
  sidebarState : createReducer(false, actionsHandlerSidebar),
  viewableContact : createReducer(false, actionsHandlerViewableContact),
  groups: createReducer([], actionsHandlerGroups),
}

function createReducer(initialState, actionsHandler) {
  return (state = initialState, action) => {
      return actionsHandler(action, state)
  }
}

export default combineReducers({contacts: dicts.contacts,
                                sidebarState: dicts.sidebarState,
                                viewableContact: dicts.viewableContact,
                                groups: dicts.groups
                              });