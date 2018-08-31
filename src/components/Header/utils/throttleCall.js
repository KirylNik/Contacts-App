let throttleTimeoutFlag = false
let query

export const throttleCall = function (textQuery, callbackEmptyField, callbackFilledField, timeout) {
  query = textQuery
    if (query === '') {
        callbackEmptyField()
      throttleTimeoutFlag = false
    } else if (query !== '' && !throttleTimeoutFlag) {
      throttleTimeoutFlag = true
      setTimeout(() => {
        callbackFilledField(query)
          throttleTimeoutFlag = false
      }, timeout)
    }
  }