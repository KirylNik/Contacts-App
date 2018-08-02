import React, { Component } from 'react'
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppHeader from './components/header/AppHeader';
import ButtonAddContact from './components/ButtonAddContact'
import WindowAddContact from './components/WindowAddContact'
import './scss/base.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addContactWindowIsShow: false
        }
        this.hundlerButtonAddContact = this.hundlerButtonAddContact.bind(this)
    }

  hundlerButtonAddContact () {
      this.setState({
          addContactWindowIsShow: true
      })
  }
  render() {
      return (
          <MuiThemeProvider>
              <div>
                  <AppHeader />
                  <ButtonAddContact onClick = {this.hundlerButtonAddContact}/>
                  <WindowAddContact isDisplay = {this.state.addContactWindowIsShow}/>
              </div>
          </MuiThemeProvider>
      )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('index')
);