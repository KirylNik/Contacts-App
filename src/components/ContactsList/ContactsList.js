import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AccountCircle from '@material-ui/icons/AccountCircle'
import BackgroundContactList from './BackgroundContactList/BackgroundContactList'
import StarIcon from '../icons/StarIcon'
import { withStyles } from '@material-ui/core/styles'
import { getListAllContacts } from './actions'
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

    getBackgroundContactList = () => {
        if (!this.state.quantityDisplayContacts) {
            const {showWindowAddContact} = this.props
            return <BackgroundContactList showWindowAddContact = {showWindowAddContact}/>
        }
    }

    getTypeGroup = (groupsArr) => {
        if (!groupsArr) {
            return ''
        } else {
            return groupsArr.join()
        }
    }

    getDate = (date) => {
        if (!date) {
            return ''
        } else {
            const day = new Date(date).getDate()
            const month = new Date(date).getMonth()
            const year = new Date(date).getFullYear()

            return `${day}/${month}/${year}`
        }
    }
    
    getNumberPhone = (phonesArr) => {
        const { classes } = this.props

        const arrPhonesElem =  phonesArr.map((item) => 
            <Typography variant="title" className={classes.smallFontSize} key={Date.now()}>
                {`${item.type}: ${item.number}`}
            </Typography>
        )

        return arrPhonesElem
    }

    handlerButtonEdit = (e) => {
        const { showWindowAddContact } = this.props
        const idContact = e.currentTarget.dataset.idContact
        showWindowAddContact(idContact)
    }

    handlerButtonFavorite = (e) =>{
        const { changeContactFavorite } = this.props
        const idContact = e.currentTarget.dataset.idContact
        const stateFavourite = e.currentTarget.dataset.stateFavourite === 'false' ? false : true
        e.currentTarget.dataset.stateFavourite = !stateFavourite
        changeContactFavorite(idContact, !stateFavourite)
    }

    getListElem = (item) => {
        const { classes,
                deleteContact,
              } = this.props
            return (
                <div key={item.id}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={1}>
                            <Typography variant="title" className={classes.capitalLetter}>
                                {item.firstName[0].toUpperCase()}
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
                            {this.getNumberPhone(item.phones)}
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="title" className={classes.smallFontSize}>
                                {this.getDate(item.birhtDate)}
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
                                        data-state-favourite={item.favourite}
                            >
                                <StarIcon isActive={item.favourite}/>
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

    componentWillReceiveProps = () => {
        const { contacts } = this.props
        this.setQuantityDisplayContacts(contacts.length-1)
    }

    componentWillMount = () => {
        const { contacts, getListAllContacts } = this.props
        getListAllContacts()
        this.setQuantityDisplayContacts(contacts.length)
    }

    render() {
        const { classes, contacts } = this.props

        if (!contacts.length) {
            return null
        }

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
//   contacts: PropTypes.array
}

export default connect((state) => ({
    contacts: state.contacts
}), { getListAllContacts })(withStyles(styles)(UsersList))