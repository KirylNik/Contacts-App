import Grey from '@material-ui/core/colors/grey'

export const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: Grey[300],
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
})