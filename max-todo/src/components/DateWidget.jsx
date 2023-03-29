import * as styles from './DateWidget.module.css';

const DateWidget = ({ data, setDate }) => {
  const formatDate = date => date.toISOString().slice(0, 10);

  const handleDateChange = selectedDate => {
    setDate(data.id, formatDate(selectedDate));
    console.log('Date set to selected Date: ', selectedDate);
  }

  return (
    <div className={styles.DateWidget}>
      <div className={styles.optGroup}>
        <button onClick={() => {
          let today = new Date();
          setDate(data.id, formatDate(today));
          console.log('Date set to today: ', today);
        }}>Today</button>
        <button onClick={() => {
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          setDate(data.id, formatDate(tomorrow));
          console.log('Date set to tomorrow: ', tomorrow);
        }}>Tomorrow</button>
        <input type="date" name="datePicker" id="datePicker"
          onChange={() => handleDateChange} pattern="\d{4}-\d{2}-\d{2}" />
      </div>
    </div>
  );
};

export default DateWidget;

