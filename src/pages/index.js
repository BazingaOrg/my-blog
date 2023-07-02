import React, { Suspense } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeHeader from '@site/src/components/HomeHeader';
import styles from './index.module.css';

const Carousel = React.lazy(() => import('@site/src/components/Carousel'));

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomeHeader title={siteConfig.title} words={siteConfig.tagline} />
      <main className={styles.mainContent}>
        <Suspense
          fallback={<label>正在加载...</label>}
        >
          <Carousel />
        </Suspense>
      </main>
    </Layout>
  );
}