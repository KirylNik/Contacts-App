import setViewableContact from './setViewableContact'
import hideWindowContactViewing from './hideWindowContactViewing'
import {
  SET_VIEWABLE_CONTACT,
  HIDE_WINDOW_CONTACT_VIEWING
} from './constants'

const handlers = {
  [SET_VIEWABLE_CONTACT]: setViewableContact,
  [HIDE_WINDOW_CONTACT_VIEWING]: hideWindowContactViewing
}

export default function actionsHandlerViewableContact(action, currentState) {
  const { type } = action

  if (handlers[type]) {
    return handlers[type](action, currentState)
  } else {
    return null
  }
}