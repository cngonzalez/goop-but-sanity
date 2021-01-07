import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { findFeatured } from "../utils/hubPageUtils";
import FeaturedHubArticle from "../components/featuredHubArticle";
import ArticleGroup from "../components/articleGroup";

export const query = graphql`
query HubPageQuery($catId: String) {
allSanityPage(filter: {subsection: {category: {id: {eq: $catId}}}},
              sort: {order: DESC, fields: publishedDate}) {
    group(field: subsection___id, limit: 3) {
      edges {
        node {
          heroImage {
            asset {
              fluid {
                src
              }
            }
          }
          title
          publishedDate
          subsection {
            name
          }
          authors {
            name
          }
          featuredArticleDate
          id
        }
      }
    }
  }
}
`;

const HubPage = (props) => {
  //TODO: handle errors
  const { data } = props;
  const articleGroups = data.allSanityPage.group.map((group, i) => (
      <ArticleGroup group={group} key={i} />
    ))

  return (
    <Layout>
      <FeaturedHubArticle article={findFeatured(data.allSanityPage.group)}/> 
      { articleGroups }
    </Layout>
  )
}

export default HubPage
