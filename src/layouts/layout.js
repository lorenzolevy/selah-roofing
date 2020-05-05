import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/layout.css"
import styled from "styled-components"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faPhoneAlt, faMapMarkerAlt)


const Container = styled.div`
  background-color: hsla(210, 20%, 11%, 1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const Content = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    
    <Container>
    <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
          <main>{children}</main>
      </Content>
      <Footer />
    </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
