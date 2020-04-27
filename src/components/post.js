import React from "react"
import Img from "gatsby-image"
import parse from "html-react-parser"
import { Link } from "gatsby"

const Post = (props) => (
    <div>
        <Link to={props.slug}>
        <Img fluid={props.image} />
        <h2>{props.title}</h2>
        <p>{parse(props.excerpt)}</p>
        </Link>
    </div>
)

export default Post