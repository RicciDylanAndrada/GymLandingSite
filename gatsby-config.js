const path = require(`path`)

exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "GymSite",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`
  ],
};

