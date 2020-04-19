import Form from '../Form';
import ToDoLists from '../ToDoLists';

const router = [{
    path: '/form',
    name: 'Form',
    ComponentName: Form
  },
  {
    path: '/todolist',
    name: 'todolist',
    ComponentName: ToDoLists
  },
];

export default router;