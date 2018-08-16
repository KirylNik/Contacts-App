import { CHANGE_STATE_IS_OPEN_SIDEBAR } from '../constants'

export default (currentState = false, action) => {
    const {type} = action
    switch (type) {
        case CHANGE_STATE_IS_OPEN_SIDEBAR: return !currentState
    }

    return currentState
}