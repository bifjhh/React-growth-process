import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import NewClassCmp from './Hello';
// import FormInput from './Form';
// import ToDoLists from './ToDoLists';
// import Props from './Props.jsx';
import Context from './Context';

import './index.css';

ReactDOM.render(
  <div>
    {/* <ToDoLists  />
    <NewClassCmp  />
    <FormInput  />
    <Props /> */}
    <Context />
  </div>,
  document.getElementById('root')
);
