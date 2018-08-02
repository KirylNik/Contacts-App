import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Paper from 'material-ui/Paper';

export default class WindowAddContact extends Component {

    render() {
        const { isDisplay } = this.props
        if (!isDisplay) return null
        return (
            <Paper zDepth={4} className="window-add-contact"/>
        )
    }
}