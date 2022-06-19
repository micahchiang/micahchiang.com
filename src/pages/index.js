import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allSanityPost(limit: 10, sort: { order: DESC, fields: publishedAt }) {
        nodes {
          title
          gatsbyPath(filePath: "/post/{SanityPost.slug__current}")
          id
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `);
  const posts = data.allSanityPost.nodes;
  return (
    <>
      <Layout>
        <h1>On the web and other things</h1>

        <h2>Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={post.gatsbyPath}>{post.title}</Link>{' '}
              <small>published {post.publishedAt}</small>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
