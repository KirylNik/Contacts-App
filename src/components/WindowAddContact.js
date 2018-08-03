import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '300px',
    height: '300px'
  },
});

function WindowAddContact(props) {
  const { classes, isDisplay } = props;
    console.log(isDisplay)
  if (!isDisplay) return null

  return (
    
    <div>
      <Paper className={classes.root} elevation={10}>
        <AccountCircle style={{ fontSize: 40 }}/>
      </Paper>
    </div>
  );
}

WindowAddContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WindowAddContact);