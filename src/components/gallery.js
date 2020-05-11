import React, { Component, Fragment } from 'react'
import Img from "gatsby-background-image"
import styled from "styled-components"
import FsLightbox from 'fslightbox-react'


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
    }
    display: grid;
    > div {
      position: relative;
      overflow: hidden!important;
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

  &:hover {
    background-color: none;
  }

  > h1 {
    margin: 0;
    padding: 1rem 1rem .2rem 1rem;
    font-size: 1.4rem;
    color: hsla(210,73%,95%,1);
  }
  > p {
    padding: .3rem 1rem;
    font-size: 1rem;
    color: hsla(210,20%,80%,1);
    font-family: Rubik;
  }
`



export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      imageIndex : 0,
  };
}
  render() {
    const { data } = this.props;
    const { showLightbox, imageIndex } = this.state;
    return (
     <Fragment>
       <Grid>
          {data.allWordpressAcfProjects.nodes.map((node, index) =>
          <CardWrap 
            key={node.acf.title}
            onClick={() => this.setState({ showLightbox: !showLightbox, imageIndex: index })}
            >
            <ProjectCard fluid={node.acf.image.localFile.childImageSharp.fluid}>
              <CardInner>
                <h1>{node.acf.title}</h1>
                <p>{node.acf.description}</p>
              </CardInner>
            </ProjectCard>
          </CardWrap>
          )}
        </Grid>
        <FsLightbox
          toggler={showLightbox}
          sources={data.allWordpressAcfProjects.nodes.map(node=>node.acf.image.localFile.childImageSharp.fluid.src)}
          sourceIndex={imageIndex}
        />
      </Fragment>
  
    );
  }
  
}