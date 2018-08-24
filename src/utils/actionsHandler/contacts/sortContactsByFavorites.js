export default function sortContactsByFavorites(action, currentState) {
  return currentState.filter(item => item.favourite)
}