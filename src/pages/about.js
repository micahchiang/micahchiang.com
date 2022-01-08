import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout
      title="about this site"
      description="more information about what this site is"
    >
      <h1>About this site</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
