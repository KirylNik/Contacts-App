import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Cancel from '@material-ui/icons/Cancel'
import StarIcon from '../../icons/StarIcon'
import { styles } from './styles'

function Header(props) {
  const { classes,
    firstName,
    lastName,
    id,
    isFavorite,
    closeThisWindow,
    deleteContact,
    handlerButtonEdit,
    handlerButtonFavorite
  } = props

  return (
    <div className={classes.root}>
      <AccountCircle className={classes.accountLogo} />
      <Typography className={classes.headerTitle} variant="title">
        {`${firstName} ${lastName}`}
      </Typography>
      <IconButton className={classes.buttonLeft}
        onClick={handlerButtonFavorite}
        data-id-contact={id}
      >
        <StarIcon isActive={isFavorite} />
      </IconButton>
      <IconButton className={classes.button}
        onClick={handlerButtonEdit}
        data-id-contact={id}
      >
        <Edit />
      </IconButton>
      <IconButton className={classes.button}
        onClick={deleteContact}
        data-id-contact={id}
      >
        <Delete />
      </IconButton>
      <IconButton className={classes.button} onClick={closeThisWindow}>
        <Cancel />
      </IconButton>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)