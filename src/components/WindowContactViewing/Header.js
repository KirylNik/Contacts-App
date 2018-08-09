import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import StarBorder from '@material-ui/icons/StarBorder'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Cancel from '@material-ui/icons/Cancel'
import Grey from '@material-ui/core/colors/grey'

const headerBackground = Grey[300]
const styles = theme => ({
    root: {
        background: headerBackground,
        display: 'flex',
        alignItems: 'center',
    },
    accountLogo: {
        fontSize: '60px',
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
    },
    buttonLeft: {
        marginLeft: 'auto',
    },
})

function Header(props) {
    const { classes,
            firstName,
            lastName,
            closeThisWindow,
        } = props

    return (
        <div className={classes.root}>
            <AccountCircle className={classes.accountLogo}/>
            <Typography className={classes.headerTitle} variant="title">
                {`${firstName} ${lastName}`}
            </Typography>
            <IconButton className={classes.buttonLeft}>
                <StarBorder />
            </IconButton>
            <IconButton className={classes.button}>
                <Edit />
            </IconButton>
            <IconButton className={classes.button}>
                <Delete />
            </IconButton>
            <IconButton className={classes.button} onClick={closeThisWindow}>
                <Cancel />
            </IconButton>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)