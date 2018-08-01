import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Hello Alexey!" onClick={displayAlert}/>
);

function displayAlert() {
    alert('Material-ui классная вещь судя по всему! Спасибо!)')
}

export default MyAwesomeReactComponent;