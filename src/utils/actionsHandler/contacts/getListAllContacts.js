export default function getListAllContacts(action) {
  const { payload } = action
  return payload.response
}