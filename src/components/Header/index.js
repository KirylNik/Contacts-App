import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
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
import green from '@material-ui/core/colors/green'
import {connect} from 'react-redux'
import { changeStateIsOpenSidebar } from '../../AC'

const colorSearchFiled = green[300]
const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	searchForm: {
		flexGrow: "1"
	},
	flex: {
		flexGrow: 1,
	},
	sectionMenu: {
		display: "flex",
		alignItems: "center",
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	searchBox: {
		display: "flex",
		alignItems: "center",
		borderRadius: "5px",
		backgroundColor: colorSearchFiled,
	},
	searchIcon: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	cssInputSearch: {
		'&:before': {
			borderBottom: "0px",
		},
		marginTop: "0px !important",
	},
	cssLabel: {
		'&$cssFocused': {
			color: "white",
		},
		color: "white",
		marginTop: "0px !important",
		top: -(theme.spacing.unit * 2),
	},
	cssFocused: {},
	cssUnderline: {
		'&:after': {
			borderBottomColor: "white",
		},
		color: "white",
	},
})

function AppHeader(props) {
	const {classes, handlerSidebar} = props

	const hundlerShowSidebar = function () {
		const {changeStateIsOpenSidebar} = props
		changeStateIsOpenSidebar()
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
								<Search className={classes.searchIcon}/>
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

export default connect(null, { changeStateIsOpenSidebar })(withStyles(styles)(AppHeader))