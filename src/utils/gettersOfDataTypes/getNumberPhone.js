import React from 'react'
import Typography from '@material-ui/core/Typography'

export const getNumberPhone = function (phonesArr, elemClassName) {
  const arrPhonesElem = phonesArr.map((item) =>
    <Typography
      variant="title"
      className={elemClassName}
      key={Date.now()}
    >
      {`${item.type}: ${item.number}`}
    </Typography>
  )

  return arrPhonesElem
}