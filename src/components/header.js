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
  @media (max-width:420px) {
    > p {
      display: none;
    }
  }


  

`

const Icon = styled(FontAwesomeIcon)`
    padding: .1rem;
    font-size: 1.8rem;
    color: hsla(210,73%,95%,.9);
    transform: translateY(20%);
    &:hover {
      color: rgba(128, 193, 255, 0.98);
    }
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
  z-index: 1001;
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


  @media (max-width: 980px){
    overflow: auto;
    position: fixed;
    width: 100%;
    background-color: hsla(210,20%,11%,1);
    height: 100%;
    top: 76px;
    margin: 0;
    padding: 1.2rem 1.6rem 0 2.4rem;
    left: -100%;
    transition: .5s;
    z-index: 110
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > a {
      padding: .6rem 0 .3rem 0;
      display: block;
      color: hsla(210, 73%, 95%, 1);
    }
  

  }
  @media (max-width: 520px){
    top: 72px;
  }
  @media (max-width: 450px){
    top: 68px;
  }
  @media (max-width: 430px){
    top: 60px;
  }
  @media (max-width: 340px){
    top: 86px;
  }

`


const Header = ({ siteTitle }) => (
  <StyledHeader>
      <StyledLink title="Navigate to home" to="/"> 
        <Title>
          {siteTitle}
        </Title>
      </StyledLink>
      <input type="checkbox" id="res-menu" />
      <NavMenu id="navigation">
        <StyledLink to ="/" activeStyle={activeStyles}>Home</StyledLink>
        <StyledLink to ="/about" activeStyle={activeStyles}>About</StyledLink>
        <StyledLink to="/quote" activeStyle={activeStyles}>Contact</StyledLink>
        <StyledLink to ="/news" partiallyActive={true} activeStyle={activeStyles}>News</StyledLink>
        <StyledLink to ="/projects" activeStyle={activeStyles}>Projects</StyledLink>
      </NavMenu>
      
      <CallWrap>
      <a title="Click to call Selah Roofing" style={{textDecoration: `none`}} href="tel:1-323-870-7046">
        <div>
          <p id="num-text">CALL</p>
          <p id="number">(323) 870-7046</p>
          <Icon icon={["fas", "phone-alt"]} />
        </div>
      </a>
      </CallWrap>
      
      <label htmlFor="res-menu">
        <Icon icon={["fas", "bars"]} id="sign-one" />
        <Icon icon={["fas", "times"]} id="sign-two"/>
      </label>
      
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
