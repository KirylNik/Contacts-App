import green from '@material-ui/core/colors/green'

const colorSearchFiled = green[300]

export const styles = theme => ({
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