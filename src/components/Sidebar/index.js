import SettingsBlock from './SettingsBlock'
import MainBlock from './MainBlock'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    sidebarItem: {
        marginBottom: theme.spacing.unit * 2,
    },
    root: {
        backgroundColor: "lightgray",
        height: "100%",
    }
});

function Sidebar(props) {
    const { classes, isShow} = props;
    if (!isShow) return null

        return (
            <div className={classes.root}>
                <Paper className={classes.sidebarItem} elevation={8}>
                    <MainBlock/>
                </Paper>
                <Paper>
                    <SettingsBlock className={classes.sidebarItem} elevation={8}/>
                </Paper>
            </div>
        )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  isShow: PropTypes.bool.isRequired
};

export default withStyles(styles)(Sidebar);