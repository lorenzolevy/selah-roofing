import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"
import parse from "html-react-parser"
import innertext from "innertext"
import SEO from "../components/seo"
import Footer from "../components/footer"
import styled from "styled-components"

const LayoutWrap = styled.section`
    background-color: hsla(210, 20%, 11%, 1);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Content = styled.div`
    max-width: 1000px;
    
    padding: 1.4rem 1rem 1rem 1rem;
    > h2 {
        font-size: 1.6rem;
        color: hsla(210,73%,95%,1);
    }
    > div {
        color: hsla(210,73%,95%,.9);
    }
    margin: 0 auto;
    flex-grow:1;
`

const BlogLayout = ({data}) => {
    const post = data.wordpressPost
    return(
    <>
    
    <LayoutWrap>
        <SEO
                title={innertext(post.title)}
                description={innertext(post.excerpt)}
            />
        <Header siteTitle="Selah Roofing" />
    <Content>

        <h2>{parse(post.title)}</h2>
        <div>{parse(post.content)}</div>
        
    </Content>
        <Footer />
    </LayoutWrap>
    </>
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
        }
    }
`

export default BlogLayout
