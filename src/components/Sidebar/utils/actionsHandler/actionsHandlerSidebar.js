import changeStateIsOpenSidebar from './changeStateIsOpenSidebar'
import { CHANGE_STATE_IS_OPEN_SIDEBAR } from '../../constants'

const handlers = {
  [CHANGE_STATE_IS_OPEN_SIDEBAR]: changeStateIsOpenSidebar
}

export default function actionsHandlerSidebar(action, currentState) {
  const { type } = action
  if (handlers[type]) {
    return handlers[type](action, currentState)
  } else {
    return currentState
  }
}