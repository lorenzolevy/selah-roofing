import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import { graphql } from "gatsby"
import styled from "styled-components"
import BgImg from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectHero = styled(BgImg)`
  height: 29vh;
  width: 100%;
  display: flex;
  margin-bottom: 3px;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
`
const HeroTitle = styled.h1`
  font-family: Roboto;
  color: hsla(210,73%,95%,1);
  width: 100%;
  font-size: 2.6rem;
  &:after {
      content: "";
      background-color: hsla(210,73%,95%,1);
      display: block;
      height: 2px;
      margin: 1.6rem 0 1.2rem 0;
      width: 100%;
    }
  @media(max-width: 780px){
    font-size: 2rem;
  }
`
const ContentWrap = styled.div`
    padding: 2rem 3rem 1rem 2.4rem;
    max-width: 1000px;
    > p {
        max-width: 600px;
        display: block;
        font-size: 1rem; 
        letter-spacing: 0.15rem;
        font-family: Source Sans Pro;
        margin-bottom: .6rem;
        font-weight: 600;
        color: hsla(210,73%,95%,1);
        text-transform: uppercase;
        padding-bottom: 0rem;
    }


`

const Icon = styled(FontAwesomeIcon)`
    padding: .1rem;
    font-size: 1.8rem;
    color: hsla(210,73%,95%,.9);
    margin-right: .8rem;
    &:hover {
      color: rgba(128, 193, 255, 0.98);
      cursor: pointer;
      transition: color 0.2s ease-in-out;
  
  }
`

const ProjectsPage = ({data}) => {
    return(
        <Layout>
            <SEO title="Projects" />
            <ProjectHero fluid={[`linear-gradient(hsla(216, 63%, 22%, 0.7),hsla(216, 63%, 22%, 0.2))`]}>
              <ContentWrap>
                <HeroTitle>Projects</HeroTitle>
                <p>See More Of Our Work.</p>
                <a rel="noopener noreferrer" target="_blank" href="https://www.yelp.com/biz_photos/selah-roofing-pico-rivera-california"><Icon icon={["fab", "yelp"]} /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/pg/selahroofing.net/photos/"><Icon icon={["fab", "facebook"]} /></a>
              </ContentWrap>
            </ProjectHero>

            <Gallery data={data} />
        </Layout>
      
    )

}

export const query = graphql`
{
  wpcontent {
    projects {
      nodes {
        projectFields {
          description
          title
          gallery {
            sourceUrl
          }
          image {
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(maxWidth: 900) {
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

export default ProjectsPage
