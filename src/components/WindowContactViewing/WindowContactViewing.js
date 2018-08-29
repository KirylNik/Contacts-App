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
import { connect } from 'react-redux'
import { SET_VIEWABLE_CONTACT } from './constants'
import { styles } from './styles'

function WindowContactViewing(props) {
  const { classes, idContact, contacts, deleteContact } = props

  if (!idContact) return null

  const arrContact = contacts.filter(item => item.id == idContact)
  const objContact = arrContact[0]

  const closeThisWindow = function () {
    const { dispatch } = props
    
    dispatch({
      type: SET_VIEWABLE_CONTACT,
      payload: { id: null }
    })
  }

  const handlerButtonEdit = function (e) {
    const { showWindowAddContact } = props
    const idContact = e.currentTarget.dataset.idContact
    showWindowAddContact(idContact)
  }

  const handlerButtonFavorite = function (e) {
    const { changeContactFavorite } = props
    const idContact = e.currentTarget.dataset.idContact
    changeContactFavorite(idContact)
  }

  const getDate = function (date) {
    if (!date) {
      return ''
    } else {
      const day = new Date(date).getDate()
      const month = new Date(date).getMonth()
      const year = new Date(date).getFullYear()

      return `${day}/${month + 1}/${year}`
    }
  }

  const getNumberPhone = function (phonesArr) {
    const { classes } = props

    const arrPhonesElem = phonesArr.map((item) =>
      <Typography variant="title" className={classes.smallFontSize} key={Date.now()}>
        {`${item.type}: ${item.number}`}
      </Typography>
    )

    return arrPhonesElem
  }

  return (
    <Paper className={classes.root} elevation={10}>
      <Header firstName={objContact.firstName}
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
          {getNumberPhone(objContact.phones)}
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
            {objContact.group}
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
  classes: PropTypes.object.isRequired
}

export default connect((state) => ({
  contacts: state.contacts,
  idContact: state.viewableContact
}))(withStyles(styles)(WindowContactViewing))