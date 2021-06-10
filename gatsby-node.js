const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query GET_POSTS {
      wpcontent {
        posts {
          nodes {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.wpcontent.posts.nodes.forEach(node => {
      createPage({
        path: "/news/" + node.slug,
        component: path.resolve("./src/layouts/blog-layout.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
