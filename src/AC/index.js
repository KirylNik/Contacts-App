import {
        ADD_CONTACT,
        UPDATE_CONTACT,
        GET_CONTACT, DELETE_CONTACT,
        CHANGE_STATE_FAVORITE,
        SORT_CONTACTS_BY_FAVORITES,
        LIST_ALL_CONTACTS,
        CHANGE_STATE_IS_OPEN_SIDEBAR
        } from '../constants'

export function addContact(objContact) {
    return {
        type: ADD_CONTACT,
        payload: { objContact }
    }
}

export function updateContact(objContact) {
    return {
        type: UPDATE_CONTACT,
        payload: { objContact }
    }
}

export function getContact(id) {
    return {
        type: GET_CONTACT,
        payload: { id }
    }
}

export function deleteContact(id) {
    return {
        type: DELETE_CONTACT,
        payload: { id }
    }
}

export function changeStateFavorite(id) {
    return {
        type: CHANGE_STATE_FAVORITE,
        payload: { id }
    }
}

export function sortContactsByFavorites() {
    return {
        type: SORT_CONTACTS_BY_FAVORITES
    }
}

export function getListAllContacts() {
    return {
        type: LIST_ALL_CONTACTS
    }
}

export function changeStateIsOpenSidebar() {
    return {
        type: CHANGE_STATE_IS_OPEN_SIDEBAR
    }
}