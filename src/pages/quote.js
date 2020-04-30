import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const QuotePage = () => (
  <Layout>
    <SEO title="Quote" />
    <form
  action="https://formspree.io/mvowplao"
  method="POST"
>
  <label>
    Your email:
    <input type="text" name="_replyto" />
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>


  <button type="submit">Send</button>
</form>
  </Layout>
)

export default QuotePage