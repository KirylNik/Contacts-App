import {
        ADD_CONTACT,
        GET_CONTACT,
        DELETE_CONTACT,
        UPDATE_CONTACT,
        CHANGE_STATE_FAVORITE,
        SORT_CONTACTS_BY_FAVORITES,
        LIST_ALL_CONTACTS
       } from '../constants'

export default (contactsState = {}, action) => {
    const {type, payload, response} = action

    switch (type) {
        case ADD_CONTACT:
            const objectContact = Object.assign({}, payload.objContact)
            objectContact.id = response
            return contactsState.concat(objectContact)

        case GET_CONTACT: return contactsState.filter((item) => {
            return item.id === payload.id
        })
        case DELETE_CONTACT: return contactsState.filter((item) => {
            return item.id != payload.id
        })

        case UPDATE_CONTACT: return contactsState.map((item) => {
            return (item.id == payload.objContact.id ? payload.objContact : item)
        })
        debugger
        case CHANGE_STATE_FAVORITE: return contactsState.map((item) => {
            if (item.id != payload.id) {
                return item
            } else {
                item.favourite = !item.favourite
                return item
            }
        })

        case SORT_CONTACTS_BY_FAVORITES: return contactsState.filter((item) => {
            return item.isFavorite
        })

        case LIST_ALL_CONTACTS: return response
    }

    return contactsState
}