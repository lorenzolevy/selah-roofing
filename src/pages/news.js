import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const NewsPage = ({data}) => (
  <Layout>
    <SEO title="News" />
    {data.allWordpressPost.nodes.map((node)=>(
        <Post
            key={node.slug}
            title={node.title}
            image={node.featured_media.localFile.childImageSharp.fluid}
            excerpt={node.excerpt}
            slug={node.slug}
        />
    ))}
  </Layout>
)

export const query = graphql`
    {
        allWordpressPost {
            nodes {
                slug
                title
                excerpt
                featured_media {
                    localFile {
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
`

export default NewsPage
