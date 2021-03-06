import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { navigate } from "@reach/router"  
import styled from "styled-components";
import QuoteContacts from "./quote-contacts"
import PrimaryButton from "./primary-button"


const StyledLabel = styled.label` 
    display: block;
    font-size: .8rem; 
    letter-spacing: 0.15rem;
    font-family: Source Sans Pro;
    margin-bottom: .6rem;
    font-weight: 600;
`
const Container = styled.div`
    

    display: flex;
    @media (max-width: 1150px) {
       flex-direction: column; 
    }
    @media (min-width: 1150px) {
        width: 100%;
    }
    @media (min-width: 1400px) {
        border-right: solid 1px hsla(210,20%,25%,.98);
    }
`
const FieldsContainer = styled.div`
    color: hsla(210,73%,95%,1);
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`
const HalfField = styled.div`

    @media (max-width: 610px) {
        width: 100%;
    }

    @media (min-width: 610px){
            width: 50%;
        }
    
    flex-grow: 0;
    flex-shrink: 0;
    padding: 1.2rem 0 0 1.2rem;
    > input,select {
        
        width: 100%;
        line-height: 1.8rem;
        height: 2.4rem;
        display: block;
        padding: 0 12px;
        > div {
            color: red;
        }
        
    }
`
const FullField = styled.div`
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 1.2rem 0 0 1.2rem;
    > textarea {
        width: 100%;
        display: block;
        padding: 10px 12px;
        
    }
    > input,select {
        
        width: 100%;
        line-height: 1.8rem;
        height: 2.4rem;
        display: block;
        padding: 0 12px;
        > div {
            color: red;
        }
        
    }
`
const PrimarySection = styled.section`
border-bottom: solid 1px hsla(210,20%,25%,.98);

    @media (max-width: 1150px) {
        width: 100%;
    }
    @media (min-width: 1150px) {
        border-right: solid 1px hsla(210,20%,25%,.98);
        width: 65%;
    }

    display: block;
    padding: 3rem 2.6em 2rem 0;

`

const SecondarySection = styled.section`

    @media (min-width: 1150px) {
        width: 100%;
    }

    @media (min-width: 1150px) {
        width: 35%;
    }
    
    display: block;
`

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    address: Yup.string()
       .required('Required'),
    phone: Yup.string()
        .required('Required'),  
  });

function QuoteForm() {
    return(
    <Container>
        <PrimarySection>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    address: '',
                    phone: '',
                    escrow: 'no',
                    ref: 'google',
                    type: 'replace',
                    claim: 'no',
                    description: '',
                    comms: 'call' 
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    // same shape as initial values
                    
                    fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: encode({ "form-name": "quote-form-selah", ...values, })
                      })
                      .then(() => {
                        navigate(`/thankyou`);
                      })
                      .catch(()=> {
                          alert('Something went wrong... Please try again!')
                      })
                      .finally(() => actions.setSubmitting(false))
                }}
                    >
            {({ errors, touched }) => (
                <Form name="quote-form-selah" data-netlify={true} data-netlify-honeypot="bot-field">
                    <FieldsContainer>
                        <Field type="hidden" name="bot-field" id="bot-field" />
                        <HalfField>
                            <StyledLabel htmlFor="name">NAME</StyledLabel>
                            {errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}
                            <Field name="name" id="name" />
                            
                        </HalfField>
                        
                        <HalfField>
                            <StyledLabel htmlFor="email">EMAIL</StyledLabel>
                            {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                            <Field name="email" type="email" id="email" />
                                                   
                        </HalfField>
                        
                        <HalfField>
                            <StyledLabel htmlFor="address">ADDRESS</StyledLabel>
                            {errors.address && touched.address ? (<div className="error">{errors.address}</div>) : null}
                            <Field name="address" id="address" />
                                                   
                        </HalfField>

                        <HalfField>
                            <StyledLabel htmlFor="phone">PHONE NUMBER</StyledLabel>
                                {errors.phone && touched.phone ? (<div className="error">{errors.phone}</div>) : null}
                                <Field name="phone" id="phone" />
                            
                        </HalfField>

                        <HalfField>
                            <StyledLabel htmlFor="type">PROJECT TYPE</StyledLabel>
                                <Field as="select" name="type" id="type">
                                    <option value="replace">Replacement</option>
                                    <option value="repair">Repair</option>
                                </Field>
                            
                        </HalfField>

                        <HalfField>
                            <StyledLabel htmlFor="escrow">IN ESCROW?</StyledLabel>
                                <Field as="select" name="escrow" id="escrow">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Field>
                            
                        </HalfField>

                        <FullField>
                            <StyledLabel htmlFor="claim">IS THIS AN INSURANCE CLAIM?</StyledLabel>
                                <Field as="select" name="claim" id="claim">
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </Field>
                            
                        </FullField>


                        <HalfField>
                            <StyledLabel htmlFor="ref">REFERRAL</StyledLabel>
                                <Field as="select" name="ref" id="ref">
                                    <option value="google">Google</option>
                                    <option value="yelp">Yelp</option>
                                    <option value="friend">Acquaintance</option>
                                </Field>
                            
                        </HalfField>

                        <HalfField>
                            <StyledLabel htmlFor="comms">METHOD OF COMMUNICATION</StyledLabel>
                                <Field as="select" name="comms" id="comms">
                                    <option value="call">Call</option>
                                    <option value="email">Email</option>
                                    <option value="text">Text</option>
                                </Field>
                            
                        </HalfField>



                        <FullField>
                            <StyledLabel htmlFor="description">PROJECT DESCRIPTION</StyledLabel>
                                <Field component="textarea" name="description" id="description" rows="10" />
                            
                        </FullField>
                    </FieldsContainer>

                    <PrimaryButton type="submit">Submit</PrimaryButton>

                </Form>
            )}
            </Formik>
        </PrimarySection>
        <SecondarySection>
            <QuoteContacts />
        </SecondarySection>
  </Container>
  )
}

export default QuoteForm;