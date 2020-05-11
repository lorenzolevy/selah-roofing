import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BgImg from "gatsby-background-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const AboutHero = styled(BgImg)`
  height: 46vh;
  width: 100%;
  display: flex;
  background-size: cover;

`

const ServicesTitle = styled.h1`
  background-color: hsla(210,20%,11%,1);
  color: white;
  margin-bottom: 0;
  text-align: center;
  padding: .6rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  font-family: Source Sans Pro;
  
`

const Commercial = styled(BgImg)`
  height: 46vh;
  margin-right: 3px;
  background-position: center;
  @media(max-width:1300px) {
    width: 100%;
  }

  @media(min-width:1300px) {
    
    width: 33.33%;
  }
`

const Residential = styled(BgImg)`
  height: 46vh;
  @media(max-width:1300px) {
    width: 100%;
  }

  @media(min-width:1300px) {
    
    width: 33.33%;
  }
  
`
const Gutters = styled(BgImg)`
  height: 46vh;
  width: 33.33%;
  
  @media(max-width:1300px) {
    width: 100%;
  }

  @media(min-width:1300px) {
    margin-left: 3px;
    width: 33.33%;
  }
`
const ThirdsContainer = styled.div`
  display: flex;
  width: 100%;
  @media(max-width:1300px) {
    flex-direction: column;
    > div {
      margin-bottom: 3px;
    }
  }

`


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <AboutHero fluid={[`linear-gradient(hsla(210, 20%, 67%, 0.52),hsla(210, 20%, 67%, 0.52))`,data.aboutHero.childImageSharp.fluid]} />
    <ServicesTitle>Our Services</ServicesTitle>
    <ThirdsContainer>
      <Commercial fluid={[`linear-gradient(hsla(210, 87%, 37%, 0.4),hsla(210, 87%, 37%, 0.4))`,data.commercial.childImageSharp.fluid]}>

      </Commercial>
      <Residential fluid={[`linear-gradient(hsla(210, 100%, 57%, 0.4),hsla(210, 100%, 57%, 0.4))`,data.residential.childImageSharp.fluid]} />
      <Gutters fluid={[`linear-gradient(hsla(209, 100%, 75%, 0.4),hsla(209, 100%, 75%, 0.4))`,data.gutters.childImageSharp.fluid]} />
    </ThirdsContainer>
  </Layout>
)

export const query=graphql` 
{
  aboutHero: file(relativePath: {eq: "about-hero.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  gutters: file(relativePath: {eq: "gutters.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  commercial: file(relativePath: {eq: "commercial.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  residential: file(relativePath: {eq: "residential.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}


`

export default AboutPage
