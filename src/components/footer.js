import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    font-family: Rubik;
    color: hsla(210, 20%, 67%, 1);
    padding: 1.2rem 1rem;
    height: 3.5rem;
    > div {
        display: flex;
        align-items: baseline;
    }

`

const Footer = () => (
    <StyledFooter>
        <div>
        © {new Date().getFullYear()} Selah Roofing Corporation
        </div> 
    </StyledFooter>
)

export default Footer