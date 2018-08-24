import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendarOutlined'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { styles } from './styles'

function BackgroundContactList(props) {
  const { classes, showWindowAddContact, sidebarState } = props

  const getRootStyleClass = function (leftElementIsShow) {
    const { classes } = props
    if (leftElementIsShow) {
      return classes.positionForSidebar
    } else {
      return classes.positionWithoutSidebar
    }
  }

  const rootStyleClass = getRootStyleClass(sidebarState)

  return (
    <div className={rootStyleClass}>
      <PermContactCalendarIcon className={classes.icon} />
      <Typography variant="title" className={classes.title}>
        You do not have any contacts yet.
            </Typography>
      <Button color="secondary" className={classes.button} onClick={showWindowAddContact}>
        Add Contact
            </Button>
    </div>
  )
}

BackgroundContactList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect((state) => ({
  sidebarState: state.sidebarState
}))(withStyles(styles)(BackgroundContactList))