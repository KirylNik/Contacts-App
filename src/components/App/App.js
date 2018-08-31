import React, { Component } from 'react'
import AppHeader from '../Header/Header'
import ButtonAddContact from '../ButtonAddContact/ButtonAddContact'
import WindowAddContact from '../WindowAddContact/WindowAddContact'
import Sidebar from '../Sidebar/Sidebar'
import Grid from '@material-ui/core/Grid'
import WindowContactViewing from '../WindowContactViewing/WindowContactViewing'
import ContactsList from '../ContactsList/ContactsList'
import { connect } from 'react-redux'
import { setViewableContact } from './actions/setViewableContact'
import { changeStateFavorite } from './actions/changeStateFavorite'
import { getListGroups } from './actions/getListGroups'
import { deleteContact } from './actions/deleteContact'

class App extends Component {
  state = {
    windowAddContactIsShow: false,
    idViewedContact: null,
    idEditableContact: null
  }
  
  showWindowAddContact = ({ idContact }) => {
    const { setViewableContact } = this.props
    setViewableContact(null)
    this.setState({
      windowAddContactIsShow: true,
      idEditableContact: idContact
    })
  }

  closeWindowAddContact = () => {
    this.setState({
      windowAddContactIsShow: false
    })
  }

  handlerButtonDeleteContact = (e) => {
    const { setViewableContact, deleteContact } = this.props
    const idDeleteContact = e.currentTarget.dataset.idContact
    setViewableContact(null)
    deleteContact(idDeleteContact)
  }

  changeContactFavorite = (id, stateFavourite) => {
    const { changeStateFavorite } = this.props
    changeStateFavorite(id, stateFavourite)
  }

  getWindowAddContact = () =>
    this.state.windowAddContactIsShow
      ? <WindowAddContact 
          handlerClose={this.closeWindowAddContact}
          showWindowContactInfo={this.showWindowContactInfo}
          idEditableContact={this.state.idEditableContact}
        />
      :null
  

  componentWillMount() {
    const { getListGroups } = this.props
    getListGroups()
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
            <ContactsList 
              deleteContact={this.handlerButtonDeleteContact}
              showWindowAddContact={this.showWindowAddContact}
              changeContactFavorite={this.changeContactFavorite}
            />
          </Grid>
        </Grid>
        <WindowContactViewing 
          idContact={this.state.idViewedContact}
          deleteContact={this.handlerButtonDeleteContact}
          changeContactFavorite={this.changeContactFavorite}
          showWindowAddContact={this.showWindowAddContact}
        />
        <div onClick={this.showWindowAddContact}>
          <ButtonAddContact />
        </div>
        {this.getWindowAddContact()}
      </div>
    )
  }
}

export default connect(null, { setViewableContact,
                               getListGroups,
                               changeStateFavorite,
                               deleteContact })(App)