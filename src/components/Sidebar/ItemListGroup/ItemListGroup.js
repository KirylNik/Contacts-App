import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import { SORT_CONTACTS_BY_GROUP } from '../constants'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'

function ItemListGroup(props) {
  const { classes,
          itemName,
          countContacts = 0
        } = props
  
  const handlerClickOnGroup = function name(e) {
    const { dispatch } = props
    const targetGroup = e.currentTarget.dataset.groupName
    dispatch({
      type: SORT_CONTACTS_BY_GROUP,
      payload: {targetGroup}
    })
  }

  return (
    <ListItem button className={classes.nested}>
      <BookmarkIcon className={classes.icon} />
      <ListItemText inset
                    primary={`${itemName} (${countContacts})`}
                    className={classes.itemText}
                    data-group-name={itemName}
                    onClick={handlerClickOnGroup}
      />
      <Edit className={classes.icon} />
      <Delete className={classes.icon} />
    </ListItem>
  )
}

ItemListGroup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect()(withStyles(styles)(ItemListGroup))