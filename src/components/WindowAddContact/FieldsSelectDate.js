import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: '0px',
  },
})

function FieldsSelectDate(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
        <TextField
            id="date"
            label="Date of birth"
            type="date"
            defaultValue="2018-01-21"
            fullWidth={true}
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
    </div>
  );
}

FieldsSelectDate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldsSelectDate);