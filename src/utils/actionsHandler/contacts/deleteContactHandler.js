export default function deleteContactHandler(action, currentState) {
  const { payload } = action
  return currentState.filter(item => item.id != payload.id)
}