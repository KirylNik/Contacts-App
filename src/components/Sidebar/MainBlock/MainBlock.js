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
    const { groups } = this.props
    return groups.map((item) =>
                        <ItemListGroup itemName={item.name}
                                       countContacts={2}
                                       key={item.id}
                        />
                      )
  }

  render() {
    const { classes } = this.props;
    const listGroups = this.getListGroups()

    return (
      <List component="nav" className={classes.root}>
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
    )
  }
}

MainBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect((state) => ({
  groups: state.groups
}))(withStyles(styles)(MainBlock))