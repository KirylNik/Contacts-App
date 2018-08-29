import React from 'react'
import StarBorder from '@material-ui/icons/StarBorder'
import Star from '@material-ui/icons/Star'

export default function IsFavoriteIcon(props) {
  const { isFavorite } = props
  return isFavorite ? <Star /> : <StarBorder />
}