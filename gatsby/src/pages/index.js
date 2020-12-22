import * as React from "react"
import { graphql } from "gatsby";
import Navigation from "../components/navigation";
import Layout from "../components/layout"

export const query = graphql`
  query IndexPageQuery {
  category: allSanityCategory {
    ...NavQuery
  }
}`;

// markup
const IndexPage = (props) => {
  const { data } = props;
  return (
    <Layout>
      <main>
        <title>not GOOP</title>
        <Navigation categories={data.category.edges} />
      </main>
    </Layout>
  )
}

export default IndexPage
