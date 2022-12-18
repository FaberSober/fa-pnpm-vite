import React from 'react';
import { Button, DatePicker } from 'antd';
import { Button as UiButton } from '@fa/ui';
import styles from './index.module.scss';

/**
 * @author xu.pengfei
 * @date 2022/12/17 17:23
 */
export default function index() {
  function handleChangeTheme(e: any) {
    const theme = e.target.dataset.theme;
    document.body.setAttribute('data-theme', theme);

    const currentThemeNode = document.getElementById('theme-current');
    if (theme === 'light') {
      currentThemeNode!.textContent = '亮色';
    } else if (theme === 'dark') {
      currentThemeNode!.textContent = '暗色';
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web <br className="hidden lg:block" />
          <span className="inline-block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <UiButton />
        </div>

        <div className={styles.main}>
          <div className={styles.title}>scss module style</div>

          <div className={styles.info}>mi info</div>
          <div className={styles.alert}>mi info</div>
          <div className={styles.success}>mi info</div>

          <Button type="primary">Style Changed By Sass Global</Button>
        </div>

        <Button type="primary">Hello</Button>
        <DatePicker />

        <h1 className="title">Hello, World</h1>
        <p className="subtitle">
          当前主题：<span id="theme-current">亮色</span>
        </p>
        <button className="theme-switch light" data-theme="light" onClick={handleChangeTheme}>
          亮色
        </button>
        <button className="theme-switch dark" data-theme="dark" onClick={handleChangeTheme}>
          暗色
        </button>
      </main>
    </div>
  );
}
