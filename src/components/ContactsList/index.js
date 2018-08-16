import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import BackgroundContactList from '../BackgroundContactList'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import StarIcon from '../icons/StarIcon'
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        marginRight: theme.spacing.unit * 3,
    },
        accountLogo: {
            fontSize: '60px',
    },
        capitalLetter: {
            textAlign: 'center',
    },
    smallFontSize: {
        fontSize: theme.typography.fontSize,
        textAlign: 'center',
    },
    button: {
        fontSize: theme.typography.fontSize * 1.3,
    },
    buttonContainer: {
        width: theme.typography.fontSize * 1.5,
        height: theme.typography.fontSize * 1.5,
    }
})

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantityDisplayContacts: 0
        }
        this.getListElem = this.getListElem.bind(this)
        this.getTypeGroup = this.getTypeGroup.bind(this)
        this.getNumberPhone = this.getNumberPhone.bind(this)
        this.handlerButtonEdit = this.handlerButtonEdit.bind(this)
        this.handlerButtonFavorite = this.handlerButtonFavorite.bind(this)
        this.getBackgroundContactList = this.getBackgroundContactList.bind(this)
        this.setQuantityDisplayContacts = this.setQuantityDisplayContacts.bind(this)
    }

    setQuantityDisplayContacts (value) {
        this.setState({
            quantityDisplayContacts: value
        })
    }

    getBackgroundContactList () {
        if (!this.state.quantityDisplayContacts) {
            const {showWindowAddContact} = this.props
            return <BackgroundContactList showWindowAddContact = {showWindowAddContact}/>
        }
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
            return `${phoneObj.mobile} (mobile)`
        } else if (phoneObj.home) {
            return `${phoneObj.home} (home)`
        } else {
            return `${phoneObj.work} (work)`
        }
    }

    handlerButtonEdit (e) {
        const { showWindowAddContact } = this.props
        const idContact = e.currentTarget.dataset.idContact
        showWindowAddContact(idContact)
    }

    handlerButtonFavorite (e) {
        const { changeContactFavorite } = this.props
        const idContact = e.currentTarget.dataset.idContact
        changeContactFavorite(idContact)
    }

    getListElem (item) {
        const { classes,
                deleteContact,
              } = this.props

            return (
                <div key={item.id}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={1}>
                            <Typography variant="title" className={classes.capitalLetter}>
                                {item.firstName[0]}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <AccountCircle className={classes.accountLogo}/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="title">
                                {`${item.firstName} ${item.lastName}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="title" className={classes.smallFontSize}>
                                {this.getNumberPhone(item.phoneNumberClass)}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="title" className={classes.smallFontSize}>
                                {item.dateOfBirth}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="title" className={classes.smallFontSize}>
                                {this.getTypeGroup(item.group)}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="title" className={classes.smallFontSize}>
                                {item.gender}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton className={classes.buttonContainer}
                                        onClick={this.handlerButtonFavorite}
                                        data-id-contact={item.id}
                            >
                                <StarIcon isActive={item.isFavorite}/>
                            </IconButton>
                            <IconButton className={classes.buttonContainer}
                                        onClick={this.handlerButtonEdit}
                                        data-id-contact={item.id}    
                            >
                                <EditIcon className={classes.button}/>
                            </IconButton>
                            <IconButton className={classes.buttonContainer}
                                        onClick={deleteContact}
                                        data-id-contact={item.id}
                            >
                                <DeleteIcon className={classes.button}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
            )
    }

    componentWillReceiveProps () {
        const { contacts } = this.props
        this.setQuantityDisplayContacts(contacts.length-1)
    }

    componentWillMount () {
        const { contacts } = this.props
        this.setQuantityDisplayContacts(contacts.length)
    }

    render() {
        const { classes, contacts } = this.props
        const listElem = contacts.map(this.getListElem)
        const backgroundContactList = this.getBackgroundContactList()
        
        return (
            <div className={classes.root}>
                {listElem}
                {backgroundContactList}
            </div>
        )
    }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
  // from connect:
  contacts: PropTypes.array
}

export default connect((state) => ({
    contacts: state.contacts
}))(withStyles(styles)(UsersList))