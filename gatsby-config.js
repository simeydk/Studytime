module.exports = {
  siteMetadata: {
    title: `Studytime`,
    description: `The Official Studytime App`,
    author: `Ratul Maharaj`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom : {
          families: ["MavenPro, Poppins"],
          urls:["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
