import React, { Component } from 'react'
import AppHeader from './header/AppHeader'
import ButtonAddContact from './ButtonAddContact'
import WindowAddContact from './WindowAddContact/index'
import Sidebar from './Sidebar/index'
import Grid from '@material-ui/core/Grid'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addContactWindowIsShow: false,
            sidebarIsShow: false
        }
        this.hundlerButtonAddContact = this.hundlerButtonAddContact.bind(this)
        this.hundlerShowSidebar = this.hundlerShowSidebar.bind(this)
    }

    hundlerButtonAddContact () {
        this.setState({
            addContactWindowIsShow: true
        })
    }

    hundlerShowSidebar () {
        this.setState({
            sidebarIsShow: true
        })
    }

    render () {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <AppHeader handlerSidebar={this.hundlerShowSidebar} sidebarIsShow={this.sidebarIsShow}/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={2}>
                        <Sidebar isShow={this.state.sidebarIsShow}/>
                    </Grid>
                </Grid>
                <WindowAddContact isShow = {this.state.addContactWindowIsShow}/>
                <div onClick={this.hundlerButtonAddContact}>
                    <ButtonAddContact />
                </div>
            </div>  
        )
    }
}