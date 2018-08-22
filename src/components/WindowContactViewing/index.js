import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Header from './Header'
import Phone from '@material-ui/icons/Phone'
import DateRange from '@material-ui/icons/DateRange'
import People from '@material-ui/icons/People'
import WC from '@material-ui/icons/Wc'
import {connect} from 'react-redux'
import {hideWindowContactViewing} from '../../AC'

const styles = theme => ({
    root: {
        height: 'auto',
        width: '42%',
        position: 'absolute',
        left: '29%',
        top: '15%',
    },
    gridContainer: {
        paddingBottom: theme.spacing.unit * 2,
    },
    userInfoTitle: {
        marginLeft: '5%',
    },
    userInfoTitleContainer: {
        marginTop: theme.spacing.unit * 2,
    },
    iconsContainer: {
        textAlign: 'center',
    }
})

class WindowContactViewing extends React.Component {
    constructor(props) {
        super(props)
    }

    closeThisWindow = () => {
        const { hideWindowContactViewing } = this.props
        hideWindowContactViewing()
    }

    handlerButtonEdit = (e) => {
        const { showWindowAddContact } = this.props
        const idContact = e.currentTarget.dataset.idContact
        showWindowAddContact(idContact)
    }

    handlerButtonFavorite = (e) => {
        const { changeContactFavorite } = this.props
        const idContact = e.currentTarget.dataset.idContact
        changeContactFavorite(idContact)
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

    render() {
        const { classes,
                idContact,
                contacts,
                deleteContact
              } = this.props

        if (!idContact) return null
        const arrContact = contacts.filter(item => item.id === idContact)
        const objContact = arrContact[0]
        return (
            <div>
                <Paper className={classes.root} elevation={10}>
                    <Header firstName={objContact.firstName}
                            lastName={objContact.lastName}
                            id={objContact.id}
                            isFavorite={objContact.favourite}
                            closeThisWindow={this.closeThisWindow}
                            deleteContact={deleteContact}
                            handlerButtonEdit={this.handlerButtonEdit}
                            handlerButtonFavorite={this.handlerButtonFavorite}
                    />
                    <Grid container spacing={16} alignItems="center" className={classes.gridContainer}>
                        <Grid item xs={12} className={classes.userInfoTitleContainer}>
                            <Typography className={classes.userInfoTitle} variant="title">
                                Contact Details
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.iconsContainer}>
                            <Phone className={classes.icons}/>
                        </Grid>
                        <Grid item xs={10}>
                            {this.getNumberPhone(objContact.phones)}
                        </Grid>
                        <Grid item xs={2} className={classes.iconsContainer}>
                            <DateRange className={classes.icons}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className={classes.headerTitle} variant="title">
                                {this.getDate(objContact.birhtDate)}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.iconsContainer}>
                            <People className={classes.icons}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className={classes.headerTitle} variant="title">
                                {objContact.group}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} className={classes.iconsContainer}>
                            <WC className={classes.icons}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className={classes.headerTitle} variant="title">
                                {objContact.gender}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

WindowContactViewing.propTypes = {
    classes: PropTypes.object.isRequired
}

export default connect((state) => ({
    contacts: state.contacts,
    idContact: state.viewableContact
}), { hideWindowContactViewing }) (withStyles(styles)(WindowContactViewing))