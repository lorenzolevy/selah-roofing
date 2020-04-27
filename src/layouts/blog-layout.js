import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"
import parse from "html-react-parser"


const BlogLayout = ({data}) => {
    const post = data.wordpressPost;
    return(
    <div>
    <Header siteTitle="Selah Roofing" />
    <h1>{parse(post.title)}</h1>
    <div>{parse(post.content)}</div>
    </div>
    )
}

export const query = graphql`
    query($slug: String!){
        wordpressPost(slug:{eq: $slug}){
            title
            content
            
        }
    }
`

export default BlogLayout
