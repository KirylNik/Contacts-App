import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import FieldsFillingName from './FieldsFillingName/FieldsFillingName'
import FieldsFillingPhone from './FieldsFillingPhone/FieldsFillingPhone'
import FieldsSelectDate from './FieldsSelectDate/FieldsSelectDate'
import SelectGroupContact from './SelectGroupContact/SelectGroupContact'
import SelectGender from './SelectGender/SelectGender'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Phone from '@material-ui/icons/Phone'
import DateRange from '@material-ui/icons/DateRange'
import People from '@material-ui/icons/People'
import Button from '@material-ui/core/Button'
import { getTypeGroup } from '../../utils/gettersOfDataTypes/getTypeGroup'
import { getDate } from './utils/getDate'
import { getArrayElemByID } from '../../utils/getArrayElemByID'
import { connect } from 'react-redux'
import { addContact, updateContact } from './actions/actions'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'

class WindowAddContact extends React.Component {
  state = this.setDefaultState()
  hideThisWindows = this.props.handlerClose

  setDefaultState() {
    return {
      id: null,
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNumber: '',
      phoneNumberClass: '',
      birhtDate: '',
      group: 'none',
      gender: 'Male',
      favourite: false,
      nowUpdate: false
    }
  }

  getObjectContact = () => {
    const objContact = {}

    objContact.id = this.state.id
    objContact.firstName = this.state.firstName
    objContact.middleName = this.state.middleName
    objContact.lastName = this.state.lastName
    objContact.gender = this.state.gender
    objContact.favourite = this.state.favourite
    objContact.group = [this.state.group]
    objContact.phones = [{
      type: this.state.phoneNumberClass,
      number: this.state.phoneNumber
    }]
    objContact.birhtDate = Date.parse(this.state.birhtDate)

    return objContact
  }

  handleFormFields = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handlerButtonCancel = () => {
    this.hideThisWindows()
    this.setState(this.setDefaultState())
  }

  handlerButtonSave = () => {
    const { addContact, updateContact } = this.props
    const objContact = this.getObjectContact()
    this.state.nowUpdate ? updateContact(objContact) : addContact(objContact)
    this.hideThisWindows()
    this.setState(this.setDefaultState())
  }

  componentWillMount() {
    const { idEditableContact, contacts } = this.props

    if (idEditableContact) {
      const objContact = getArrayElemByID(contacts, idEditableContact)
      this.setState({
        id: objContact.id,
        firstName: objContact.firstName,
        middleName: objContact.middleName,
        lastName: objContact.lastName,
        phoneNumber: objContact.phones[0].number,
        phoneNumberClass: objContact.phones[0].type,
        birhtDate: getDate(objContact.birhtDate),
        group: getTypeGroup(objContact.group),
        gender: objContact.gender,
        favourite: objContact.favourite,
        nowUpdate: true
      })
    }
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root} elevation={10}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24} alignItems="center" className={classes.gridContainer}>
            <Grid item xs={12} className={classes.header}>
              <Typography className={classes.headerTitle} variant="title">
                New contact
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.accountLogoContainer}>
              <AccountCircle className={classes.accountLogo} />
            </Grid>
            <Grid item xs={11} className={classes.fields}>
              <FieldsFillingName
                valueFirstName={this.state.firstName}
                valueMiddleName={this.state.middleName}
                valueLastName={this.state.lastName}
                handleChange={this.handleFormFields}
              />
            </Grid>
            <Grid item xs={1}>
              <Phone className={classes.icons} />
            </Grid>
            <Grid item xs={11} className={classes.fields}>
              <FieldsFillingPhone
                phoneNumber={this.state.phoneNumber}
                phoneNumberClass={this.state.phoneNumberClass}
                handleChange={this.handleFormFields}
              />
            </Grid>
            <Grid item xs={1}>
              <DateRange className={classes.icons} />
            </Grid>
            <Grid item xs={11} className={classes.fields}>
              <FieldsSelectDate
                birhtDate={this.state.birhtDate}
                handleChange={this.handleFormFields}
              />
            </Grid>
            <Grid item xs={1}>
              <People className={classes.icons} />
            </Grid>
            <Grid item xs={4} className={classes.SelectGroupContact}>
              <SelectGroupContact
                group={this.state.group}
                handleChange={this.handleFormFields}
              />
            </Grid>
            <Grid item xs={7}>
              <SelectGender
                gender={this.state.gender}
                handleChange={this.handleFormFields}
              />
            </Grid>
            <Grid item xs={12} container justify="flex-end" className={classes.fields}>
              <Button
                color="secondary"
                className={classes.button}
                onClick={this.handlerButtonCancel}
              >
                Cancel
              </Button>
              <Button
                color="secondary"
                className={classes.button}
                onClick={this.handlerButtonSave}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}

WindowAddContact.propTypes = {
  classes: PropTypes.object.isRequired,
  addContact: PropTypes.func.isRequired
}

export default connect((state) => ({
  contacts: state.contacts
}), { addContact, updateContact })(withStyles(styles)(WindowAddContact))