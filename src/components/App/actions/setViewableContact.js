import { SET_VIEWABLE_CONTACT } from '../constants'

export const setViewableContact = (idContact) => {
    return {
        type: SET_VIEWABLE_CONTACT,
        payload: { idContact }
    }
  }