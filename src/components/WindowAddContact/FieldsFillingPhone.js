import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Phone from '@material-ui/icons/Phone';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    phoneField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 340,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
    },
});

function FieldsFillingName(props) {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                    <Phone style={{fontSize: 30}}/>
                </Grid>
                <Grid item>
                    <TextField
                        id="phone-number-input"
                        label="Phone number"
                        className={classes.phoneField}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <Select
                            // value={this.state.age}
                            // onChange={this.handleChange}
                            displayEmpty
                            name="phone"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value={'Mobile'}>Mobile</MenuItem>
                            <MenuItem value={'Home'}>Home</MenuItem>
                            <MenuItem value={'Work'}>Work</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

FieldsFillingName.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldsFillingName);