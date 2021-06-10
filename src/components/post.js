import React from "react"
import Img from "gatsby-background-image"
import parse from "html-react-parser"
import { Link } from "gatsby"
import styled from "styled-components"

const CardLink = styled(Link)`
  text-decoration: none;
  overflow: hidden;
`
const CardWrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
  padding: 0.8rem 0.6rem 0 0.6rem;
  > div {
    overflow: hidden;
  }
`

const Card = styled(Img)`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.5s, filter 0.25s;
  &:hover {
    transform: scale(1.01);
    filter: saturate(1.3);
    > div {
      transition: background-color 0.3s ease;
      background-color: transparent;
    }
  }
`
const CardInner = styled.div`
  background-color: hsla(210, 20%, 32%, 0.62);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  text-align: left;
  justify-content: flex-end;
  > h2 {
    color: hsla(210, 73%, 95%, 1);
    padding: 1rem 0 0.6rem 0;
    margin: 0;
  }
  > p {
    font-size: 1rem;
    color: hsla(210, 20%, 80%, 1);
    font-family: Rubik;
    margin: 0;
    padding-bottom: 0.8rem;
  }
`

const Post = props => {
  return (
    <CardWrapper>
      <div>
        <CardLink to={"/news/" + props.slug}>
          <Card fluid={props.image}>
            <CardInner>
              <h2>{props.title}</h2>
              {parse(props.excerpt)}
            </CardInner>
          </Card>
        </CardLink>
      </div>
    </CardWrapper>
  )
}

export default Post
