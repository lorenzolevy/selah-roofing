module.exports = {
  siteMetadata: {
    title: `Selah Roofing`,
    description: `Serving the Los Angeles, CA area, Selah Roofing is a roofing contractor committed to excellence. We provide our customers with affordable residential roofing, commercial roofing, and rain gutters, and can help you finish new construction or property remodeling in no time at all.`,
    author: `@lorenzolevy`,
    url: "https://selahroofingcorp.com",
    image:
      "https://wpselah.chaiselevy.com/wp-content/uploads/2020/05/brown-and-gray-painted-house-in-front-of-road-1396122-scaled.jpg",
    keywords:
      "roofing, los angeles, roofers in la, quality roofing, roofing repair, roofing contractors, full service roofing, roof",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154361842-2",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `600`, `700`, `800`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `600`],
          },
        ],
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
        background_color: `#040825`,
        theme_color: `#040825`,
        display: `minimal-ui`,
        icon: `src/images/selah-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `wpcontent`,
        typeName: `WPGraphQL`,
        url: `https://wpselah.chaiselevy.com/graphql`,
      },
    },
  ],
}
