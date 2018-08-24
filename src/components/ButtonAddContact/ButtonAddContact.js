import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { styles } from './styles'

function ButtonAddContact(props) {
  const { classes } = props;
  return (
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
  )
}

ButtonAddContact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAddContact)