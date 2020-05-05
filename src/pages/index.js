import React from "react"
import Hero from "../components/hero"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
  
)

export default IndexPage
