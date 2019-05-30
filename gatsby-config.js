require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/images/`
        }
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://featherconsulting.us20.list-manage.com/subscribe/post?u=f29c7b2b540ddf80303979b71&amp;id=4c7e30f3bd',
        },
      },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`]
}