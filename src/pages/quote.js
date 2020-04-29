import React from "react"
import Hero from "../components/hero"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Quote" />
    <form method="post" data-netlify="true">
        <input type="text" name="name" id="name" placeholder="John Doe" />
        <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
        <textarea type="text" name="message" id="message" placeholder="Enter Message Text" />
        <button type="submit">Send</button>
    </form>
  </Layout>
)

export default IndexPage