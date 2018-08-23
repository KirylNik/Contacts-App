import Grey from '@material-ui/core/colors/grey'

const BACKGROUND = Grey[300]

export const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: BACKGROUND,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
})