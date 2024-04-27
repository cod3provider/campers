import { forwardRef } from "react";
import styles from "./Input.module.scss";

const Input = forwardRef(({ label, icon: Icon, ...props }, ref) => {
  return (
    <label className={styles.inputWrapper}>
      {label}
      {Icon && (
        <img src={Icon} alt="icon of calendar" className={styles.icon} />
      )}
      <input ref={ref} className={styles.inputField} {...props} />
    </label>
  );
});

export default Input;
