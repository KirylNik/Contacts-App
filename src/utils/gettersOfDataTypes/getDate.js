export const getDate = (date) => {
  if (date) {
      const day = new Date(date).getDate()
      const month = new Date(date).getMonth()
      const year = new Date(date).getFullYear()

      return `${day}/${month + 1}/${year}`
  }
}