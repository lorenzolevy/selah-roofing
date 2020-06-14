import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Wrapper = styled.div`
    @media (max-width:1150px) {
        min-height: 200px;
        padding-left: 1.2rem;
    }
    padding: 2.4rem 0 .8rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: solid 1px hsla(210,20%,25%,.98);
    height: 33.33%;
    > a {
        text-decoration: none;
    }
`


const ContactItemWrap = styled.div`
    
    text-decoration: none;
    > a {

        display: inline-flex;
        font-family: Rubik;
        text-decoration: none;
        color: hsla(210,73%,95%,.8);

        
        &:hover {
            > svg, p {
                transition: color 0.5s;
                color: rgba(128, 193, 255, 0.98);
            }
        }
        
        

        > p {
            padding: .2rem .6rem 0 .6rem;
            
        }
    }
`

const Icon = styled(FontAwesomeIcon)`
    padding: .1rem;
    font-size: 1.8rem;
    color: hsla(210,73%,95%,.9);
`


const QuoteContacts = () => (
    <>
        
        <Wrapper>
            
            <ContactItemWrap>
            <a href="tel:1-323-870-7046">
                <Icon icon={["fas", "phone-alt"]} />
                <p>(323) 870-7046</p>
            </a> 
            </ContactItemWrap>
            
        </Wrapper>
      
        <Wrapper>
        
            <ContactItemWrap>
            <a href="mailto:calvin.selahroofing@gmail.com ">
                <Icon icon={["fas", "envelope"]} />
                <p>selahroofingcorp@gmail.com</p>
            </a>
            </ContactItemWrap>
        </Wrapper>
        <Wrapper>
            <ContactItemWrap>
            <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/place/Selah+Roofing/@33.9408414,-118.0954894,10z/data=!4m5!3m4!1s0x0:0x3b64bd9b48b72dd4!8m2!3d33.9408414!4d-118.0954894">
                <Icon icon={["fas", "map-marker-alt"]} />
                <p className="offset">Los Angeles, CA</p>
            </a>
            </ContactItemWrap>
            
        </Wrapper>
        
    </>
)

export default QuoteContacts