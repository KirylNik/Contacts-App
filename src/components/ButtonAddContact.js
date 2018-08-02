import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { green400 } from 'material-ui/styles/colors';

const style = {
  position: 'fixed',
  right: '7%',
  bottom: '7%'
};

const ButtonAddContact = ({onClick}) => (
    <FloatingActionButton style={style} backgroundColor={green400} onClick={onClick}>
      <ContentAdd />
    </FloatingActionButton>
);

export default ButtonAddContact;