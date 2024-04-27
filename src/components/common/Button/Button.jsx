import styles from "./Button.module.scss";

const Button = ({ text, type = "button", onClick = () => {} }) => {
  return (
    <button type={type} className={styles.Button} onClick={() => onClick()}>
      {text}
    </button>
  );
};
export default Button;
