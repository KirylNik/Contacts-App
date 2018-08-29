import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import { styles } from './styles'

class SettingsBlock extends React.Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { classes } = this.props;

    return (
      <List component="nav" className={classes.root}>
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset primary="Settings" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Some settings" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

SettingsBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SettingsBlock)