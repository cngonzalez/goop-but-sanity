import React from "react"

const articleLink = ({article}) => {
  return (
    <div>
      <img src={article.heroImage.asset.fluid.src} />
      <h3>{article.title}</h3>
    </div>
    )
}

export default articleLink;
