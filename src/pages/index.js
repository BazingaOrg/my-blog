import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Carousel } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import styles from './index.module.css';
import { avatarAnimation } from '@site/src/utils/avatarAnimation.js';
import { images } from '@site/src/utils/images.js'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    avatarAnimation(document.getElementById('avatar'));
  }, []);

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <canvas id='avatar' width="200" height="200" style={{ borderRadius: '50%' }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            前端博客 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={clsx(styles.mainContent)}>
        <Carousel
          autoPlay
          animation='card'
          showArrow='hover'
          indicatorPosition='outer'
          style={{ width: '100%', height: 240 }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{ width: '60%' }}
            >
              <img
                src={img.src}
                style={{ width: '100%' }}
                alt={img.title}
              />
            </div>
          ))}
        </Carousel>
      </main>
    </Layout>
  );
}