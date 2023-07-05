
import React from 'react';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import TypingEffect from '@site/src/components/TypingEffect';
import TitleEffect from '@site/src/components/TitleEffect';
import GitHubIcon from "@site/static/img/github.svg";
import MailIcon from "@site/static/img/email.svg";


export default function HomeHeader({ title, words }) {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img className={styles.headerAvatar} src="img/avatar.jpg" />
        <TitleEffect title={title} />
        <TypingEffect words={words} />
        <p className={styles.linkGroup}>
          <Link className={styles.linkIcon} to="https://github.com/BazingaOrg">
            <GitHubIcon style={{ width: 30, height: 30 }} />
          </Link>
          <label className={styles.find}>👈 😀 👉</label>
          <Link className={styles.linkIcon} to="mailto:zhangyouxiu66@gmail.com">
            <MailIcon style={{ width: 30, height: 30 }} />
          </Link>
        </p>
        <div className={styles.skill}>💪My skills：<img alt='skills' src="https://skillicons.dev/icons?i=git,react,vue" /></div>
      </div>
    </header>
  );
}