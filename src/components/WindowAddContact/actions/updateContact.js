import fetchModule from '../../../utils/fetchModuleForActions/fetchModuleForActions'
import { UPDATE_CONTACT } from '../constants'

export const updateContact = objContact => dispatch => {
  fetchModule(`contact`, 'PUT', null, objContact)
    .then(() => dispatch({
      type: UPDATE_CONTACT,
      payload: { objContact }
    }))
}