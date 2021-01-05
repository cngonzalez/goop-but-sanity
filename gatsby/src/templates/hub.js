import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"

export const query = graphql`
  query HubPageQuery($catId: String) {
    allSanityRoute(filter: {page: {category: {id: {eq: $catId}}}}) {
      edges {
        node {
          slug {
            current
          }
          page {
            title
            heroImage {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const HubPage = (props) => {
  //TODO: handle errors
  const { data } = props;
  console.log(data)
  //separate out featured article
  //order by date desc
  //create asset for featured article
  //separate out other subsections and return bar
  return (
    <Layout>
      <main>
      </main>
    </Layout>
    )
  }

export default HubPage
