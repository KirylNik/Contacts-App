import fetchModule from '../../../utils/fetchModuleForActions/fetchModuleForActions'
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  SET_VIEWABLE_CONTACT
       } from '../constants'

export const addContact = objContact => dispatch => {
  fetchModule(`contact`, 'POST', null, objContact)
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
      payload: { idContact: response.id }
    }))
}

export const updateContact = objContact => dispatch => {
  fetchModule(`contact`, 'PUT', null, objContact)
    .then(() => dispatch({
      type: UPDATE_CONTACT,
      payload: { objContact }
    }))
}