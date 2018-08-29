export default function getListGroups(action, currentState) {
    const { objContact, contacts } = action.payload
    const listGroups = JSON.parse(JSON.stringify(currentState))

    contacts.forEach(item => {
        const groupArr = item.group ? item.group : []

        groupArr.forEach((item)=>{
            if (listGroups.item) {
                listGroups.item++
            } else {
                listGroups.item = 1
            }
        })
    })

    return currentState
  }