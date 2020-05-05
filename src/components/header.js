import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CallWrap = styled.div`
  max-height: 40px;
  margin-left: auto;
  align-items: baseline;
  display: inline-flex;
  a > div {

    &:hover {
      > svg, p {
          transition: color 0.5s;
          color: rgba(128, 193, 255, 0.98);
      }
  }
    
    align-items: baseline;
    display: inline-flex;
    color: hsla(210,73%,95%,.9);
    > p {
      margin-right: .3rem;
      display: block;
      font-size: 1rem; 
      letter-spacing: 0.15rem;
      font-family: Source Sans Pro;
      
      font-weight: 600;
      color: hsla(210,73%,95%,1);
      text-transform: uppercase;
    }
  }

`

const Icon = styled(FontAwesomeIcon)`
    padding: .1rem;
    font-size: 1.8rem;
    color: hsla(210,73%,95%,.9);
    transform: translateY(20%);
`

const activeStyles = {
  color: 'hsla(209, 100%, 75%, .98)'
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
const StyledHeader = styled.header`
  background-color: hsla(210, 20%, 25%, .98);
  display: flex;
  align-items: baseline;
  padding: 1rem 1rem;
  position: sticky;
  top: 0;
  z-index: 100;

`
const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  color: hsla(210, 73%, 95%, 1);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  transition: color 0.3s;
  &:hover {
      color: rgba(128, 193, 255, 0.98);
    }
`
const NavMenu = styled.nav`
  margin-left: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  > a {
    margin-right: 1rem;
    color: hsla(210, 20%, 80%, 1);
    font-family: Rubik;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: color 0.3s;
    &:hover {
        color: rgba(128, 193, 255, 0.98);
      }
  }
`


const Header = ({ siteTitle }) => (
  <StyledHeader>
      <StyledLink to="/"> 
        <Title>
          {siteTitle}
        </Title>
      </StyledLink>
      <NavMenu>
      <StyledLink to ="/" activeStyle={activeStyles}>Home</StyledLink>
        <StyledLink to ="/about" activeStyle={activeStyles}>About</StyledLink>
        <StyledLink to="/quote" activeStyle={activeStyles}>Contact</StyledLink>
        <StyledLink to ="/news" activeStyle={activeStyles}>News</StyledLink>
        <StyledLink to ="/projects" activeStyle={activeStyles}>Projects</StyledLink>
      </NavMenu>
      
      <CallWrap>
      <a style={{textDecoration: `none`}} href="tel:1-323-870-7046">
        <div>
          <p>CALL</p>
          <Icon icon={["fas", "phone-alt"]} />
        </div>
      </a>
      </CallWrap>
      
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
