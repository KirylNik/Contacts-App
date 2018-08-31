import fetchModule from '../../../utils/fetchModuleForActions/fetchModuleForActions'
import { DELETE_CONTACT } from '../constants'

export const deleteContact = id => dispatch => {
  fetchModule(`contacts?ids=${id}`, 'DELETE', null)
    .then(() => dispatch({
      type: DELETE_CONTACT,
      payload: { id }
    }))
}