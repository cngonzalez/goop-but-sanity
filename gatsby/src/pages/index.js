import * as React from "react"
import { graphql, Link } from "gatsby";

export const query = graphql`
  query NavQuery {
    vertical: allSanityVertical {
      edges {
        node {
          name
          slug
        }
      }
    }
  }`;

// markup
const IndexPage = (props) => {
  const { data, errors } = props;
  const links = data.vertical.edges.map(edge => (
    <Link to={`/${edge.node.slug}`}> {edge.node.name} </Link>))
  console.log(errors);

  return (
    <main>
      <title>not GOOP</title>
      <h1>
        A Lifestyle Site
      </h1>
      <div>
        { links }
      </div>
        
    </main>
  )
}

export default IndexPage
