import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'


const Header = () => {

  const data = useStaticQuery (graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }
`)

    return (

        <header className = {headerStyles.header}>
            <p>
              <Link className={headerStyles.title} to='/'>{data.site.siteMetadata.title}</Link>
            </p>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/">Ana sayfa</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to = "/blog">Blog</Link>  
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to = "/about">Hakkımda</Link>  
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to = "/contact">İletişim</Link>  
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header