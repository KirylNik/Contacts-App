import { BASIC_URL } from './constants'

export default function fetchModule(url, queryMethod, headers, queryBody) {
  return (
    fetch(BASIC_URL + url, {
      method: queryMethod,
      headers: getHeaders(headers),
      body: getBody(queryBody)
    })
  )
}

function getBody(queryBody) {
  return (queryBody !== undefined ? JSON.stringify(queryBody) : null)
}

function getHeaders(headers) {
  return (headers ? headers : {"Content-Type": "application/json"})
}