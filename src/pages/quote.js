import React from "react"
import Hero from "../components/hero"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const QuotePage = () => (
  <Layout>
    <SEO title="Quote" />
    <form name="quote" method="POST" data-netlify="true">
        <input type="text" name="name" id="name" placeholder="John Doe" />
        <input type="email" name="email" placeholder="johndoe@gmail.com" />
        <textarea type="text" name="message" placeholder="Enter Message Text" />
        <button type="submit">Send</button>
    </form>
  </Layout>
)

export default QuotePage