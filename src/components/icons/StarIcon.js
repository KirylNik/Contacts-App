import React from 'react'
import StarBorder from '@material-ui/icons/StarBorder'
import Star from '@material-ui/icons/Star'

export default function StarIcon(props) {
    const { isActive } = props

    if (isActive) {
        return <Star/>
    } else {
        return <StarBorder/>
    }
}