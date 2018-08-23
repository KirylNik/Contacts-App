import {
        DELETE_CONTACT,
        CHANGE_STATE_FAVORITE
        } from './constants'

export const deleteContact = id => dispatch => {
    fetch(`http://localhost:8080/contacts?ids=${id}`, {
        method: 'DELETE',
    })
        .then(() => dispatch({
            type: DELETE_CONTACT,
            payload: {id}
        }))
}

export const changeStateFavorite = (id, favouriteState) => dispatch =>  {
    const objContact ={}
    objContact.id = +id
    objContact.favourite = favouriteState

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