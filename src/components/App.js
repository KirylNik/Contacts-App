import React, { Component } from 'react'
import AppHeader from './Header'
import ButtonAddContact from './ButtonAddContact'
import WindowAddContact from './WindowAddContact/index'
import Sidebar from './Sidebar/index'
import Grid from '@material-ui/core/Grid'
import WindowContactViewing from './WindowContactViewing/index'
import UsersList from './UsersList'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowAddContactIsShow: false,
            windowContactInfoIsShow: false,
            sidebarIsShow: false,
            idViewedContact: null
        }
        this.openWindowAddContact = this.openWindowAddContact.bind(this)
        this.closeWindowAddContact = this.closeWindowAddContact.bind(this)
        this.showWindowContactInfo = this.showWindowContactInfo.bind(this)
        this.closeWindowContactInfo = this.closeWindowContactInfo.bind(this)
        this.hundlerShowSidebar = this.hundlerShowSidebar.bind(this)
    }

    openWindowAddContact () {
        this.setState({
            windowAddContactIsShow: true
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
                        <AppHeader handlerSidebar={this.hundlerShowSidebar}/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={2}>
                        <Sidebar isShow={this.state.sidebarIsShow}/>
                    </Grid>
                    <Grid item xs={9}>
                        <UsersList/>
                    </Grid>
                </Grid>
                <WindowAddContact isShow = {this.state.windowAddContactIsShow}
                                  handlerClose = {this.closeWindowAddContact}
                                  showWindowContactInfo = {this.showWindowContactInfo}
                />
                <WindowContactViewing isShow = {this.state.windowContactInfoIsShow}
                                      idContact = {this.state.idViewedContact}
                                      closeWindowContactInfo = {this.closeWindowContactInfo}
                />
                <div onClick={this.openWindowAddContact}>
                    <ButtonAddContact/>
                </div>
            </div>  
        )
    }
}