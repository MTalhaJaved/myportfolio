import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'

import project1 from '../assets/img/tpclicks-project.jpg'
import project2 from '../assets/img/dashboard-project.jpg'
import projectImg1 from '../assets/img/project-img1.png'
import projectImg2 from '../assets/img/project-img2.png'
import projectImg3 from '../assets/img/project-img3.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css'

const Project = () => {
  const project = [
    {
      title: "TP Clicks",
      description: " Portfoilo website for a Photography brand",
      imgUrl: project1
    },
    {
      title: "E-Commerce Dashboard ",
      description: "Dashboard for admin to manage an ecommerce website",
      imgUrl: project2
    },
    {
      title: "Business Startup ",
      description: " This is description",
      imgUrl: projectImg3
    },

    {
      title: "Business Startup ",
      description: " This is description",
      imgUrl: projectImg1
    },
    {
      title: "Business Startup ",
      description: " This is description",
      imgUrl: projectImg2
    },
    {
      title: "Business Startup ",
      description: " This is description",
      imgUrl: projectImg3
    },

  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__animate__bounce" : ""}>

                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            project.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>UI/ UX designs of some projects are in progress... Will be updated soon!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                         <Row>
                          {
                            project.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Project
