import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from './seo.js';
import { header, content } from '../styles/layout.module.css';
import '../styles/global.css';

export default function Layout({
  children,
  title = false,
  description = false,
  path = false,
}) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <header className={header}>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  );
}
