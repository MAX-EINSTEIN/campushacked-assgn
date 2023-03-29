import { useState } from 'react';
import TodoDetail from './TodoDetail';
import * as styles from './Todo.module.css';

const Todo = ({ data, deleteTodoItem, toggleTodoStatus, setDate }) => {
  let [toggleDetails, setToggleDetails] = useState(false);

  // Add New Todo 
  if (data === null) {
    return (
      <div className={styles.Todo}>
        <div className={styles.TodoItem}>
          <button className={styles.btn}>+</button>
          <input className={styles.inputText} type="text" name="todoname" id="todoname" placeholder="New Todo..." />
        </div>
      </div>
    )
  }

  // Show Todo Item 
  return (
    <div className={styles.Todo}>
      <div className={styles.TodoItem}>
        <div className={styles.left}>
          <button className={styles.btn} onClick={() => { setToggleDetails(!toggleDetails) }}> = </button>
          <input className={styles.inputCheck} type="checkbox" name="status" id="status" defaultChecked={data.completed} onChange={() => toggleTodoStatus(data.id)} />
          <input className={`${styles.inputText} ${data.completed ? styles.completed : ''}`} type="text" name="todoname" id="todoname" value={data.name} />
        </div>
        <div className={styles.right}>
          {data.date ? <div className={styles.date}>{data.date}</div> : ''}
          <button className={styles.btn} onClick={() => { setToggleDetails(!toggleDetails) }} > ▼ </button>
        </div>
      </div>
      {toggleDetails ? <TodoDetail data={data} deleteTodoItem={deleteTodoItem} setDate={setDate} /> : ''}
    </div >
  );
};

export default Todo;