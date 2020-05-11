import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery, Link } from 'gatsby'
import BgImage from 'gatsby-background-image'
import styled from 'styled-components'

const PrimaryButton = styled.div`
    min-width: 160px;
    margin: .6rem;
    max-width: 160px;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    background-color: hsla(210,73%,95%,.9);
    box-shadow: inset 0 0 0 2px hsla(210,73%,95%,1);
    border-radius: 0;
    border: 0;
    transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    height: 2.6rem;
    font-family: Source Sans Pro;
    text-transform: uppercase;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    color: hsla(216, 92%, 62%, 1);
    display: inline-flex;
    &:hover {
        box-shadow: inset 0 0 0 2px rgba(128, 193, 255, 0.98);
        background-color: rgba(128, 193, 255, 0.98);
        color: hsla(210,73%,95%,.9);
        cursor: pointer;
    }

`

const StyledHero = styled(BgImage)`
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
`
const ContentWrap = styled.div`
    padding: 2rem 3rem 0 2.4rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    > div > p {
        display: block;
        font-size: 1rem; 
        letter-spacing: 0.15rem;
        font-family: Source Sans Pro;
        margin-bottom: .6rem;
        font-weight: 600;
        color: hsla(210,73%,95%,1);
        text-transform: uppercase;
        text-align: center;
    }

    > div > a {
        text-decoration: none;
        color: hsla(210,73%,95%,1);
    }

`

const HeroTitle = styled.h1`
    text-align: center;
    font-family: Roboto;
    color: hsla(210,73%,95%,.9);
    width: 100%;
    font-size: 2.6rem;
    margin-bottom: .2rem;

`

const ThanksPage = () => (
  <Layout>
    <SEO title="Thank You!" />
    <StaticQuery
        query={graphql`
            {
                hero: file(relativePath: { eq: "thankyou.jpeg" }) {
                    childImageSharp {
                        fluid(maxWidth: 4000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }`}
        render = {data => {
            const imageData = data.hero.childImageSharp.fluid
            return (
                <StyledHero
                    tag="section"
                    fluid={[`linear-gradient(rgba(65, 82, 98, 0.1),rgba(65, 82, 98, 0.8))`,imageData]}
                >
                    <ContentWrap>
                        <HeroTitle>Thank You For Choosing Selah.</HeroTitle>
                        <div>
                            <p>We'll get back to you with a quote ASAP.</p>
                            <Link to="/news"><PrimaryButton>Articles</PrimaryButton></Link>
                            <Link to="/projects"><PrimaryButton>Projects</PrimaryButton></Link>
                        </div>
                    </ContentWrap>
                </StyledHero>
            )
        }}
        />
  </Layout>
)

export default ThanksPage