import * as React from "react"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.css"

const NavBar = (props) => {
  const links = props.categories.map((category, i) => (
    <Link 
      to={`/${category.node.slug}`}
      className={navigationStyles.nav_link}
      key={i}>
        {category.node.name} 
    </Link>)
    )

  return (
      <nav id="navigation" className={navigationStyles.navheader}>
        <h1>
          LIFESTYLED <span className={navigationStyles.small}>(BY SANITY)</span>
        </h1>
        <div className={navigationStyles.nav_link_bar}>
          { links }
        </div>
      </nav>
        
  )
}

export default NavBar
