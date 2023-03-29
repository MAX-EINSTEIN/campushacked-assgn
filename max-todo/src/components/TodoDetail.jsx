import * as styles from './TodoDetail.module.css';

import DateWidget from './DateWidget';

const TodoDetail = ({ data, deleteTodoItem, setDate }) => {
  return (
    <div className={styles.TodoDetail}>
      <div className={styles.leftColumn}>
        <div className={`${styles.notes} ${styles.componentWithLabel}`}>
          <label htmlFor="notesTextArea">Notes</label>
          <textarea name="" id="notesTextArea" rows="8"></textarea>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={`${styles.dateCWL} ${styles.componentWithLabel}`}>
          Date
          <DateWidget data={data} setDate={setDate} />
        </div>
        <div className={`${styles.priorityCWL} ${styles.componentWithLabel}`}>
          Priority
          <select className={styles.priorityDropDown} name="priorityDropDown" id="priorityDropDown">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className={`${styles.deleteBtnDiv}`}><button className={`${styles.deleteBtn}`} onClick={() => deleteTodoItem(data.id)}>Delete</button></div>
      </div>
    </div >
  );
};

export default TodoDetail;