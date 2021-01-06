import React from "react"
import hubStyles from "./hubPage.module.css"

const flattenArticles = (groups) => {
  const today = new Date();
  const flattenedArticles = [];
  groups.forEach((group) => {
    group.edges.forEach((article) => {
      const articleDate = new Date(article.node.publishedDate);
      if (articleDate <= today) {
        flattenedArticles.push({
          ...article.node,
          ...{publishedDate: articleDate}});
      }
    });
  });
  
  return flattenedArticles;
}


const findFeatured = (groups) => {
  const flattenedArticles = flattenArticles(groups);

  const featured = flattenedArticles.filter((article) => (
    !!article.featuredArticleDate))

  if (featured.length) {
    featured.sort((a, b) => (a.featuredArticleDate - b.featuredArticleDate));
    return featured[0]}
  else {
    flattenedArticles.sort((a, b) => (a.publishedDate - b.publishedDate));
    return flattenedArticles[0]
  }
}


const featuredHubArticle = ({hubPageGroups}) => {
  const article = findFeatured(hubPageGroups);
  return (
    <div className={hubStyles.featuredContainer}> 
        <img src={article.heroImage.asset.fluid.src} />
        <div class={hubStyles.featuredHubText}>
          {article.title}
        </div>
    </div>
  )
}

 export default featuredHubArticle;
