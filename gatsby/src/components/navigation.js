import * as React from "react"
import { Link } from "gatsby";

const NavBar = (props) => {
  const links = props.categories.map((category, i) => (
    <Link 
      to={`/${category.node.slug}`}
      className="nav-link"
      key={i}>
        {category.node.name} 
    </Link>)
    )

  return (
      <nav id="navigation">
        <h1 id="nav-title">
          LIFESTYLED <span className="small">BY SANITY</span>
        </h1>
        <div id="nav-link-bar">
          { links }
        </div>
      </nav>
        
  )
}

export default NavBar
