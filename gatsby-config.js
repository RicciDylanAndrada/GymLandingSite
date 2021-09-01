const path = require(`path`)

exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "GymSite",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles,
          `Monsterrat\:300,400,200`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    
  ],
};

