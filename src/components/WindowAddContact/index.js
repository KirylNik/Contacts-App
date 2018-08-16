import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FieldsFillingName from './FieldsFillingName'
import FieldsFillingPhone from './FieldsFillingPhone'
import FieldsSelectDate from './FieldsSelectDate'
import SelectGroupContact from './SelectGroupContact'
import SelectGender from './SelectGender'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Phone from '@material-ui/icons/Phone'
import DateRange from '@material-ui/icons/DateRange'
import People from '@material-ui/icons/People'
import Grey from '@material-ui/core/colors/grey'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {addContact, updateContact} from '../../AC'

const headerBackground = Grey[300]
const headerTextColor = Grey[500]

const styles = theme => ({
    root: {
        height: 'auto',
        width: '42%',
        position: 'absolute',
        left: '29%',
        top: '15%',
    },
    header: {
        background: headerBackground,
    },
    headerTitle: {
        color: headerTextColor,
        paddingLeft: theme.spacing.unit * 2,
    },
    gridContainer: {
        margin: '0px',
        width: 'auto',
    },
    fields: {
        paddingLeft: '30px !important',
        paddingRight: '30px !important',
        paddingTop: '0px !important',
    },
    accountLogo: {
        fontSize: '60px',
        marginBottom: -(theme.spacing.unit * 2),
    },
    accountLogoContainer: {
        paddingTop: '5px !important',
    },
    icons: {
        fontSize: '30px',
        paddingLeft: theme.spacing.unit * 2,
        marginBottom: -(theme.spacing.unit * 2),
    },
    button: {
        margin: theme.spacing.unit,
        fontWeight: 'bold',
        margin: '0px',
    },
    SelectGroupContact: {
        paddingLeft: '30px !important',
        paddingRight: '10px !important',
    }
})

class WindowAddContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.setDefaultState()
        this.hideThisWindows = this.props.handlerClose
        this.showWindowContactInfo = this.props.showWindowContactInfo
        this.handlerButtonCancel = this.handlerButtonCancel.bind(this)
        this.setDefaultState = this.setDefaultState.bind(this)
        this.handleFormFields = this.handleFormFields.bind(this)
        this.handlerButtonSave = this.handlerButtonSave.bind(this)
    }

    setDefaultState () {
        return {
            id: Date.now(),
            firstName: '',
            middleName: '',
            lastName: '',
            phoneNumber: '',
            phoneNumberClass: '',
            dateOfBirth: '',
            group: 'none',
            gender: 'Male',
            nowUpdate: false
        }
    }

    componentWillReceiveProps (props) {
        const { isShow, idEditableContact, contacts} = props

        if (idEditableContact && isShow) {
            const arrContact = contacts.filter(item => item.id == idEditableContact)
            const objContact = arrContact[0]

            this.setState({
                id: objContact.id,
                firstName:  objContact.firstName,
                middleName: objContact.middleName,
                lastName: objContact.lastName,
                phoneNumber: this.getNumberPhone(objContact.phoneNumberClass),
                phoneNumberClass: this.getClassNumberPhone(objContact.phoneNumberClass),
                dateOfBirth: objContact.dateOfBirth,
                group: this.getTypeGroup(objContact.group),
                gender: objContact.gender,
                nowUpdate: true
            })
        }
    }

    handleFormFields (name) {
        return (
            event => {
                this.setState({
                  [name]: event.target.value,
                })
            }
        )
    }

    handlerButtonCancel () {
        this.hideThisWindows()
        this.setState(this.setDefaultState())
    }

    handlerButtonSave () {
        const {addContact, updateContact} = this.props
        const objContact = Object.assign({}, this.state)
        if (this.state.nowUpdate) {
            updateContact(objContact)
        } else {
            addContact(objContact)
        }
        this.hideThisWindows()
        this.showWindowContactInfo(this.state.id)
        this.setState(this.setDefaultState())
    }

    getTypeGroup (groupObj) {

        if (groupObj.work) {
            return 'Work'
        } else if (groupObj.family) {
            return 'Family'
        } else {
            return 'Frends'
        }
    }
    
    getNumberPhone (phoneObj) {
        if (phoneObj.mobile) {
            return phoneObj.mobile
        } else if (phoneObj.home) {
            return phoneObj.home
        } else {
            return phoneObj.work
        }
    }

    getClassNumberPhone (phoneObj) {
        if (phoneObj.mobile) {
            return 'Mobile'
        } else if (phoneObj.home) {
            return 'Home'
        } else {
            return 'Work'
        }
    }

    render() {
        const { classes, isShow, idEditableContact, contacts } = this.props;
        if (!isShow) return null

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
                                <AccountCircle className={classes.accountLogo}/>
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
                                <Phone className={classes.icons}/>
                            </Grid>
                            <Grid item xs={11} className={classes.fields}>
                                <FieldsFillingPhone
                                    phoneNumber={this.state.phoneNumber}
                                    phoneNumberClass={this.state.phoneNumberClass}
                                    handleChange={this.handleFormFields}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <DateRange className={classes.icons}/>
                            </Grid>
                            <Grid item xs={11} className={classes.fields}>
                                <FieldsSelectDate
                                    dateOfBirth={this.state.dateOfBirth}
                                    handleChange={this.handleFormFields}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <People className={classes.icons}/>
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