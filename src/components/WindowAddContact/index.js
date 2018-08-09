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
import {addContact} from '../../AC'

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
        this.state = {
            id: Date.now(),
            firstName: '',
            middleName: '',
            lastName: '',
            phoneNumber: '',
            phoneNumberClass: '',
            dateOfBirth: '',
            contactGroup: 'none',
            gender: 'male'
        }
        this.hideThisWindows = this.props.handlerClose
        this.showWindowContactInfo = this.props.showWindowContactInfo
        this.handleFormFields = this.handleFormFields.bind(this)
        this.handlerButtonSave = this.handlerButtonSave.bind(this)
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

    handlerButtonSave () {
        const {addContact} = this.props
        const objContact = Object.assign({}, this.state)
        addContact(objContact)
        this.hideThisWindows()
        this.showWindowContactInfo(this.state.id)
    }

    render() {
        const { classes, isShow} = this.props;
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
                                    contactGroup={this.state.contactGroup}
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
                                <Button color="secondary" className={classes.button} onClick={this.hideThisWindows}>
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

export default connect(null, { addContact })(withStyles(styles)(WindowAddContact))