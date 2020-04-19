import Home from '../Home';
import Form from '../Form';
import ToDoLists from '../ToDoLists';

const router = [
  {
    path: '/',
    name: '首页',
    exact: true, //是否为严格模式
    ComponentName: Home
  },
  {
    path: '/form',
    name: 'Form',
    ComponentName: Form
  },
  {
    path: '/todolist',
    name: 'todolist',
    ComponentName: ToDoLists
  },
  // {
  //   path: '/todolist/:name',
  //   name: '路由传参todolist',
  //   ComponentName: ToDoLists
  // },
];

export default router;