import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  SET_VIEWABLE_CONTACT
} from './constants'

export const addContact = objContact => dispatch => {
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

export const updateContact = objContact => dispatch => {
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