import { graphql } from "gatsby";

export const NavQuery = graphql`
fragment NavQuery on SanityCategoryConnection {
  edges {
    node {
      name
      slug
    }
  }
}`;

