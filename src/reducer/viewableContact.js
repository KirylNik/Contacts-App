import actionsHandlerViewableContact from '../utils/actionsHandler/viewableContact/actionsHandlerViewableContact'

export default (currentState = false, action) => {
  const result = actionsHandlerViewableContact(action, currentState)

  if (result != null) {
    return result
  } else {
    return currentState
  }
}