import styles from './Avatar.module.scss';

const Avatar = ({ name }) => {
  return <div className={styles.avatar}>{name.charAt(0).toUpperCase()}</div>;
};

export default Avatar;
