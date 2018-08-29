import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Buttons from '../Buttons/Buttons'
import { styles } from './styles'

function FieldsFillingPhone(props) {
  const { classes,
    phoneNumber,
    phoneNumberClass,
    handleChange
  } = props

  return (
    <div className={classes.container}>
      <Grid container spacing={16} alignItems="flex-end">
        <Grid item xs={6}>
          <TextField
            required
            id="phone-number-input"
            label="Phone number"
            className={classes.phoneField}
            value={phoneNumber}
            onChange={handleChange('phoneNumber')}
            margin="normal"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl} fullWidth={true}>
            <Select
              required
              displayEmpty
              name="phone"
              className={classes.selectEmpty}
              value={phoneNumberClass}
              onChange={handleChange('phoneNumberClass')}
            >
              <MenuItem value={'Mobile'}>Mobile</MenuItem>
              <MenuItem value={'Home'}>Home</MenuItem>
              <MenuItem value={'Work'}>Work</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item className={classes.leftBotton} item xs={1}>
          <Buttons type={'remove'} />
        </Grid>
        <Grid item className={classes.botton} item xs={1}>
          <Buttons type={'add'} />
        </Grid>
      </Grid>
    </div>
  )
}

FieldsFillingPhone.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FieldsFillingPhone)