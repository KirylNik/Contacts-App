import {contacts as defaultContacts} from '../contacts'
import {
        ADD_CONTACT,
        GET_CONTACT,
        DELETE_CONTACT,
        UPDATE_CONTACT,
        CHANGE_STATE_FAVORITE,
        SORT_CONTACTS_BY_FAVORITES,
        LIST_ALL_CONTACTS
       } from '../constants'

export default (contactsState = defaultContacts, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_CONTACT: return contactsState.concat(payload.objContact)

        case GET_CONTACT: return contactsState.filter((item) => {
            return item.id === payload.id
        })
        case DELETE_CONTACT: return contactsState.filter((item) => {
            return item.id != payload.id
        })

        case UPDATE_CONTACT: return contactsState.map((item) => {
            return (item.id == payload.objContact.id ? payload.objContact : item)
        })

        case CHANGE_STATE_FAVORITE: return contactsState.map((item) => {
            if (item.id != payload.id) {
                return item
            } else {
                item.isFavorite = !item.isFavorite
                return item
            }
        })

        case SORT_CONTACTS_BY_FAVORITES: return contactsState.filter((item) => {
            return item.isFavorite
        })

        case LIST_ALL_CONTACTS: return defaultContacts.slice()
    }

    return contactsState
}