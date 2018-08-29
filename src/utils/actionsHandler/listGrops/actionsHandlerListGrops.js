import getListGroups from './getListGroups'
import updateListGroups from './updateListGroups'
import { GET_LIST_GROUPS,
         UPDATE_LIST_GROUPS } from './constants'

const handlers = {
  [GET_LIST_GROUPS]: getListGroups,
  [UPDATE_LIST_GROUPS]: updateListGroups
}

export default function actionsHandlerListGrops(action, currentState) {
  const { type } = action
  if (handlers[type]) {
    return handlers[type](action, currentState)
  } else {
    return currentState
  }
}