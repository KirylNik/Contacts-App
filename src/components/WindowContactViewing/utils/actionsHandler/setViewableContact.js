export default function setViewableContact(action) {
  const { payload } = action
  return payload.idContact
}