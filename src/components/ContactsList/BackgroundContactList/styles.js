export const styles = theme => ({
  positionForSidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    left: '45%',
    top: '40%',
  },
  positionWithoutSidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    left: '35%',
    top: '40%',
  },
  button: {
    margin: theme.spacing.unit,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: theme.spacing.unit * 10,
    opacity: 0.1,
  },
  title: {
    opacity: 0.2,
  }
})