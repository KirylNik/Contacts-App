import Grey from '@material-ui/core/colors/grey'

export const styles = theme => ({
  root: {
    background: Grey[300],
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
