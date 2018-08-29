import getListGroups from './getListGroups'
import {
  GET_LIST_GROUPS
} from './constants'

const handlers = {
  [GET_LIST_GROUPS]: getListGroups,
}

export default function actionsHandlerGroups(action, currentState) {
  const { type } = action
  
  if (handlers[type]) {
    return handlers[type](action, currentState)
  } else {
    return currentState
  }
}