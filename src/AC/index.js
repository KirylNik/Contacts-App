import {
        ADD_CONTACT,
        UPDATE_CONTACT,
        GET_CONTACT, DELETE_CONTACT,
        CHANGE_STATE_FAVORITE,
        SORT_CONTACTS_BY_FAVORITES,
        LIST_ALL_CONTACTS,
        CHANGE_STATE_IS_OPEN_SIDEBAR,
        SET_VIEWABLE_CONTACT,
        HIDE_WINDOW_CONTACT_VIEWING
        } from '../constants'

export function addContact(objContact) {
    return (dispatch) => {
        fetch('http://localhost:8080/contact', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objContact),
        })
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: ADD_CONTACT,
                    payload: { objContact },
                    response: response.id
                })
                return response
            })
            .then(response => dispatch({
                type: SET_VIEWABLE_CONTACT,
                payload: { id: response.id }
            }))
    }
}

export function updateContact(objContact) {
    return (dispatch) => {
        fetch('http://localhost:8080/contact', {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objContact),
        })
            .then(() => dispatch({
                type: UPDATE_CONTACT,
                payload: { objContact }
            }))
    }
}

export function getContact(id) {
    return {
        type: GET_CONTACT,
        payload: { id }
    }
}

export function deleteContact(id) {
    return (dispatch) => {
        fetch(`http://localhost:8080/contacts?ids=${id}`, {
            method: 'DELETE',
        })
            .then(() => dispatch({
                type: DELETE_CONTACT,
                payload: {id}
            }))
    }
}

export function changeStateFavorite(id, favouriteState) {
    const objContact ={}
    objContact.id = +id
    objContact.favourite = favouriteState

    return (dispatch) => {
        fetch('http://localhost:8080/contact', {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objContact),
        })
            .then(() => dispatch({
                type: CHANGE_STATE_FAVORITE,
                payload: { id }
            }))
    }
}

export function sortContactsByFavorites() {
    return {
        type: SORT_CONTACTS_BY_FAVORITES
    }
}

export function getListAllContacts() {
    return (dispatch) => {
        fetch('http://localhost:8080/contacts', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(response => dispatch({
                type: LIST_ALL_CONTACTS,
                payload: {response}
            }))
    }
}

export function changeStateIsOpenSidebar() {
    return {
        type: CHANGE_STATE_IS_OPEN_SIDEBAR
    }
}

export function hideWindowContactViewing() {
    return {
        type: HIDE_WINDOW_CONTACT_VIEWING
    }
}