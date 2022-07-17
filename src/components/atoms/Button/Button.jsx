import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <div>
        <button className={styles['Button']}>
            Click Me
        </button>
    </div>
  )
}

export default Button