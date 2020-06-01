import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import { graphql } from "gatsby"


const ProjectsPage = ({data}) => {
    return(
        <Layout>
            <SEO title="Projects" />
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
