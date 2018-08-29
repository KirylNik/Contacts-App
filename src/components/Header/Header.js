import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Search from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { getListAllContacts,
         searchContactsByName,
         changeStateIsOpenSidebar } from './actions'
import { styles } from './styles'

function AppHeader(props) {
  const { classes, handlerSidebar } = props
  let throttleTimeoutFlag = false
  let searchQuery;

  const hundlerShowSidebar = function () {
    const { changeStateIsOpenSidebar } = props
    changeStateIsOpenSidebar()
  }

  const handlerSearchInput = function (e) {
    const { searchContactsByName, getListAllContacts } = props
    searchQuery = e.target.value
    
    if (searchQuery === '') {
      getListAllContacts()
      throttleTimeoutFlag = false
    } else if (searchQuery !== '' && !throttleTimeoutFlag) {
      throttleTimeoutFlag = true
      setTimeout(() => {
          searchContactsByName(searchQuery)
          throttleTimeoutFlag = false
      }, 1000)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={1}></Grid>
            <Grid item xs={2} className={classes.sectionMenu}>
              <div onClick={handlerSidebar}>
                <IconButton className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={hundlerShowSidebar}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Contacts
							</Typography>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.searchBox}>
                <Search className={classes.searchIcon} />
                <FormControl className={classes.searchForm}>
                  <InputLabel
                    FormLabelClasses={{
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    }}
                    htmlFor="field-search-contacts"
                  >
                    Search
									</InputLabel>
                  <Input
                    classes={{
                      underline: classes.cssUnderline,
                      root: classes.cssInputSearch,
                      focused: classes.cssFocused,
                    }}
                    onChange={handlerSearchInput}
                    id="field-search-contacts"
                  />
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(null, { getListAllContacts,
                               searchContactsByName,
                               changeStateIsOpenSidebar
                             })(withStyles(styles)(AppHeader))