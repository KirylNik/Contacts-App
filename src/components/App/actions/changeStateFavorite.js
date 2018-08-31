import fetchModule from '../../../utils/fetchModuleForActions/fetchModuleForActions'
import { CHANGE_STATE_FAVORITE } from '../constants'

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