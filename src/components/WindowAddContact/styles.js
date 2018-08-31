import Grey from '@material-ui/core/colors/grey'

export const styles = theme => ({
  root: {
    height: 'auto',
    width: '42%',
    position: 'absolute',
    left: '29%',
    top: '15%',
  },
  header: {
    background: Grey[300],
  },
  headerTitle: {
    color: Grey[500],
    paddingLeft: theme.spacing.unit * 2,
  },
  gridContainer: {
    margin: '0px',
    width: 'auto',
  },
  fields: {
    paddingLeft: '30px !important',
    paddingRight: '30px !important',
    paddingTop: '0px !important',
  },
  accountLogo: {
    fontSize: '60px',
    marginBottom: -(theme.spacing.unit * 2),
  },
  accountLogoContainer: {
    paddingTop: '5px !important',
  },
  icons: {
    fontSize: '30px',
    paddingLeft: theme.spacing.unit * 2,
    marginBottom: -(theme.spacing.unit * 2),
  },
  button: {
    margin: theme.spacing.unit,
    fontWeight: 'bold',
    margin: '0px',
  },
  SelectGroupContact: {
    paddingLeft: '30px !important',
    paddingRight: '10px !important',
  }
})