import styled from "styled-components"


const PrimaryButton = styled.button`
    margin: .8rem 1.2rem 0rem 1.2rem;
    font-size: .8rem;
    letter-spacing: 0.15rem;
    background-color: hsla(210, 20%, 11%, 1);
    box-shadow: inset 0 0 0 2px hsla(210,73%,95%,1);
    border-radius: 0;
    border: 0;
    transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
    padding: 0 1.6rem;
    height: 2.6rem;
    font-family: Source Sans Pro;
    text-transform: uppercase;
    font-weight: 600;
    &:hover {
        box-shadow: inset 0 0 0 2px rgba(128, 193, 255, 0.98);
        color: rgba(128, 193, 255, 0.98);
        cursor: pointer;
    }

`

export default PrimaryButton