import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout
      title="about this site"
      description="more information about what this site is"
    >
      <h1>What is all of this about?</h1>
      <p>Hey there! My name is Micah.</p>
      <p>
        Some things I enjoy are: software engineering, photography, 3d imaging,
        video games, warhammer, and dyson vacuums.
      </p>
      <ul>
        <li>
          <a href="https://github.com/micahchiang">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/micahkchiang/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/micahkchiang">Instagram</a>
        </li>
      </ul>
      <Link to="/">Home</Link>
    </Layout>
  );
}
