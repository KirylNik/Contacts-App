import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit
      },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
    },
});

function FieldsFillingName(props) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <AccountCircle style={{fontSize: 50}}/>
                </Grid>
                <Grid item>
                    <TextField
                        id="first-name-input"
                        label="First Name"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="middle-name-input"
                        label="Middle name"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="last-name-input"
                        label="Last name"
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
            </Grid>
        </div>
    )
}

FieldsFillingName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldsFillingName);