import { useState } from 'react';

import TodoDetail from './TodoDetail';

import * as styles from './Todo.module.css';

const Todo = ({ t_data }) => {
  let [data, setData] = useState(t_data);

  // Todo : null state [Create New Todo State]
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

  return (
    <div className={styles.Todo}>
      <div className={styles.TodoItem}>
        <div className={styles.left}>
          <button className={styles.btn}> = </button>
          <input className={styles.inputCheck} type="checkbox" name="status" id="status" defaultChecked={data.completed} onChange={() => {
            // input.classList.toggle(`${styles.completed}`);
            console.log(this, 'Changed!');
          }} />
          <input className={styles.inputText} type="text" name="todoname" id="todoname" value={data.name} />
        </div>
        <div className={styles.right}>
          {data.date ? <div className={styles.date}>{data.date}</div> : ''}
          <button className={styles.btn}> ▼ </button>
        </div>
      </div>
      <div className={styles.hidden}>
        <TodoDetail />
      </div>
    </div >
  );
};

export default Todo;