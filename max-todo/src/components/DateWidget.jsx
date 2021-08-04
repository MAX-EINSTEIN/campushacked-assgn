import * as styles from './DateWidget.module.css';

const DateWidget = () => {
  return (
    <div className={styles.DateWidget}>
      <div className={styles.optGroup}>
        <button>Today</button>
        <button>Tomorrow</button>
        <input type="date" name="datePicker" id="datePicker" />
      </div>
    </div>
  );
};

export default DateWidget;