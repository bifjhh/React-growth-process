import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import NewClassCmp from './Hello';
// import FormInput from './Form';
// import ToDoLists from './ToDoLists';
// import Props from './Props.jsx';
// import Context from './Context';
// import Children from './Children';
import Validation from './Props.validation';

import './index.css';

ReactDOM.render(
  <div>
    {/* <ToDoLists  /> */}
    {/* <NewClassCmp  /> */}
    {/* <FormInput  /> */}
    {/* <Props /> */}
    {/* <Context /> */}
    {/* <Children><div>1</div></Children> */}
    <Validation count={5} max={1} />
  </div>,
  document.getElementById('root')
);
