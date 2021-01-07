import React from "react"
import hubStyles from "./hubPage.module.css"

const featuredHubArticle = ({article}) => {
  return (
    <div className={hubStyles.featuredContainer} 
    style={{backgroundImage: `url(${article.heroImage.asset.fluid.src})`}}>
        <h2 class={hubStyles.featuredText}>
          {article.title}
        </h2>
    </div>
  )
}

 export default featuredHubArticle;
