import { LIST_ALL_CONTACTS } from './constants'

export const getListAllContacts = () => dispatch => {
    fetch('http://localhost:8080/contacts', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(response => dispatch({
            type: LIST_ALL_CONTACTS,
            payload: {response}
        }))
}