import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AddCircle from '@material-ui/icons/AddCircle'

const styles = theme => ({
  button: {
    margin: '0px',
    height: '35px',
    width: '35px',
  },
  input: {
    display: 'none',
  },
})

function ButtonAdd(props) {
  const { classes } = props;
  return (
      <IconButton className={classes.button} color="secondary" aria-label="Add">
        <AddCircle />
      </IconButton>
  )
}

ButtonAdd.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAdd)