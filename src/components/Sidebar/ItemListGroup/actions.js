import { SORT_CONTACTS_BY_GROUP } from '../constants'

export const sortContactsByGroup = (targetGroup) => {
    return {
        type: SORT_CONTACTS_BY_GROUP,
        payload: { targetGroup }
    }
  }