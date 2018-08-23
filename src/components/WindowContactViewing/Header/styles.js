import Grey from '@material-ui/core/colors/grey'

const headerBackground = Grey[300]
export const styles = theme => ({
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
