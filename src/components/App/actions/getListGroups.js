import fetchModule from '../../../utils/fetchModuleForActions/fetchModuleForActions'
import { GET_LIST_GROUPS } from '../constants'

export const getListGroups = () => dispatch => {
  fetchModule(`groups`, 'GET', null)
  .then(res => res.json())
  .then(groups => {
    dispatch({
      type: GET_LIST_GROUPS,
      payload: { groups }
    })
  })
}