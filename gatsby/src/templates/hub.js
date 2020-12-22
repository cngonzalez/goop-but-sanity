import * as React from "react"
import { graphql } from "gatsby";
import Navigation from "../components/navigation";
import Layout from "../components/layout"

export const query = graphql`
  query HubPageQuery($catId: String) {
  category: allSanityCategory {
    ...NavQuery
  }
  hub: sanityHub(category: {id: {eq: $catId}}) {
    _rawContent
  }
}`;

const HubPage = (props) => {
  const { data } = props;
  debugger;
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
