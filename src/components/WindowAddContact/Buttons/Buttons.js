import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'
import { styles } from './styles'

const icons = {
  add: <AddCircle />,
  remove: <RemoveCircle />
}

function Buttons(props) {
  const { classes, type } = props

  return (
    <IconButton className={classes.button} color="secondary">
      {icons[type]}
    </IconButton>
  )
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Buttons)