import actionsHandlerContacts from '../utils/actionsHandler/contacts/actionsHandlerContacts'

export default (contactsState = {}, action) => {
  const result = actionsHandlerContacts(action, contactsState)
  return result || contactsState
}