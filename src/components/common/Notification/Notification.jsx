import styles from './Notification.module.scss';

const Notification = ({ message }) => (
  <p className={styles.Notification}>{message}</p>
);

export default Notification;
