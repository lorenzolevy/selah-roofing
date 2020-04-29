import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BgImage from 'gatsby-background-image'
import styled from 'styled-components'

const StyledHero = styled(BgImage)`
    height: 100vh;
`

const HeroSection = () => (
    <StaticQuery
        query={graphql`
            query {
                hero: file(relativePath: { eq: "hero.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1800) {
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
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <h2>Free Quote</h2>
                </StyledHero>
            )
        }}
        />
)



export default HeroSection