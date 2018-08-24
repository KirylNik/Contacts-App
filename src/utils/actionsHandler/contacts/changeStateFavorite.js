export default function changeStateFavorite(action, currentState) {
  const { payload } = action

  return currentState.map(item => {
    if (item.id != payload.id) {
      return item
    } else {
      item.favourite = !item.favourite
      return item
    }
  })
}