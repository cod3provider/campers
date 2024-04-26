import React, { forwardRef } from 'react';
import styles from './TextArea.module.scss';

const Textarea = forwardRef(({ label, ...props }, ref) => {
  return (

    <label className={styles.label}>
      {label}
      <textarea ref={ref} className={styles.textarea} {...props} />
    </label>

  );
});

export default Textarea;
