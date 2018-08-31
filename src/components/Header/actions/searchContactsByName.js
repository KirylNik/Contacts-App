import { SEARCH_CONTACTS_BY_NAME } from '../constants'

export const searchContactsByName = (query) => {
  return ({
    type: SEARCH_CONTACTS_BY_NAME,
    payload: { query }
  })
}