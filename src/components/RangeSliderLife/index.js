import React, { useState, useMemo } from "react";
import styles from './index.module.css';

const imgNameMap = {
  '0': 'baby',
  '16.66': 'child',
  '33.32': 'woman',
  '49.98': 'date',
  '66.64': 'family',
  '83.3': 'elderly',
  '99.96': 'angel',
};

export default function RangeSliderLife() {
  const [sliderValue, setSliderValue] = useState(33.32);
  const imgName = useMemo(() => imgNameMap[sliderValue], [sliderValue]);

  return (
    <div className={styles.lifeContainer}>
      <input className={styles.lifeRange} value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} type="range" min="0" max="100" step="16.66" list='markers' autocomplete='on' />
      <div className={`${styles.lifeImage} ${styles[imgName]}`}></div>
    </div>
  );
};