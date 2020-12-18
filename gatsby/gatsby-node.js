
async function createVerticalPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCategory(filter: {}) {
        edges {
          node {
            name
            slug
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
      context: edge.node,
    })
  })

}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createVerticalPages("/", graphql, actions, reporter);
}
