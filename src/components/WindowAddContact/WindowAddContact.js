import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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
import { connect } from 'react-redux'
import { addContact, updateContact } from './actions'
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

  componentWillMount() {
    const { idEditableContact, contacts } = this.props

    if (idEditableContact) {
      const arrContact = contacts.filter(item => item.id == idEditableContact)
      const objContact = arrContact[0]
      this.setState({
        id: objContact.id,
        firstName: objContact.firstName,
        middleName: objContact.middleName,
        lastName: objContact.lastName,
        phoneNumber: this.getNumberPhone(objContact.phones),
        phoneNumberClass: this.getClassNumberPhone(objContact.phones),
        birhtDate: this.getDate(objContact.birhtDate),
        group: this.getTypeGroup(objContact.group),
        gender: objContact.gender,
        favourite: objContact.favourite,
        nowUpdate: true
      })
    }
  }

  handleFormFields = (name) => {
    return (
      event => {
        this.setState({
          [name]: event.target.value,
        })
      }
    )
  }

  handlerButtonCancel = () => {
    this.hideThisWindows()
    this.setState(this.setDefaultState())
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

  handlerButtonSave = () => {
    const { addContact, updateContact } = this.props
    const objContact = this.getObjectContact()
    if (this.state.nowUpdate) {
      updateContact(objContact)
    } else {
      addContact(objContact)
    }
    this.hideThisWindows()
    this.setState(this.setDefaultState())
  }

  getTypeGroup = (groupArr) => {
    return 'Friends'
  }

  getNumberPhone = (phonesArr) => {
    return phonesArr[0].number
  }

  getClassNumberPhone = (phonesArr) => {
    return phonesArr[0].type
  }

  getDate = (date) => {
    if (!date) {
      return ''
    } else {
      let day = new Date(date).getDate()
      let month = new Date(date).getMonth()
      let year = new Date(date).getFullYear()

      month < 10 ? (month = '0' + (month + 1)) : (month + 1)
      day < 10 ? (day = '0' + day) : day

      return `${year}-${month}-${day}`
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div>
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
                <Button color="secondary" className={classes.button} onClick={this.handlerButtonCancel}>
                  Cancel
                                </Button>
                <Button color="secondary" className={classes.button} onClick={this.handlerButtonSave}>
                  Save
                                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
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