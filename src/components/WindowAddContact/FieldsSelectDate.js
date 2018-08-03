import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateRange from '@material-ui/icons/DateRange';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 520,
  },
});

function FieldsSelectDate(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
        <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
            <DateRange style={{fontSize: 30}}/>
        </Grid>
        <Grid item>
            <TextField
                id="date"
                label="Date of birth"
                type="date"
                defaultValue="2018-01-21"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </Grid>
        </Grid>
    </div>
  );
}

FieldsSelectDate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldsSelectDate);