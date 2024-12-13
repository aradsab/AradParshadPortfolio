import projImg1 from '../assets/img/engine.png';
import sparkImg from '../assets/img/spark.png';
import sagemakerImg from '../assets/img/sagemaker.png';

import colorSharp2 from '../assets/img/color-sharp2.png';

import {ProjectCard} from "./ProjectCard";
import {Container, Row, Col, Nav, Tab} from "react-bootstrap";

export const Projects = () => {
    const projects = [
        {
            title: "Query Engine",
            description: "Processes diverse data types, including HTML, ensuring compatibility and accurate results.\n" +
                "Validates query formats dynamically using EBNF specifications and Abstract Syntax Trees (AST).\n" +
                "Applies AST-driven filters to data records, enabling precise and scalable query handling.",
            imgUrl: projImg1,
            githubLink: "https://github.com/aradsab/Query-Engine"
        }
    ]

    const projects2 = [
        {
            title: "Spark Streaming",
            description: "This project involves building a Spark Streaming application designed for real-time processing of text data. The application computes word frequencies from text files placed in a specified directory. It demonstrates a typical stream processing architecture using Apache Spark.",
            imgUrl: sparkImg,
            githubLink: "https://github.com/aradsab/Image-Recognition/tree/main/Spark%20Streaming"
        },
        {
            title: "Distributed Machine Learning",
            description: "This project demonstrates the end-to-end workflow of training, saving, loading, deploying, and running a Convolutional Neural Network (CNN) model using the CIFAR-10 dataset. The deployment utilizes AWS SageMaker for distributed training and inference, with a comparison to local machine execution.",
            imgUrl: sagemakerImg,
            githubLink: "https://github.com/aradsab/Image-Recognition/tree/main/Distributed%20Machine%20Learning"
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
                                    <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Cloud Computing</Nav.Link>
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
                                            projects2.map((project, i) => {
                                                return (
                                                    <ProjectCard key={i} {...project}/>
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