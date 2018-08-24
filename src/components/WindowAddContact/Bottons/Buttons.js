import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AddCircle from '@material-ui/icons/AddCircle'
import RemoveCircle from '@material-ui/icons/RemoveCircle'
import { styles } from './styles'

function Buttons(props) {
  const { classes, type } = props
  if (type == 'add') {
    return (
      <IconButton className={classes.button} color="secondary" aria-label="Add">
        <AddCircle />
      </IconButton>
    )
  } else if (type == 'remove') {
    return (
      <IconButton className={classes.button} color="secondary" aria-label="Delete">
        <RemoveCircle />
      </IconButton>
    )
  }
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Buttons)