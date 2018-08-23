import addContactHandler from './addContactHandler'
import deleteContactHandler from './deleteContactHandler'
import updateContactHandler from './updateContactHandler'
import changeStateFavorite from './changeStateFavorite'
import sortContactsByFavorites from './sortContactsByFavorites'
import getListAllContacts from './getListAllContacts'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    CHANGE_STATE_FAVORITE,
    SORT_CONTACTS_BY_FAVORITES,
    LIST_ALL_CONTACTS
   } from './constants'

const handlers = {
    [ADD_CONTACT]: addContactHandler,
    [DELETE_CONTACT]: deleteContactHandler,
    [UPDATE_CONTACT]: updateContactHandler,
    [CHANGE_STATE_FAVORITE]: changeStateFavorite,
    [SORT_CONTACTS_BY_FAVORITES]: sortContactsByFavorites,
    [LIST_ALL_CONTACTS]: getListAllContacts
}

export default function actionsHandlerContacts(action, currentState) {
    const { type } = action

    if (handlers[type]) {
        return handlers[type](action, currentState)
    } else {
        return null
    }
}