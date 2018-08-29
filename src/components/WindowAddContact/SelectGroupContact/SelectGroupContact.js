import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Buttons from '../Buttons/Buttons'
import { styles } from './styles'

function SelectGroupContact(props) {
  const { classes,
    group,
    handleChange
  } = props

  return (
    <div className={classes.container}>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <Select
              displayEmpty
              fullWidth={true}
              name="group"
              className={classes.selectEmpty}
              value={group}
              onChange={handleChange('group')}
            >
              <MenuItem value={'Work'}>Work</MenuItem>
              <MenuItem value={'Family'}>Family</MenuItem>
              <MenuItem value={'Frends'}>Frends</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item item xs={2} className={classes.firstButton}>
          <Buttons type={'remove'} />
        </Grid>
        <Grid item xs={2}>
          <Buttons type={'add'} />
        </Grid>
      </Grid>
    </div>
  )
}

SelectGroupContact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SelectGroupContact)