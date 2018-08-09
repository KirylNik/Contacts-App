import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: '0px',
        marginBottom: '0px',
        width: '100%',
    },
    gridTextField: {
        paddingLeft: '10px'
    }
});

function FieldsFillingName(props) {
    const { classes,
            valueFirstName,
            valueMiddleName,
            valueLastName,
            handleChange
          } = props

    return (
        <div className={classes.container}>
            <Grid container spacing={16} alignItems="flex-end">
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
        </div>
    )
}

FieldsFillingName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldsFillingName);