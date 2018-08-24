import actionsHandlerSidebar from '../utils/actionsHandler/sidebar/actionsHandlerSidebar'

export default (currentState = false, action) => {
  const result = actionsHandlerSidebar(action, currentState)

  if (result != null) {
    return result
  } else {
    return currentState
  }
}