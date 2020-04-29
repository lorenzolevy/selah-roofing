import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"
import parse from "html-react-parser"
import innertext from "innertext"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogLayout = ({data}) => {
    const post = data.wordpressPost
    return(
    <div>
        <SEO
            title={innertext(post.title)}
            description={innertext(post.excerpt)}
        />
        <Header siteTitle="Selah Roofing" />
        <h2>{parse(post.title)}</h2>
        <div>{parse(post.content)}</div>
        <Footer />
    </div>
    )
}

export const query = graphql`
    query($slug: String!){
        wordpressPost(slug:{eq: $slug}){
            title
            excerpt
            content
            featured_media{
                source_url
            }
            categories {
                name
            }
        }
    }
`

export default BlogLayout
