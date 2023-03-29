import * as styles from './TodoList.module.css';
import Todo from './Todo';
import SplashScreen from './SplashScreen';

const TodoList = ({ todoList, deleteTodoItem, toggleTodoStatus, setDate }) => {
  return (
    <div className={styles.TodoList}>
      <div className={styles.list}>
        {todoList.map(todo => <Todo key={todo ? todo.id : 0} data={todo} deleteTodoItem={deleteTodoItem} toggleTodoStatus={toggleTodoStatus} setDate={setDate}></Todo>)}
        <Todo data={null}></Todo>
      </div>
      <div className={styles.splashScreen}>{!(todoList.length > 0) ? <SplashScreen /> : ''}</div>
    </div >
  );
};

export default TodoList;