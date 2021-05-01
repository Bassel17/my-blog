import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          <a
            className="text-gray-900 dark:text-white"
            href="https://www.linkedin.com/in/bassel-kanso-937649128/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="devicon-linkedin-plain"
              style={{ fontSize: '40px', padding: '1rem' }}
            />
          </a>
          <a
            className="text-gray-900 dark:text-white"
            href="https://twitter.com/BasselKanso1"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="devicon-twitter-original"
              style={{ fontSize: '40px', padding: '1rem' }}
            />
          </a>
          <a
            className="text-gray-900 dark:text-white"
            href="https://github.com/bassel17"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="devicon-github-original"
              style={{ fontSize: '40px', padding: '1rem' }}
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
