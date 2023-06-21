import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { avatarAnimation } from '@site/src/utils/avatarAnimation.js';
import ImageSlider from '../components/ImageSliders';

import imgOne from '@site/static/img/1.jpg';
import imgTwo from '@site/static/img/2.jpg';
import imgThree from '@site/static/img/3.jpg';
import imgFour from '@site/static/img/4.jpg';

const slides = [
  { url: imgOne },
  { url: imgTwo },
  { url: imgThree },
  { url: imgFour },
];

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
        <ImageSlider slides={slides} />
      </main>
    </Layout>
  );
}