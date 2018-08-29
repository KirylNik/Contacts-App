export default function sortContactsByGroup(action, currentState) {
  const { targetGroup } = action.payload
  
  return currentState.filter(contact => {
    if(contact.group) {
      const concurrencesGroup = contact.group.filter((item) => item === targetGroup)
      return concurrencesGroup.length > 0
    }
  })
}