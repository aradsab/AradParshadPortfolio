import projImg1 from '../assets/img/project-img1.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import {ProjectCard} from "./ProjectCard";
import {Container, Row, Col, Nav, Tab} from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: "Query Engine",
            description: "• Processes diverse data types, including HTML, ensuring compatibility and accurate results.\n" +
                "• Validates query formats dynamically using EBNF specifications and Abstract Syntax Trees (AST).\n" +
                "• Applies AST-driven filters to data records, enabling precise and scalable query handling.",
            imgUrl: projImg1
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                           Projects
                        </h2>
                        <p>
                            Developed diverse projects, including a NoSQL Query Engine with dynamic AST-based validation, a distributed CNN model using TensorFlow and SageMaker, a Finance Manager tool for tracking expenses and budgets with Django and React, and Melodybrush, a creative platform transforming lyrics into artwork using AWS generative models.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, i) => {
                                                return (
                                                    <ProjectCard key={i} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, i) => {
                                                return (
                                                    <p>
                                                        {project.title}
                                                    </p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src= {colorSharp2}/>
        </section>
    )
}