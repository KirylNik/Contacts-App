export default function addContactHandler(action, currentState) {
    const { payload, response } = action
    const objectContact = Object.assign({}, payload.objContact)

    objectContact.id = response
    
    return currentState.concat(objectContact)
}