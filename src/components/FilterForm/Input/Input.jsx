import React, { forwardRef } from 'react';

import MapPin from '@/assets/icons/MapPin.svg';
import FullHeart from "@/assets/icons/HeartFull.svg";

import styles from './Input.module.scss';

const Input = forwardRef(({ label, ...props }, ref) => {
  return (
	  <label className={styles.inputWrapper}>
		  {label}
		  <img src={MapPin} className={styles.icon} alt="icon of pin" width="24" height="24"/>
		  <input ref={ref} className={styles.inputField} {...props} />
	  </label>
  );
});

export default Input;
