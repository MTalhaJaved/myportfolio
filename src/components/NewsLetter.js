import React, { useState, useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

const NewsLetter = (onValiated, status, message) => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValiated({
                EMAIL: email
            });
    }

    const clearFields = () => {
        setEmail('');
    }

    useEffect(() => {
        if (status === 'success') {
            clearFields();
        }
    }, [status])
    return (
        <div>
            <Col lg={12}>
                <div className='newsletter-bx'>
                    <Row>
                        <Col lg={12} md={6} xl={5}>
                            <h3>Subscribe to NewsLetter</h3>
                            {status === "sending" && <Alert>Sending</Alert>}
                            {status === "errorg" && <Alert variant='danger'>{message}</Alert>}
                            {status === "success" && <Alert variant='success'>{message}</Alert>}
                        </Col>
                        <Col md={6} xl={7}>
                            <form onSubmit={handleSubmit}>

                                <div className='new-email-bx'>
                                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                                    <button type='submit'>Submit</button>
                                </div>
                            </form>

                        </Col>

                    </Row>
                </div>
            </Col>
        </div>
    )
}

export default NewsLetter
