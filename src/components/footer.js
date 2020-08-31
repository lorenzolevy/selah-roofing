import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledFooter = styled.footer`
  color: hsla(210, 20%, 67%, 1);
  padding: 1.2rem 1rem;
`
const Container = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`

const Icon = styled(FontAwesomeIcon)`
  padding: 0.1rem;
  font-size: 1.8rem;
  color: hsla(210, 73%, 95%, 0.9);
  margin-right: 0.8rem;
  &:hover {
    color: rgba(128, 193, 255, 0.98);
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
`
const IconContainer = styled.div`
  @media (max-width: 600px) {
    padding-top: 0.8rem;
  }
`

const Footer = () => (
  <StyledFooter>
    <Container>
      © {new Date().getFullYear()} Selah Roofing Corporation
      <IconContainer>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/pg/selahroofing.net/"
        >
          <Icon icon={["fab", "facebook"]} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/selahroofingandgutters/"
        >
          <Icon icon={["fab", "instagram"]} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/search?q=selah+roofing&rlz=1C1ASUM_enUS829US829&oq=selah+roofing#lrd=0x80c2cf01a3fb3b9b:0x3b64bd9b48b72dd4,1,,,"
        >
          <Icon icon={["fab", "google"]} />
        </a>
        <a href="mailto:calvin.selahroofing@gmail.com ">
          <Icon icon={["fas", "envelope"]} />
        </a>
      </IconContainer>
    </Container>
  </StyledFooter>
)

export default Footer
