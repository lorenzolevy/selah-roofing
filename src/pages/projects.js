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
    allWordpressAcfProjects {
      nodes {
        acf {
          description
          title
          image {
            localFile {
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
`

export default ProjectsPage
