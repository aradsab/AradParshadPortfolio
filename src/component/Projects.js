import projImg1 from '../assets/img/engine.png';
import projImg2 from '../assets/img/meuseum.png';
import projImg3 from '../assets/img/finance.png';
import projImg4 from '../assets/img/music.png';
import projImg5 from '../assets/img/health.png';
import projImg6 from '../assets/img/crime.png';

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
        },
        {
            title: "Museum Management",
            description: "This application enables museum employees to manage articles, collections, and exhibits effectively. Archivists can search and update articles while recording examination details. Curators can search and organize articles, exhibits, and collections, plan exhibits by adding or removing articles, track visitor and revenue data, and manage collections by updating their contents.",
            imgUrl: projImg2,
            githubLink: "https://github.com/aradsab/SQL-databse-Manager"
        },
        {
            title: "Finance Manager",
            description: "Developed a comprehensive financial management tool to track income, savings, mandatory expenses, and controllable spending. The system provides feedback on spending habits, adjusts budgets based on expense types, and includes a feature to suggest affordable nearby dining options tailored to user budgets and spending patterns.",
            imgUrl: projImg3,
            githubLink: "https://github.com/aradsab/FinanceManager?tab=readme-ov-file"
        },
        {
            title: "Melodybrush",
            description: "Transforms song lyrics into artwork through Amazon Bedrock’s Jurassic-2 Ultra and Stable Diffusion XL 1.0 LLMs.\n" +
                "Conducted hyperparameter tuning on Jurassic-2 (generated descriptive prompts) and SDXL (produced artwork).",
            imgUrl: projImg4,
            githubLink: "https://github.com/aradsab/MusicArt-CIC-hackathon"
        },
        {
            title: "Health Tracker",
            description: "The Health Tracker app helps users improve their physical and mental well-being by creating personalized lifestyle plans based on their health status. Users can monitor their health, receive alerts for potential risks, get tips for a healthier lifestyle, and access tailored meal suggestions with recipes. The app also allows goal setting to align recommendations with individual objectives, emphasizing the impact of daily habits on overall well-being.",
            imgUrl: projImg5,
            githubLink: "https://github.com/aradsab/healthTracker"
        },
        {
            title: "Crime Data Analysis",
            description: "Recently, the rates of crimes in the east of Vancouver have surged, prompting an exploration into the extent of this increase. Downtown Vancouver and Hastings Street have frequently been labeled as high crime areas according to many news sources. Factors such as socioeconomic inequality and poverty in East Vancouver are associated with higher crime rates, which seem to contribute to an elevated crime rate compared to the Westside.",
            imgUrl: projImg6,
            githubLink: "https://github.com/aradsab/Stat-201-Project/blob/main/project.ipynb"
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
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 d-flex flex-column flex-sm-row justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item className="mb-2 mb-sm-0">
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