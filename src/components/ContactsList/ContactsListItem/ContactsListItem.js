import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IsFavoriteIcon from '../../icons/IsFavoriteIcon'
import { setViewableContact } from '../actions/setViewableContact'
import { getDate } from '../../../utils/gettersOfDataTypes/getDate'
import { getTypeGroup } from '../../../utils/gettersOfDataTypes/getTypeGroup'
import { getNumberPhone } from '../../../utils/gettersOfDataTypes/getNumberPhone'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { styles } from './styles'

function ContactsListItem(props) {
  const { contactObj, classes, deleteContact } = props

  const handlerButtonEdit = function (e) {
    const { showWindowAddContact } = props
    const idContact = e.currentTarget.dataset.idContact
    showWindowAddContact({ idContact })
  }

  const handlerButtonFavorite = function (e) {
    const { changeContactFavorite } = props
    const idContact = e.currentTarget.dataset.idContact
    const stateFavourite = e.currentTarget.dataset.stateFavourite === 'false' ? false : true

    e.currentTarget.dataset.stateFavourite = !stateFavourite
    changeContactFavorite(idContact, !stateFavourite)
  }

  const showWindowContactViewing = function (e) {
    const { setViewableContact } = props
    const idContact = e.currentTarget.dataset.idContact
    setViewableContact(idContact)
  }

  return (
    <Grid container spacing={8} alignItems="center">
      <Grid item xs={1}>
        <Typography variant="title" className={classes.capitalLetter}>
          {contactObj.firstName[0].toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <AccountCircle className={classes.accountLogo} />
      </Grid>
      <Grid item xs={3}
        className={classes.nameContact}
        onClick={showWindowContactViewing}
        data-id-contact={contactObj.id}
      >
        <Typography variant="title">
          {`${contactObj.firstName} ${contactObj.lastName}`}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        {getNumberPhone(contactObj.phones, classes.smallFontSize)}
      </Grid>
      <Grid item xs={1}>
        <Typography variant="title" className={classes.smallFontSize}>
          {getDate(contactObj.birhtDate)}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="title" className={classes.smallFontSize}>
          {getTypeGroup(contactObj.group)}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="title" className={classes.smallFontSize}>
          {contactObj.gender}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          className={classes.buttonContainer}
          onClick={handlerButtonFavorite}
          data-id-contact={contactObj.id}
          data-state-favourite={contactObj.favourite}
        >
          <IsFavoriteIcon isFavorite={contactObj.favourite} />
        </IconButton>
        <IconButton
          className={classes.buttonContainer}
          onClick={handlerButtonEdit}
          data-id-contact={contactObj.id}
        >
          <EditIcon className={classes.button} />
        </IconButton>
        <IconButton
          className={classes.buttonContainer}
          onClick={deleteContact}
          data-id-contact={contactObj.id}
        >
          <DeleteIcon className={classes.button} />
        </IconButton>
      </Grid>
    </Grid>
  )
}

ContactsListItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(null, { setViewableContact })(withStyles(styles)(ContactsListItem))