import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import BgImage from "gatsby-background-image"
import styled from "styled-components"

const PrimaryButton = styled.div`
  max-width: 300px;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  background-color: linear-gradient(
    to right,
    rgba(65, 82, 98, 0.8),
    rgba(65, 82, 98, 0.1)
  );
  box-shadow: inset 0 0 0 2px hsla(210, 73%, 95%, 1);
  border-radius: 0;
  border: 0;
  transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  height: 2.6rem;
  font-family: Source Sans Pro;
  text-transform: uppercase;
  font-weight: 600;
  justify-content: center;
  align-items: center;

  display: flex;
  &:hover {
    box-shadow: inset 0 0 0 2px rgba(128, 193, 255, 0.98);
    color: rgba(128, 193, 255, 0.98);
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

  > div > p {
    display: block;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    font-family: Source Sans Pro;
    margin-bottom: 0.6rem;
    font-weight: 600;
    color: hsla(210, 73%, 95%, 1);
    text-transform: uppercase;
  }

  > div > a {
    text-decoration: none;
    color: hsla(210, 73%, 95%, 1);
  }
`

const HeroTitle = styled.h1`
  font-family: Roboto;
  color: hsla(210, 73%, 95%, 0.9);
  width: 100%;
  font-size: 2.6rem;
  &:after {
    content: "";
    background-color: hsla(210, 73%, 95%, 1);
    display: block;
    height: 2px;
    margin: 1.6rem 0 1.2rem 0;
    width: 100%;
  }
`

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      {
        wpcontent {
          flex(id: "ZmxleDo3Mw==") {
            flexFields {
              buttontext
              descriptiontext
              fieldGroupName
              titletext
              hero {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 1800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imageData =
        data.wpcontent.flex.flexFields.hero.imageFile.childImageSharp.fluid
      return (
        <StyledHero
          tag="section"
          fluid={[
            `linear-gradient(to right, rgba(65, 82, 98, 0.8),rgba(65, 82, 98, 0.1))`,
            imageData,
          ]}
        >
          <ContentWrap>
            <HeroTitle>{data.wpcontent.flex.flexFields.titletext}</HeroTitle>
            <div>
              <p>{data.wpcontent.flex.flexFields.descriptiontext}</p>
              <Link to="/quote">
                <PrimaryButton>
                  {data.wpcontent.flex.flexFields.buttontext}
                </PrimaryButton>
              </Link>
            </div>
          </ContentWrap>
        </StyledHero>
      )
    }}
  />
)

export default HeroSection
