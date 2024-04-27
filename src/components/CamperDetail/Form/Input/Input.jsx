import { forwardRef } from "react";
import styles from "./Input.module.scss";

function InputComponent({ label, icon: Icon, ...props }, ref) {
  return (
    <label className={styles.inputWrapper}>
      {label}
      {Icon && (
        <img src={Icon} alt="icon of calendar" className={styles.icon} />
      )}
      <input ref={ref} className={styles.inputField} {...props} />
    </label>
  );
}

const Input = forwardRef(InputComponent);

export default Input;
