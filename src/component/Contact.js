import {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";

import contactImage from '../assets/img/contact-img.svg'
import * as emailjs from "emailjs-com";
import toast from "bootstrap/js/src/toast";

export const Contact = () => {
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

    const onFromUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,[category]: value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        setButtonText("Sending...");
        await sendMessage()
        setButtonText("Send");
        setFormDetails(formInitialDetails);
    }
    async function sendMessage() {
        const templateParams = {
            from_name: "Arad",
            to_name: "arad.prsabet@gmail.com",
            message: formDetails.message
        };
        var data = {
            service_id: 'service_jfcymw7',
            template_id: 'template_5enn6dq',
            user_id: 'w5ZsPxehfJLhojgwd',
            template_params: templateParams
        };

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert('Your mail is sent!');
                } else {
                    return response.json().then(error => {
                        throw new Error(JSON.stringify(error));
                    });
                }
            })
            .catch(error => {
                alert('Oops... ' + error.message);
            });
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="Contact Me"/>
                    </Col>
                    <Col md={6}>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => {onFromUpdate("firstName", e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => {onFromUpdate("lastName", e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => {onFromUpdate("email", e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => {onFromUpdate("phone", e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} onChange={(e) => {onFromUpdate("message", e.target.value)}} />
                                    <button type="submit" ><span> {buttonText} </span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.message === false ? "danger": "success"}>{status.message}</p>
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