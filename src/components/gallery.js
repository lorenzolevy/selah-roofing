import React, { Component, Fragment } from "react"
import Img from "gatsby-background-image"
import styled from "styled-components"
import FsLightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const Grid = styled.div`
  @media (max-width: 680px) {
    > div > div {
      height: 270px;
      margin-bottom: 3px;
    }
  }
  @media (max-width: 1150px) and (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    > div > div {
      height: 300px;
    }
  }
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    > div > div {
      height: 450px;
    }
  }
  display: grid;
  > div {
    position: relative;
    overflow: hidden !important;
  }
  max-width: 2000px;
  margin: 0 auto;
`
const CardWrap = styled.div`
  overflow: hidden;
`

const ProjectCard = styled(Img)`
  height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s, filter 0.25s;
  &:hover {
    transform: scale(1.08);
    filter: saturate(1.3);
    overflow: hidden;
    background-color: none;
  }
`
const CardInner = styled.div`
  overflow: hidden;
  background-color: hsla(210, 20%, 32%, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1rem;
  font-family: Roboto;
  &:hover {
    background-color: none;
  }

  > h1 {
    margin: 0;
    padding: 1rem 1rem 0.2rem 1rem;
    font-size: 1.4rem;
    color: hsla(210, 73%, 95%, 1);
  }
  > p {
    padding: 0.3rem 1rem;
    font-size: 1rem;
    color: hsla(210, 20%, 80%, 1);
    font-family: Roboto;
    font-weight: 300;
  }
`

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      imageIndex: 0,
      listIndex: 0,
    }
  }
  render() {
    const { data } = this.props
    const { showLightbox, imageIndex, listIndex } = this.state
    const galsList = data.wpcontent.projects.nodes.map(node =>
      node.projectFields.gallery.map(url => url.sourceUrl)
    )
    return (
      <Fragment>
        <Grid>
          {data.wpcontent.projects.nodes.map((node, index) => (
            <CardWrap
              key={node.projectFields.title}
              onClick={() =>
                this.setState({
                  showLightbox: true,
                  imageIndex: index,
                  listIndex: 0,
                })
              }
            >
              <ProjectCard
                fluid={node.projectFields.image.imageFile.childImageSharp.fluid}
              >
                <CardInner>
                  <h1>{node.projectFields.title}</h1>
                  <p>{node.projectFields.description}</p>
                </CardInner>
              </ProjectCard>
            </CardWrap>
          ))}
        </Grid>
        {showLightbox && (
          <FsLightbox
            mainSrc={galsList[imageIndex][listIndex]}
            nextSrc={
              galsList[imageIndex][
                (listIndex + 1) % galsList[imageIndex].length
              ]
            }
            prevSrc={
              galsList[imageIndex][
                (listIndex + galsList[imageIndex].length - 1) %
                  galsList[imageIndex].length
              ]
            }
            onCloseRequest={() => this.setState({ showLightbox: false })}
            onMovePrevRequest={() =>
              this.setState({
                listIndex:
                  (listIndex + galsList[imageIndex].length - 1) %
                  galsList[imageIndex].length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                listIndex: (listIndex + 1) % galsList[imageIndex].length,
              })
            }
          />
        )}
      </Fragment>
    )
  }
}
