import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  formControl: {
    margin: '0px',
  },
  group: {
    marginLeft: theme.spacing.unit,
    flexDirection: 'row',
  },
  label: {
      marginRight: theme.spacing.unit * 2,
  },
});

class SelectGender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'female',
        }
        this.handleChange = this.handleChange.bind(this)
    }

  handleChange (event) {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8} alignItems="center">
            <Grid item xs={2} className={classes.label}>
                <Typography>
                    Gender
                </Typography>
            </Grid>
            <Grid item>
                <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
      </div>
    );
  }
}

SelectGender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectGender);