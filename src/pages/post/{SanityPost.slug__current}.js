import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { micromark } from 'micromark';
import Layout from '../../components/layout.js';

export const query = graphql`
  query SanityPost($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      publishedAt(fromNow: true)
      body
    }
  }
`;

export default function SanityPost({ data }) {
  const post = data.sanityPost;
  return (
    <Layout title={post.title}>
      <h1>{post.title}</h1>
      <small>published {post.publishedAt}</small>
      <hr />
      <section dangerouslySetInnerHTML={{ __html: micromark(post.body) }} />
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
