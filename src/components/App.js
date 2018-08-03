import React, { Component } from 'react'
import AppHeader from './header/AppHeader'
import ButtonAddContact from './ButtonAddContact'
import WindowAddContact from './WindowAddContact/index'
import Grid from '@material-ui/core/Grid'

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
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12}>
                    <AppHeader />
                    </Grid>
                    <div onClick={this.hundlerButtonAddContact}>
                        <ButtonAddContact />
                    </div>
                    <Grid item xs={6}>
                    <WindowAddContact isDisplay = {this.state.addContactWindowIsShow}/>
                    </Grid>
                </Grid>
            </div>  
        )
    }
}