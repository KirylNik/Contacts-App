import React, { Component } from 'react'
import ButtonAppBar from './header/AppHeader'
import ButtonAddContact from './ButtonAddContact'
import WindowAddContact from './WindowAddContact'

export default class App extends Component {
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

    render () {
        return (
            <div>
                <ButtonAppBar />
                <div onClick={this.hundlerButtonAddContact}>
                    <ButtonAddContact />
                </div>
                <WindowAddContact isDisplay = {this.state.addContactWindowIsShow}/>
            </div>  
        )
    }
}