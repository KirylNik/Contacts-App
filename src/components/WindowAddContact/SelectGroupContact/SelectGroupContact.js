import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Buttons from '../Buttons/Buttons'
import { connect } from 'react-redux'
import { styles } from './styles'

function SelectGroupContact(props) {
  const { classes,
          group,
          groupsList,
          handleChange
        } = props

  const getListGroups = function () {
    return groupsList.map((item) => (
      <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
    ))
  }

  return (
    <Grid container spacing={8} alignItems="flex-end" className={classes.container}>
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
            {getListGroups()}
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
  )
}

SelectGroupContact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect((state) => ({
                        groupsList: state.groups
                      }))(withStyles(styles)(SelectGroupContact))