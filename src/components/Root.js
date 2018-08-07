import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import App from './App'
import { withTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#C8E6C9',
          main: '#A5D6A7',
          dark: '#66BB6A',
          contrastText: '#fff',
        },
        secondary: {
          light: '#64B5F6',
          main: '#2196F3',
          dark: '#1976D2',
          contrastText: '#fff',
        },
    },
    status: {
      danger: 'orange',
    },
  });

function Root() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <App />
            </div>  
        </MuiThemeProvider>
    )
}

export default withTheme()(Root);