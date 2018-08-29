export default function searchContactsByName(action, currentState) {
  const { query } = action.payload
  return currentState.filter(item => 
         (item.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      || (item.lastName.toLowerCase().indexOf(query.toLowerCase())) !== -1)
}