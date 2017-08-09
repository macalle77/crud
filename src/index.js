import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './app/MainApp.js';

// go and render the whole React component on to the div with id 'content'
ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);