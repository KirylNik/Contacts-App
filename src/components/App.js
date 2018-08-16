import React, { Component } from 'react'
import AppHeader from './Header'
import ButtonAddContact from './ButtonAddContact'
import WindowAddContact from './WindowAddContact/index'
import Sidebar from './Sidebar/index'
import Grid from '@material-ui/core/Grid'
import WindowContactViewing from './WindowContactViewing/index'
import ContactsList from './ContactsList'
import {connect} from 'react-redux'
import {deleteContact, changeStateFavorite} from '../AC'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowAddContactIsShow: false,
            windowContactInfoIsShow: false,
            idViewedContact: null,
            idEditableContact: null
        }
        this.handlerButtonDeleteContact = this.handlerButtonDeleteContact.bind(this)
        this.showWindowAddContact = this.showWindowAddContact.bind(this)
        this.closeWindowAddContact = this.closeWindowAddContact.bind(this)
        this.showWindowContactInfo = this.showWindowContactInfo.bind(this)
        this.closeWindowContactInfo = this.closeWindowContactInfo.bind(this)
        this.changeContactFavorite = this.changeContactFavorite.bind(this)
    }

    showWindowAddContact (arg) {
        const id = typeof arg == 'string' ? arg : null
        this.setState({
            windowAddContactIsShow: true,
            windowContactInfoIsShow: false,
            idEditableContact: id
        })
    }

    closeWindowAddContact () {
        this.setState({
            windowAddContactIsShow: false
        })
    }

    showWindowContactInfo (id) {
        this.setState({
            idViewedContact: id,
            windowContactInfoIsShow: true
        })
    }

    closeWindowContactInfo () {
        this.setState({
            windowContactInfoIsShow: false
        })
    }

    handlerButtonDeleteContact (e) {
        const {deleteContact} = this.props
        const idDeleteContact = e.currentTarget.dataset.idContact
        this.closeWindowContactInfo()
        deleteContact(idDeleteContact)
    }

    changeContactFavorite (id) {
        const {changeStateFavorite} = this.props
        changeStateFavorite(id)
    }

    render () {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <AppHeader handlerSidebar={this.hundlerShowSidebar}/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={2}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs={9}>
                        <ContactsList deleteContact = {this.handlerButtonDeleteContact}
                                   showWindowAddContact = {this.showWindowAddContact}
                                   changeContactFavorite = {this.changeContactFavorite}
                                   showWindowAddContact = {this.showWindowAddContact}
                        />
                    </Grid>
                </Grid>
                <WindowAddContact isShow = {this.state.windowAddContactIsShow}
                                  handlerClose = {this.closeWindowAddContact}
                                  showWindowContactInfo = {this.showWindowContactInfo}
                                  idEditableContact = {this.state.idEditableContact}
                />
                <WindowContactViewing isShow = {this.state.windowContactInfoIsShow}
                                      idContact = {this.state.idViewedContact}
                                      closeWindowContactInfo = {this.closeWindowContactInfo}
                                      deleteContact = {this.handlerButtonDeleteContact}
                                      changeContactFavorite = {this.changeContactFavorite}
                                      showWindowAddContact = {this.showWindowAddContact}
                />
                <div onClick={this.showWindowAddContact}>
                    <ButtonAddContact/>
                </div>
            </div>  
        )
    }
}

export default connect(null, { deleteContact, changeStateFavorite })(App)