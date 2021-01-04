import * as React from "react"
import { graphql } from "gatsby";
import Navigation from "../components/navigation";
import Layout from "../components/layout"

export const query = graphql`
  query HubPageQuery($catId: String) {
    category: allSanityCategory {
      ...NavQuery
    }
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
  const { data } = props;
  console.log(data)
  return (
    <Layout>
      <main>
        <Navigation categories={data.category.edges} />
      </main>
    </Layout>
    )
  }

export default HubPage
