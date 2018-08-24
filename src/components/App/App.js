import React, { Component } from 'react'
import AppHeader from '../Header/Header'
import ButtonAddContact from '../ButtonAddContact/ButtonAddContact'
import WindowAddContact from '../WindowAddContact/WindowAddContact'
import Sidebar from '../Sidebar/Sidebar'
import Grid from '@material-ui/core/Grid'
import WindowContactViewing from '../WindowContactViewing/WindowContactViewing'
import ContactsList from '../ContactsList/ContactsList'
import { connect } from 'react-redux'
import { deleteContact, changeStateFavorite } from './actions'
import { HIDE_WINDOW_CONTACT_VIEWING } from './constants'

class App extends Component {
  state = {
    windowAddContactIsShow: false,
    idViewedContact: null,
    idEditableContact: null
  }

  showWindowAddContact = (arg) => {
    const id = typeof arg == 'string' ? arg : null
    const { dispatch } = this.props

    dispatch({
      type: HIDE_WINDOW_CONTACT_VIEWING
    })
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
    const idDeleteContact = e.currentTarget.dataset.idContact
    const { dispatch } = this.props
    dispatch({
      type: HIDE_WINDOW_CONTACT_VIEWING
    })
    dispatch(deleteContact(idDeleteContact))
  }

  changeContactFavorite = (id, stateFavourite) => {
    const { dispatch } = this.props
    dispatch(changeStateFavorite(id, stateFavourite))
  }

  getWindowAddContact = () => {
    if (this.state.windowAddContactIsShow) {
      return (
        <WindowAddContact handlerClose={this.closeWindowAddContact}
          showWindowContactInfo={this.showWindowContactInfo}
          idEditableContact={this.state.idEditableContact}
        />
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <AppHeader handlerSidebar={this.hundlerShowSidebar} />
          </Grid>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <ContactsList deleteContact={this.handlerButtonDeleteContact}
              showWindowAddContact={this.showWindowAddContact}
              changeContactFavorite={this.changeContactFavorite}
            />
          </Grid>
        </Grid>
        {this.getWindowAddContact()}
        <WindowContactViewing idContact={this.state.idViewedContact}
          deleteContact={this.handlerButtonDeleteContact}
          changeContactFavorite={this.changeContactFavorite}
          showWindowAddContact={this.showWindowAddContact}
        />
        <div onClick={this.showWindowAddContact}>
          <ButtonAddContact />
        </div>
      </div>
    )
  }
}

export default connect()(App)