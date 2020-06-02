// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
Amplify.Logger.LOG_LEVEL = 'INFO';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <div>Hello</div>,
    MOUNT_NODE,
  );
};

render();
