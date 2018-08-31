import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Header from './Header/Header'
import Phone from '@material-ui/icons/Phone'
import DateRange from '@material-ui/icons/DateRange'
import People from '@material-ui/icons/People'
import WC from '@material-ui/icons/Wc'
import { getArrayElemByID } from '../../utils/getArrayElemByID'
import { getDate } from '../../utils/gettersOfDataTypes/getDate'
import { getTypeGroup } from '../../utils/gettersOfDataTypes/getTypeGroup'
import { getNumberPhone } from '../../utils/gettersOfDataTypes/getNumberPhone'
import { connect } from 'react-redux'
import { setViewableContact } from './actions'
import { styles } from './styles'

function WindowContactViewing(props) {
  const { classes, idContact, contacts, deleteContact } = props
  if (!idContact) return null
  const objContact = getArrayElemByID(contacts, idContact)

  const closeThisWindow = function () {
    const { setViewableContact } = props
    setViewableContact(null)
  }

  const handlerButtonEdit = function (e) {
    const { showWindowAddContact } = props
    const idContact = e.currentTarget.dataset.idContact
    showWindowAddContact({idContact})
  }

  const handlerButtonFavorite = function (e) {
    const { changeContactFavorite } = props
    const idContact = e.currentTarget.dataset.idContact
    changeContactFavorite(idContact)
  }

  return (
    <Paper className={classes.root} elevation={10}>
      <Header
        firstName={objContact.firstName}
        lastName={objContact.lastName}
        id={objContact.id}
        isFavorite={objContact.favourite}
        closeThisWindow={closeThisWindow}
        deleteContact={deleteContact}
        handlerButtonEdit={handlerButtonEdit}
        handlerButtonFavorite={handlerButtonFavorite}
      />
      <Grid container spacing={16} alignItems="center" className={classes.gridContainer}>
        <Grid item xs={12} className={classes.userInfoTitleContainer}>
          <Typography className={classes.userInfoTitle} variant="title">
            Contact Details
        </Typography>
        </Grid>
        <Grid item xs={2} className={classes.iconsContainer}>
          <Phone className={classes.icons} />
        </Grid>
        <Grid item xs={10}>
          {getNumberPhone(objContact.phones, classes.smallFontSize)}
        </Grid>
        <Grid item xs={2} className={classes.iconsContainer}>
          <DateRange className={classes.icons} />
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.headerTitle} variant="title">
            {getDate(objContact.birhtDate)}
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.iconsContainer}>
          <People className={classes.icons} />
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.headerTitle} variant="title">
            {getTypeGroup(objContact.group)}
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.iconsContainer}>
          <WC className={classes.icons} />
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.headerTitle} variant="title">
            {objContact.gender}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

WindowContactViewing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect((state) => ({
  contacts: state.contacts,
  idContact: state.viewableContact
}), { setViewableContact })(withStyles(styles)(WindowContactViewing))