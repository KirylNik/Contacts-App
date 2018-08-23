import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import SettingsBlock from './SettingsBlock/SettingsBlock'
import MainBlock from './MainBlock/MainBlock'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { styles } from './styles'

function Sidebar(props) {
    const { classes, sidebarState } = props;
    if (!sidebarState) return null

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
  classes: PropTypes.object.isRequired
}

export default connect((state) => ({
    sidebarState : state.sidebarState
}))(withStyles(styles)(Sidebar))