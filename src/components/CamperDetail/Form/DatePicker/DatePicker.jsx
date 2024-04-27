import Arrow from "@/assets/icons/Arrow.svg";
import Calendar from "@/assets/icons/Calendar.svg";

import ReactDatePicker from "react-datepicker";
import Input from "../Input";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";
import "@/utils/styles/datePicker.scss";

const DatePicker = ({ ...props }) => {
  const makeCustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <div className={styles.header}>
        <button className={styles.button} type="button" onClick={decreaseMonth}>
          {/*<Arrow />*/}
          <img src={Arrow} alt="icon of heart" width="24" height="24" />
        </button>
        <p className={styles.dateContainer}>
          {date.toLocaleString("en-GB", {
            month: "long",
            year: "numeric",
          })}
        </p>
        <button className={styles.button} type="button" onClick={increaseMonth}>
          <img
            src={Arrow}
            alt="icon of heart"
            width="24"
            height="24"
            className={styles.rotate}
          />
        </button>
      </div>
    );
  };

  return (
    <ReactDatePicker
      {...props}
      className={styles.datePicker}
      placeholderText="Booking date"
      renderCustomHeader={makeCustomHeader}
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
      minDate={new Date()}
      customInput={<Input type="text" icon={Calendar} />}
      onKeyDown={(e) => {
        e.preventDefault();
      }}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default DatePicker;
