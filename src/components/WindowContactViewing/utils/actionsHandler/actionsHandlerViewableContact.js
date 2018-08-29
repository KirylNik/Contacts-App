import setViewableContact from './setViewableContact'
import { SET_VIEWABLE_CONTACT } from '../../constants'

const handlers = {
  [SET_VIEWABLE_CONTACT]: setViewableContact
}

export default function actionsHandlerViewableContact(action, currentState) {
  const { type } = action

  if (handlers[type]) {
    return handlers[type](action, currentState)
  } else {
    return currentState
  }
}