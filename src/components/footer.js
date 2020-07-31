import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
const Footer = () => {

  const data = useStaticQuery (graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`)




    return (
        <footer className={footerStyles.footer}>
          <p>© 2019-{new Date().getFullYear()} {data.site.siteMetadata.author}, <a href="https://www.gatsbyjs.org"> Gatsby</a> ile yapılmıştır</p> 
        </footer>

    )
}
export default Footer