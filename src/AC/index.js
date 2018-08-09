import {ADD_CONTACT} from '../constants'
import {GET_CONTACT} from '../constants'

export function addContact(objContact) {
    return {
        type: ADD_CONTACT,
        payload: { objContact }
    }
}

export function getContact(id) {
    return {
        type: GET_CONTACT,
        payload: { id }
    }
}