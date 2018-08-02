import React from 'react';
import AppBar from 'material-ui/AppBar';
import  SearchField  from './SearchField'
import { green200 } from 'material-ui/styles/colors';

const AppHeader = () => (
  <div>
    <AppBar
      title="Contacts"
      style={{background:green200}}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    < SearchField />
  </div>

);

export default AppHeader;
