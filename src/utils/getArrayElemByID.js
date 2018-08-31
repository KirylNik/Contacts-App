export const getArrayElemByID = (array, targetId) => {
  const arrContact = array.filter(item => item.id == targetId)
  return arrContact[0]
}

