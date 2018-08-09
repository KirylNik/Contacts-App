import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        marginRight: theme.spacing.unit * 3,
    },
        accountLogo: {
            fontSize: '60px',
    },
        capitalLetter: {
            textAlign: 'center',
    },
    smallFontSize: {
        fontSize: theme.typography.fontSize,
        textAlign: 'center',
    },
    button: {
        fontSize: theme.typography.fontSize * 1.3,
    },
    buttonContainer: {
        width: theme.typography.fontSize * 1.5,
        height: theme.typography.fontSize * 1.5,
    }
})

function UsersList(props) {
    const { classes, contacts } = props
    const listElem = contacts.map(item => 
        <div key={item.id}>
            <Grid container spacing={8} alignItems="center">
                <Grid item xs={1}>
                    <Typography variant="title" className={classes.capitalLetter}>
                        {item.firstName[0]}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <AccountCircle className={classes.accountLogo}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="title">
                        {`${item.firstName} ${item.lastName}`}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="title" className={classes.smallFontSize}>
                        {getNumberPhone(item.phoneNumberClass)}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="title" className={classes.smallFontSize}>
                        {item.dateOfBirth}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="title" className={classes.smallFontSize}>
                        {getTypeGroup(item.group)}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="title" className={classes.smallFontSize}>
                        {item.gender}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton className={classes.buttonContainer}>
                        <StarBorderIcon className={classes.button}/>
                    </IconButton>
                    <IconButton className={classes.buttonContainer}>
                        <EditIcon className={classes.button}/>
                    </IconButton>
                    <IconButton className={classes.buttonContainer}>
                        <DeleteIcon className={classes.button}/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
	return (
        <div className={classes.root}>
            {listElem}
        </div>
	)
}

function getTypeGroup (groupObj) {
    debugger
    if (groupObj.work) {
        return 'Work'
    } else if (groupObj.family) {
        return 'Family'
    } else {
        return 'Frends'
    }
}

function getNumberPhone (phoneObj) {
    if (phoneObj.mobile) {
        return `${phoneObj.mobile} (mobile)`
    } else if (phoneObj.home) {
        return `${phoneObj.home} (home)`
    } else {
        return `${phoneObj.work} (work)`
    }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
  // from connect:
  contacts: PropTypes.array
}

export default connect((state) => ({
    contacts: state.contacts
}))(withStyles(styles)(UsersList))