import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import ContactsIcon from '@material-ui/icons/Contacts'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ItemListGroup from '../ItemListGroup/ItemListGroup'
import { getListAllContacts } from '../actions'
import { connect } from 'react-redux'
import { SORT_CONTACTS_BY_FAVORITES } from '../constants'
import { styles } from './styles'

class MainBlock extends React.Component {
  state = {
    open: false,
  }

  handlerButtonFavorites = () => {
    const { dispatch } = this.props
    dispatch({
      type: SORT_CONTACTS_BY_FAVORITES
    })
  }

  handlerButtonContacts = () => {
    const { dispatch } = this.props
    dispatch(getListAllContacts())
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }

  getListGroups = () => {
    return <ItemListGroup itemName={'Home'} countContacts={2} />
  }

  render() {
    const { classes } = this.props;
    const listGroups = this.getListGroups()

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handlerButtonContacts}>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Contacts" />
          </ListItem>
          <ListItem button onClick={this.handlerButtonFavorites}>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText inset primary="Favorites" />
          </ListItem>
          <ListItem button onClick={this.handleClick}>
            <ListItemText inset primary="Groups" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {listGroups}
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}

MainBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect()(withStyles(styles)(MainBlock))