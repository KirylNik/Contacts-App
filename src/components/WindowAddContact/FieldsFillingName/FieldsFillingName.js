import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'

function FieldsFillingName(props) {
  const { classes,
          valueFirstName,
          valueMiddleName,
          valueLastName,
          handleChange
        } = props

  return (
    <Grid container spacing={16} alignItems="flex-end" className={classes.container}>
      <Grid item xs={4} className={classes.gridTextField}>
        <TextField
          required
          id="first-name-input"
          label="First Name"
          className={classes.textField}
          value={valueFirstName}
          onChange={handleChange('firstName')}
          margin="normal"
          fullWidth={true}
        />
      </Grid>
      <Grid item xs={4} className={classes.gridTextField}>
        <TextField
          required
          id="middle-name-input"
          label="Middle name"
          value={valueMiddleName}
          onChange={handleChange('middleName')}
          className={classes.textField}
          margin="normal"
        />
      </Grid>
      <Grid item xs={4} className={classes.gridTextField}>
        <TextField
          required
          id="last-name-input"
          label="Last name"
          className={classes.textField}
          value={valueLastName}
          onChange={handleChange('lastName')}
          margin="normal"
        />
      </Grid>
    </Grid>
  )
}

FieldsFillingName.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FieldsFillingName)