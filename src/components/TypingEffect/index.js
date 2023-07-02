import React from 'react';
import styles from './index.module.css';

export default function TypingEffect({ words, chNum = 15 }) {
  return (
    <div className={styles.typingWrapper}>
      <p className={styles.typingWord} style={{ width: `${chNum}ch` }}>
        {words}
      </p>
    </div>
  )
}
