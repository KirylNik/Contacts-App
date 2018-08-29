import fetchModule from '../../utils/fetchModuleForActions/fetchModuleForActions'
import {
  DELETE_CONTACT,
  CHANGE_STATE_FAVORITE
} from './constants'

export const deleteContact = id => dispatch => {
  fetchModule(`contacts?ids=${id}`, 'DELETE', null)
    .then(() => dispatch({
      type: DELETE_CONTACT,
      payload: { id }
    }))
}

export const changeStateFavorite = (id, favouriteState) => dispatch => {
  const objContact = {}
  objContact.id = +id
  objContact.favourite = favouriteState

  fetchModule(`contact`, 'PUT', null, objContact)
    .then(() => dispatch({
      type: CHANGE_STATE_FAVORITE,
      payload: { id }
    }))
}