import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import HeaderImg from '../assets/img/header-img.svg'
import sidefloat from '../assets/img/sidefloat.png'
import TrackVisibility from 'react-on-screen'
import 'animate.css'
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Web Developer", "UI/UX Designer", "Graphics designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setisDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className='banner' id='home '>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>

                                    <span className='tagline'>Welcome to my PortFolio</span>
                                    <h1>{`Hi I'm Talha Javed, `}<span className='wrap'>{text}</span></h1>
                                    <p>I am Muhammad Talha Javed, a skilled Front-End Web Developer with a Bachelor’s in Software Engineering from Air University Islamabad, completed in 2024.. I specialize in MERN Stack, and UI/UX design, with experience working across various platforms to create responsive, high-performance web applications. I hold certifications like the Meta Front-End Developer Professional Certificate and am proficient in tools such as Figma and Adobe XD, eager to contribute to innovative teams and build impactful digital experiences.</p>
                                    <button onClick={() => console.log("connect")}>
                                        Let's connect <ArrowRightCircle size={24} />
                                    </button>
                                </div>}

                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={sidefloat} alt='header' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner