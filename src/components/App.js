import React, { Component } from 'react'
import AppHeader from './Header'
import ButtonAddContact from './ButtonAddContact'
import WindowAddContact from './WindowAddContact/index'
import Sidebar from './Sidebar/index'
import Grid from '@material-ui/core/Grid'
import WindowContactViewing from './WindowContactViewing/index'
import ContactsList from './ContactsList'
import {connect} from 'react-redux'
import {deleteContact, changeStateFavorite, hideWindowContactViewing} from '../AC'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowAddContactIsShow: false,
            idViewedContact: null,
            idEditableContact: null
        }
    }

    showWindowAddContact = (arg) => {
        const {hideWindowContactViewing} = this.props
        const id = typeof arg == 'string' ? arg : null

        hideWindowContactViewing()
        this.setState({
            windowAddContactIsShow: true,
            idEditableContact: id
        })
    }

    closeWindowAddContact = () => {
        this.setState({
            windowAddContactIsShow: false
        })
    }

    handlerButtonDeleteContact = (e) => {
        const {deleteContact, hideWindowContactViewing} = this.props
        const idDeleteContact = e.currentTarget.dataset.idContact
        hideWindowContactViewing()
        deleteContact(idDeleteContact)
    }

    changeContactFavorite = (id, stateFavourite) => {
        const {changeStateFavorite} = this.props
        changeStateFavorite(id, stateFavourite)
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

export default connect(null,
    { deleteContact,
    changeStateFavorite,
    hideWindowContactViewing })(App)