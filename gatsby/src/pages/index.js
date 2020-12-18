import * as React from "react"
import { graphql } from "gatsby";
import Navigation from "../components/navigation";

export const query = graphql`
  query IndexPageQuery {
  category: allSanityCategory {
    ...NavQuery
  }
    }`;

// markup
const IndexPage = (props) => {
  const { data, errors } = props;
  console.log(errors)
  return (
    <main>
      <title>not GOOP</title>
      <Navigation categories={data.category.edges} />
    </main>
  )
}

export default IndexPage
