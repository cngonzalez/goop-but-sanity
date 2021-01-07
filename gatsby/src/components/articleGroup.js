import React from "react"
import hubStyles from "./hubPage.module.css"
import ArticleLink from "./articleLink"

const articleGroup = ({group}) => {
  let groupTitle;
  if (group.edges.length) {
    groupTitle = group.edges[0].node.subsection.name;
  }
  if (!groupTitle || typeof(groupTitle) == "undefined") {
    return <div></div>
  }

  //TODO: filter for featured article so it doesn't show up in the group
  return (
    <div>
      <h2>{groupTitle}</h2>
      { 
        group.edges.map((article, i) => (
          <ArticleLink article={article.node} key={i} />))
      }
    </div>
  )
}

export default articleGroup;
