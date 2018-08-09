import {contacts as defaultContacts} from '../contacts'
import {ADD_CONTACT, GET_CONTACT} from '../constants'

export default (contactsState = defaultContacts, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_CONTACT: return contactsState.concat(payload.objContact)

        case GET_CONTACT: return contactsState.filter((item) => {
            return item.id === payload.id
        })
    }

    return contactsState
}