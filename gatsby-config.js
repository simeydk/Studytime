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
        name: `Studytime`,
        short_name: `Studytime`,
        start_url: `/`,
        background_color: `#dddddd`,
        theme_color: `#874caf`,
        display: `standalone`,
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
