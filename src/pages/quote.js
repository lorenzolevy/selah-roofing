import React from "react"

import QuoteForm from "../components/quote-form"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const QuotePage = () => (
  <Layout>
    <SEO title="Contact" />
    <QuoteForm />
  </Layout>
)

export default QuotePage