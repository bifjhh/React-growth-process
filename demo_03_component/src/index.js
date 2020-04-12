import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import NewClassCmp from './Hello';
import FormInput from './Form';
import ToDoLists from './ToDoLists';
import Props from './Props';

import './index.css';

ReactDOM.render(
  <div>
    <ToDoLists  />
    <NewClassCmp  />
    <FormInput  />
    <Props />
  </div>,
  document.getElementById('root')
);
