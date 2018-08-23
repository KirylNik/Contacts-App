export default function updateContactHandler(action, currentState) {
    const { payload } = action
    return currentState.map(item => 
        item.id == payload.objContact.id ? payload.objContact : item
    )
}
