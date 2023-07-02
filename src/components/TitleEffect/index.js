import React from 'react';
import styles from './index.module.css';

export default function TitleEffect({ title }) {
  return (
    <h1 className={styles.title}>
      {title}
    </h1>
  )
}
