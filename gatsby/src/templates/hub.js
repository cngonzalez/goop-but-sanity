import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import FeaturedHubArticle from "../components/hubPageComponents/featuredHubArticle"

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
        }
      }
    }
  }
}
`;

const HubPage = (props) => {
  //TODO: handle errors
  const { data } = props;
  //separate out featured article
  //order by date desc
  //create asset for featured article
  //separate out other subsections and return bar
  return (
    <Layout>
      <FeaturedHubArticle hubPageGroups={data.allSanityPage.group}/> 
    </Layout>
  )
}

export default HubPage
