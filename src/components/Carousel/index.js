import React, { useState } from 'react';
import styles from './index.module.css';

const imgs = [
  { location: '舟山市', fileName: '20230625211800.jpg' },
  { location: '杭州市', fileName: '20230625211826.jpg' },
  { location: '杭州市', fileName: '20230625211834.jpg' },
  { location: '北京市', fileName: '20230702230559.jpg' },
  { location: '北京市', fileName: '20230702230619.jpg' },
  { location: '杭州市', fileName: '20230702230628.jpg' },
  { location: '杭州市', fileName: '20230702230744.jpg' },
  { location: '杭州市', fileName: '20230702230640.jpg' },
  { location: '杭州市', fileName: '20230702230655.jpg' },
  { location: '杭州市', fileName: '20230702230711.jpg' },
  { location: '杭州市', fileName: '20230702230724.jpg' },
  { location: '杭州市', fileName: '20230702230737.jpg' },
];

export default function Carousel() {
  const [carouselImages, setCarouselImages] = useState(imgs);
  const [activeIndex, setActiveIndex] = useState(5);

  // function handlePrevClick() {
  //   const newList = [...carouselImages];
  //   const last = newList.pop();
  //   newList.unshift(last);
  //   setCarouselImages(newList);
  // };

  function handleNextClick() {
    const newList = [...carouselImages];
    const first = newList.shift();
    newList.push(first);
    setCarouselImages(newList);
  };

  return (
    <div className={styles.carousel}>
      <ul className={styles.carouselList}>
        {
          carouselImages.map((item, index) => {
            return (
              <li key={item.fileName} className={`${styles.carouselItem} ${index === activeIndex && styles.active}`} onClick={() => setActiveIndex(index)}>
                <div>
                  <div className={styles.carouselImage}>
                    <img alt='carouselImage' src={`img/carouselImages/${item.fileName}`} width="480" height="280" />
                  </div>
                </div>
                <div className={styles.carouselContents}>
                  <h2 className={styles.userName}>{item.location}</h2>
                  <h3 className={styles.userTitle}>Bazinga</h3>
                </div>
              </li>
            );
          })
        }
      </ul>
      <div className={styles.carouselNav}>
        {/* <button className={styles.arrowBtn} onClick={handlePrevClick}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"></path>
          </svg>
        </button> */}
        <button className={styles.arrowButton} onClick={handleNextClick}>
          ✈️
        </button>
      </div>
    </div>
  )
}
