import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import NewClassCmp from './Hello';
import FormInput from './Form';
import ToDoLists from './ToDoLists';
import './index.css';

ReactDOM.render(
  <div>
    <ToDoLists  />
    <NewClassCmp  />
    <FormInput  />
  </div>,
  document.getElementById('root')
);
