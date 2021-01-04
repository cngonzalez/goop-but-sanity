
async function createVerticalPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCategory {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);  

  if (result.errors) {
      throw result.errors
  }

  const verticals = result.data.allSanityCategory.edges || []
  verticals.forEach((edge, index) => {
    const path = `/${edge.node.slug}`
    createPage({
      path,
      component: require.resolve("./src/templates/hub.js"),
      context: {
        catId: edge.node.id
      }
    })
  })

}

async function createOtherPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
       allSanityRoute {
          edges {
            node {
              slug {
                current
              }
              page {
                id
              }
              id
            }
          }
        }
    }
  `);  

  if (result.errors) {
      throw result.errors
  }

  const pages = result.data.allSanityPage.edges || []
  pages.forEach((edge, index) => {
    //TODO: throw error, safeguard against empties
const path = `/${edge.node.category.name}/${edge.node.route.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: edge.node,
    })
  })

}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createVerticalPages("/", graphql, actions, reporter);
  await createOtherPages("/", graphql, actions, reporter);
}
