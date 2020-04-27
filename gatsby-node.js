const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path")

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions;
    return graphql(`
    {
        allWordpressPost {
            nodes {
                slug
            }
        }
    }
    `).then(result => {
        result.data.allWordpressPost.nodes.forEach((node)=>{
            createPage({
                path: node.slug,
                component: path.resolve('./src/layouts/blog-layout.js'),
                context: {
                    slug: node.slug
                }
            })
        })
    })
}