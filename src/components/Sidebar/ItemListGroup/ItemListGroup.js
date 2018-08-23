import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'

function ItemListGroup(props) {
    const { classes,
            itemName,
            countContacts = 0 } = props;

        return (
            <ListItem button className={classes.nested}>
                <BookmarkIcon className={classes.icon}/>
                <ListItemText inset
                              primary={`${itemName} (${countContacts})`}
                              className={classes.itemText}/>
                <Edit className={classes.icon}/>
                <Delete className={classes.icon}/>
            </ListItem>
        )
}

ItemListGroup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ItemListGroup)