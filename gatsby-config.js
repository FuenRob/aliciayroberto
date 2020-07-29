module.exports = {
  siteMetadata: {
    title: 'Alicia y Roberto - El evento del año',
    author: 'Roberto Morais',
    description: 'Web para nuestra boda',
    langs: ['es', 'pt'],
    defaultLangKey: 'es'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/aliroberwhite.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'es',
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163936148-2",
      },
    },
  ],
  pathPrefix: "/",
}
