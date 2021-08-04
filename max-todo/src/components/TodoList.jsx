import * as styles from './TodoList.module.css';
import Todo from './Todo';
import SplashScreen from './SplashScreen';

const TodoList = () => {
  let listOfTodos = [
    { id: 1, name: 'Todo 1', date: '01/08/2021' },
    { id: 2, name: 'Todo 2' },
    { id: 3, name: 'Todo 3', date: '01/08/2021', completed: true },
    { id: 4, name: 'Todo 4', completed: true },
    null,
  ]

  return (
    <div className='TodoList'>
      <div className={styles.list}>
        {listOfTodos.map(todo => <Todo key={todo ? todo.id : 0} t_data={todo}></Todo>)}
        {!(listOfTodos.length > 1) ? <SplashScreen></SplashScreen> : ''}
      </div>
    </div >
  );
};

export default TodoList;