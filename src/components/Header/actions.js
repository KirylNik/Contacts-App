import fetchModule from '../../utils/fetchModuleForActions/fetchModuleForActions'
import { LIST_ALL_CONTACTS,
         SEARCH_CONTACTS_BY_NAME,
         CHANGE_STATE_IS_OPEN_SIDEBAR } from './constants'

export const getListAllContacts = () => dispatch => {
  fetchModule(`contacts`, 'GET', null)
    .then(res => res.json())
    .then(response => dispatch({
      type: LIST_ALL_CONTACTS,
      payload: { response }
    }))
}

export const searchContactsByName = (query) => {
  return ({
    type: SEARCH_CONTACTS_BY_NAME,
    payload: { query }
  })
}

export const changeStateIsOpenSidebar = () => {
  return ({
    type: CHANGE_STATE_IS_OPEN_SIDEBAR
  })
}