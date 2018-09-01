import React from 'react'
import PropTypes from 'prop-types'
import BackgroundContactList from './BackgroundContactList/BackgroundContactList'
import ContactsListItem from './ContactsListItem/ContactsListItem'
import { withStyles } from '@material-ui/core/styles'
import { getListAllContacts } from './actions/getListAllContacts'
import { connect } from 'react-redux'
import { styles } from './styles'

class UsersList extends React.Component {
  state = {
    quantityDisplayContacts: 0
  }

  setQuantityDisplayContacts = (value = 0) => {
    this.setState({
      quantityDisplayContacts: value
    })
  }

  getBackgroundContactList = (contacts) => {
    if (!contacts.length) {
      const { showWindowAddContact } = this.props
      return <BackgroundContactList showWindowAddContact={showWindowAddContact} />
    }
  }

  getListElem = (contacts) => {
    const { deleteContact,
            changeContactFavorite,
            showWindowAddContact } = this.props
    if (contacts.length) {
      return contacts.map((item) =>
        <ContactsListItem 
          key={item.id}
          contactObj={item}
          deleteContact={deleteContact}
          changeContactFavorite={changeContactFavorite}
          showWindowAddContact={showWindowAddContact}
        />
      )
    }
  }

  componentWillMount = () => {
    const { getListAllContacts } = this.props
    getListAllContacts()
  }

  render() {
    const { classes, contacts } = this.props
    const backgroundContactList = this.getBackgroundContactList(contacts)
    const listElem = this.getListElem(contacts)

    return (
      <div className={classes.root}>
        {backgroundContactList}
        {listElem}
      </div>
    )
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect((state) => ({
  contacts: state.contacts
}), { getListAllContacts })(withStyles(styles)(UsersList))