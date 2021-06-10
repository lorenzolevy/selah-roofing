import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="News" />

    {data.wpcontent.posts.nodes.map(post => (
      <Post
        title={post.title}
        image={post.featuredImage.node.imageFile.childImageSharp.fluid}
        excerpt={post.excerpt}
        slug={post.slug}
      />
    ))}
  </Layout>
)

export const query = graphql`
  {
    wpcontent {
      posts {
        nodes {
          title
          excerpt
          slug
          featuredImage {
            node {
              id
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 980) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default NewsPage
