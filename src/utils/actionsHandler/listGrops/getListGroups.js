export default function getListGroups(action, currentState) {
  const { contacts } = action.payload
  const listGroups = []

  contacts.forEach(item => {
    const groupArr = item.group ? item.group : []

    groupArr.forEach((item) => {
      if (listGroups.item) {
        listGroups.item++
      } else {
        listGroups.item = 1
      }
    })
  })

  return currentState
}