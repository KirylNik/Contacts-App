import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AccountCircle from '@material-ui/icons/AccountCircle'
import BackgroundContactList from './BackgroundContactList/BackgroundContactList'
import IsFavoriteIcon from '../icons/IsFavoriteIcon'
import { getDate } from './utils/getDate'
import { getTypeGroup } from './utils/getTypeGroup'
import { withStyles } from '@material-ui/core/styles'
import { getListAllContacts } from './actions/getListAllContacts'
import { setViewableContact } from './actions/setViewableContact'
import { connect } from 'react-redux'
import { styles } from './styles'

class UsersList extends React.Component {
  state = {
    quantityDisplayContacts: 0
  }

  setQuantityDisplayContacts = (value = 0) => {
    this.setState({
      quantityDisplayContacts: value
    })
  }

  getBackgroundContactList = (contacts) => {
    if (!contacts.length) {
      const { showWindowAddContact } = this.props
      return <BackgroundContactList showWindowAddContact={showWindowAddContact} />
    }
  }

  handlerButtonEdit = (e) => {
    const { showWindowAddContact } = this.props
    const idContact = e.currentTarget.dataset.idContact
    showWindowAddContact({idContact})
  }

  handlerButtonFavorite = (e) => {
    const { changeContactFavorite } = this.props
    const idContact = e.currentTarget.dataset.idContact
    const stateFavourite = e.currentTarget.dataset.stateFavourite === 'false' ? false : true

    e.currentTarget.dataset.stateFavourite = !stateFavourite
    changeContactFavorite(idContact, !stateFavourite)
  }

  showWindowContactViewing = (e) => {
    const { setViewableContact } = this.props
    const idContact = e.currentTarget.dataset.idContact
    setViewableContact(idContact)
  }

  getNumberPhone = (phonesArr) => {
    const { classes } = this.props
    const arrPhonesElem = phonesArr.map((item) =>
      <Typography
        variant="title"
        className={classes.smallFontSize}
        key={Date.now()}
      >
        {`${item.type}: ${item.number}`}
      </Typography>
    )

    return arrPhonesElem
  }

  getListElem = (contacts) => {
    const { classes, deleteContact } = this.props
    if (contacts.length) {
      return contacts.map((item) =>
        <Grid container spacing={8} alignItems="center" key={item.id}>
          <Grid item xs={1}>
            <Typography variant="title" className={classes.capitalLetter}>
              {item.firstName[0].toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <AccountCircle className={classes.accountLogo} />
          </Grid>
          <Grid item xs={3} 
            className={classes.nameContact}
            onClick={this.showWindowContactViewing}
            data-id-contact={item.id}
          >
            <Typography variant="title">
              {`${item.firstName} ${item.lastName}`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            {this.getNumberPhone(item.phones, classes)}
          </Grid>
          <Grid item xs={1}>
            <Typography variant="title" className={classes.smallFontSize}>
              {getDate(item.birhtDate)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="title" className={classes.smallFontSize}>
              {getTypeGroup(item.group)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="title" className={classes.smallFontSize}>
              {item.gender}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              className={classes.buttonContainer}
              onClick={this.handlerButtonFavorite}
              data-id-contact={item.id}
              data-state-favourite={item.favourite}
            >
              <IsFavoriteIcon isFavorite={item.favourite} />
            </IconButton>
            <IconButton
              className={classes.buttonContainer}
              onClick={this.handlerButtonEdit}
              data-id-contact={item.id}
            >
              <EditIcon className={classes.button} />
            </IconButton>
            <IconButton
              className={classes.buttonContainer}
              onClick={deleteContact}
              data-id-contact={item.id}
            >
              <DeleteIcon className={classes.button} />
            </IconButton>
          </Grid>
        </Grid>
      )
    }
  }

  componentWillMount = () => {
    const { getListAllContacts } = this.props
    getListAllContacts()
  }

  render() {
    const { classes, contacts } = this.props
    const backgroundContactList = this.getBackgroundContactList(contacts)
    const listElem = this.getListElem(contacts)

    return (
      <div className={classes.root}>
        {backgroundContactList}
        {listElem}
      </div>
    )
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect((state) => ({
  contacts: state.contacts
}), { getListAllContacts, setViewableContact })(withStyles(styles)(UsersList))