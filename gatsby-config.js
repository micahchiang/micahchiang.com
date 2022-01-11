module.exports = {
  siteMetadata: {
    siteUrl: 'https://tbd.tld',
    title: 'Micah Chiang personal site',
    description: 'Thoughts on the web and other things',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {},
    },
  ],
};
