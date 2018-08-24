import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { styles } from './styles'

function FieldsSelectDate(props) {
  const { classes,
    birhtDate,
    handleChange,
  } = props

  return (
    <div className={classes.container}>
      <TextField
        required
        id="date"
        label="Date of birth"
        type="date"
        fullWidth={true}
        className={classes.textField}
        value={birhtDate}
        onChange={handleChange('birhtDate')}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

FieldsSelectDate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FieldsSelectDate)