import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm'
import logo from '../assets/img/logo.png'
import linkedInIcon from '../assets/img/nav-icon1.svg';
import facebookIcon from '../assets/img/nav-icon2.svg';
import instagarmIcon from '../assets/img/nav-icon3.svg';
const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                    <MailChimpForm />
                    <Col sm={6}>
                        <img src={logo} />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end" >
                        <div className='social-icons'>
                            <a href='https://www.linkedin.com/in/m-talhajaved' target='blank'><img src={linkedInIcon} /></a>
                            <a href='https://www.facebook.com/people/Muhammad-Talha-Javed/100048427184275/?_rdr' target='blank'><img src={facebookIcon} /></a>
                            <a href='https://www.instagram.com/imtalhaj' target='blank'><img src={instagarmIcon} /></a>
                        </div>
                        <p>Copyright @ 2025. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
