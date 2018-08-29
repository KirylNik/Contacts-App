import fetchModule from '../../utils/fetchModuleForActions/fetchModuleForActions'
import { LIST_ALL_CONTACTS,
         SET_VIEWABLE_CONTACT,
         GET_LIST_GROUPS } from './constants'

// export const getListAllContacts = () => dispatch => {
//   fetchModule(`contacts`, 'GET', null)
//     .then(res => res.json())
//     .then(response => dispatch({
//       type: LIST_ALL_CONTACTS,
//       payload: { response }
//     }))
// }

export const getListAllContacts = () => dispatch => {
  fetchModule(`contacts`, 'GET', null)
    .then(res => res.json())
    .then(response => { dispatch({
          type: LIST_ALL_CONTACTS,
          payload: { response }
    })
    return response
  })
  .then(response => dispatch({
    type: GET_LIST_GROUPS,
    payload: { contacts: response }
  }))
}

export const setViewableContact = (id) => {
  return {
    type: SET_VIEWABLE_CONTACT,
    payload: { id }
  }
}