import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Soph's Slices`,
    siteUrl: 'https://soph.pizza',
    description: 'The best pizza in Boulder and NYC!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of plugin added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'semc1mmx',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
