import React from "react";

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
  flattenedArticles.sort((a, b) => (a.publishedDate - b.publishedDate));

  const featured = flattenedArticles.filter((article) => (
    !!article.featuredArticleDate))

  if (featured.length) {
    return featured[0]}
  else {
    return flattenedArticles[0]
  }
}


const featuredHubArticle = ({hubPageGroups}) => {
  const article = findFeatured(hubPageGroups);
  console.log(article) 
  return <div /> 
}

 export default featuredHubArticle;
