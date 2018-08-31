import React from 'react'
import store from '../store'
import App from './App/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withTheme } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C8E6C9',
      main: '#A5D6A7',
      dark: '#66BB6A',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
      contrastText: '#FFF',
    },
  },
  status: {
    danger: 'orange',
  },
})

function Root() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  )
}

export default withTheme()(Root)