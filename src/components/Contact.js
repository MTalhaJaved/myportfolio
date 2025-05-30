
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContactImage from '../assets/img/contact-img.svg'

const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({
                success: true,
                message: "Message Sent Successfully"
            });
        }
        else {
            setStatus({
                success: false,
                message: "Something went wrong! Please try again  later",
            });
        }
    }
    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={ContactImage} alt='contact Image ' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>

                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows={6} type='text' value={formDetails.message} placeholder='Enter your message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'> <span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message} </p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
