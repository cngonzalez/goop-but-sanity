import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import navigationStyles from "./navigation.module.css"

export default function NavBar(props) {

  const data = useStaticQuery(graphql`
  query NavQuery {
    allSanityCategory {
      edges {
        node {
          name
          slug {
            current
          }
        }
      }
    }
  }`);

  const links = data.allSanityCategory.edges.map((category, i) => (
    <Link 
      to={`/${category.node.slug.current}`}
      className={navigationStyles.nav_link}
      key={i}>
        {category.node.name} 
    </Link>)
    )

  return (
      <nav id="navigation" className={navigationStyles.navheader}>
        <h1>
          Lifestyled.
        </h1>
        <div className={navigationStyles.navLinkBar}>
          { links }
        </div>
      </nav>
        
  )
}
