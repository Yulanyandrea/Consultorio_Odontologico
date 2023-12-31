module.exports = {
  siteMetadata: {
    title: `consultorio odontologico`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ['gatsby-plugin-netlify',"gatsby-plugin-react-helmet", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
