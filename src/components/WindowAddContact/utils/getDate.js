export const getDate = (date) => {
    if (date) {
      let day = new Date(date).getDate()
      let month = new Date(date).getMonth()
      let year = new Date(date).getFullYear()

      month < 10 ? (month = '0' + (month + 1)) : (month + 1)
      day < 10 ? (day = '0' + day) : day

      return `${year}-${month}-${day}`
    }
  }