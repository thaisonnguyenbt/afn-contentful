const path = require(`path`)

if (process.env.NODE_ENV === `development`) {
  contentfulConfig = require(`./.contentful`)
} else {
  contentfulConfig = {
    production: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  }
}
  
const { spaceId, accessToken } = process.env.NODE_ENV === `development` ? contentfulConfig.development : contentfulConfig.production

if (!spaceId || !accessToken ) {
    throw new Error(`CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are required to build. Check the README.`) // eslint-disable-line
}


module.exports = {
  siteMetadata: {
    title: `Asian Food Network | The Home Of Asian Recipes & Cuisine`,
    description: `Asian Food Network (AFN) is the world's home of Asian Recipes & Cuisine. Discover authentic asian recipes, asian travel guides on Asian Food Network. Easy Chinese recipes, Malaysian food recipes, top Filipino food recipes.`,
    facebook: `asianfoodnetworkofficial`,
    pinterest: `asianfoodnetwork`,
    instagram: `asianfoodnetwork`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: process.env.NODE_ENV === `development`
        ? contentfulConfig.development
        : contentfulConfig.production,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/common/logo/afn-logo-white.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
