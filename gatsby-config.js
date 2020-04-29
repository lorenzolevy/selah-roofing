module.exports = {
  siteMetadata: {
    title: `Selah Roofing`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@lorenzolevy`,
    image: '/src/components/images/selah-icon.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    resolve: `gatsby-source-wordpress`,
    options: {
      baseUrl: `wpselah.chaiselevy.com`,
      protocol: `http`,
      hostingWPCOM: false,
    }, 
  }
  ],
}
