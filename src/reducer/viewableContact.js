import { SET_VIEWABLE_CONTACT, HIDE_WINDOW_CONTACT_VIEWING } from '../constants'

export default (currentState = null, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_VIEWABLE_CONTACT: return payload.id

        case HIDE_WINDOW_CONTACT_VIEWING: return null
    }

    return currentState
}