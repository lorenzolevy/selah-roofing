import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const NewsPage = ({data}) => (
  <Layout>
    <SEO title="News" />
    {data.wpcontent.posts.nodes.map(node=>(
        <Post
            key={node.slug}
            title={node.title}
            image={node.featuredImage.imageFile.childImageSharp.fluid}
            excerpt={node.excerpt}
            slug={node.slug}
        />
    ))}
  </Layout>
)

export const query = graphql`
{
    wpcontent {
        posts {
            nodes {
                excerpt
                title
                slug
                featuredImage {
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
`

export default NewsPage
