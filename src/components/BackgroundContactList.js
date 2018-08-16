import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendarOutlined'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'

const styles = theme => ({
    positionForSidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        left: '45%',
        top: '40%',
    },
    positionWithoutSidebar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        left: '35%',
        top: '40%',
    },
    button: {
        margin: theme.spacing.unit,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: theme.spacing.unit * 10,
        opacity: 0.1,
    },
    title: {
        opacity: 0.2,
    }
})

class BackgroundContactList extends React.Component {
    constructor(props) {
        super(props)
        this.getRootStyleClass = this.getRootStyleClass.bind(this)
    }

    getRootStyleClass (leftElementIsShow) {
        const { classes } = this.props
        if (leftElementIsShow) {
            return classes.positionForSidebar
        } else {
            return classes.positionWithoutSidebar
        }
    }

    render () {
        const { classes, showWindowAddContact, sidebarState } = this.props
        const rootStyleClass = this.getRootStyleClass(sidebarState)

        return (
            <div className={rootStyleClass}>
                <PermContactCalendarIcon className={classes.icon}/>
                <Typography variant="title" className={classes.title}>
                    You do not have any contacts yet.
                </Typography>
                <Button color="secondary" className={classes.button} onClick={showWindowAddContact}>
                    Add Contact
                </Button>
            </div>
        )
    }
}

BackgroundContactList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect((state) => ({
    sidebarState: state.sidebarState
}))(withStyles(styles)(BackgroundContactList))