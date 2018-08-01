import React from 'react'
import { render } from 'react-dom'

window.React = React

render(
    <h1>Hello world!</h1>,
    document.getElementById("react-container")
)