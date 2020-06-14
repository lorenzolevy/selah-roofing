import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BgImg from "gatsby-background-image"
import { graphql } from "gatsby"
import styled from "styled-components"

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

const SectionTitle = styled(HeroTitle)`
&:after {
  content: "";

  display: none;

}
margin-bottom: .6rem;
`

const AboutHero = styled(BgImg)`
  height: 50vh;
  width: 100%;
  display: flex;
  margin-bottom: 3px;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  @media(max-width: 340px) {
    
    height: 100vh;
    
  }
`

const ThirdsContainer = styled.div`
  > div {
    height: 500px;
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  display: flex;
  width: 100%;
  @media(max-width:1300px) {
    flex-direction: column;
    > div {
      width: 100%;
      margin-bottom: 3px;

    }
  }
  @media(max-width:730px) {
    flex-direction: column;
    > div {
      margin-bottom: 3px;
      height: 300px;
    }
  }
`

const ContentWrap = styled.div`
    padding: 2rem 3rem 0 2.4rem;
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
        padding-bottom: .8rem;
    }


`

const ServicesContentWrap = styled(ContentWrap)`


  > h1 {
    font-size: 2rem;
    @media(max-width: 780px){
      font-size: 1.8rem;
    }
    
  }

    > p {
      font-size: 1rem;
      font-family: Roboto;
      letter-spacing: 0.05rem;
      font-weight: 400;
      text-transform: none;
      color: hsla(210,73%,95%,.8);
      padding: 0;
    }


`


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <AboutHero fluid={[`linear-gradient(hsla(216, 63%, 22%, 0.7),hsla(216, 63%, 22%, 0.2))`]}>
      <ContentWrap><HeroTitle>Protecting Your Homes and Businesses From Weathering...<br/> In Style.</HeroTitle><p>trusted roofers supported by over 100 years of senior management experience in the Los Angeles area.</p></ContentWrap>
    </AboutHero>
    <ThirdsContainer>
      <BgImg fluid={[`linear-gradient(hsla(216, 63%, 22%, 0.6),hsla(216, 63%, 22%, 0.6))`,data.commercial.childImageSharp.fluid]}>
        <ServicesContentWrap><SectionTitle>Commercial</SectionTitle><p>
        We provide top-quality installation for businesses and apartments, and can have your new roofing installed in no time at all.
          </p></ServicesContentWrap>
      </BgImg>

      <BgImg fluid={[`linear-gradient(hsla(216, 63%, 22%, 0.6),hsla(216, 63%, 22%, 0.6))`,data.residential.childImageSharp.fluid]}>
      <ServicesContentWrap><SectionTitle>Residential</SectionTitle><p>
      Our roofers are professional. They can assist with leak repair and roof remodeling, allowing you to get the exact look you want.
          </p></ServicesContentWrap>
      </BgImg>
      <BgImg fluid={[`linear-gradient(hsla(216, 63%, 22%, 0.6),hsla(216, 63%, 22%, 0.6))`,data.gutters.childImageSharp.fluid]}>
      <ServicesContentWrap><SectionTitle>Gutters</SectionTitle><p>
      We specialize in seamless rain gutters, which will help prevent leaks while adhering to the aesthetic standards of your property.
          </p></ServicesContentWrap>
      </BgImg>
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
