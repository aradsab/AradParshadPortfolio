import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useEffect, useState } from "react"

export const Banner = () => {
    const changePeriod = 2000
    const toRotate = ["Full-Stack Development", "Distributed Systems", "DevOps Engineering"]

    const [wordNum, setWordNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)
        return () => { clearInterval(ticker) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = wordNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0, text.length + 1)
        setText(updateText)
        if (isDeleting) {
            setDelta(100)
            if (updateText === '') {
                setIsDeleting(false)
                setWordNum(wordNum + 1)
            }
        } else if (updateText === fullText){
            setIsDeleting(true)
            setDelta(changePeriod)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"I'm Arad! "}</h1>
                        <h2>{"I'm passionate about: "}</h2>
                        <h2><span className="wrap">{text || '\u00A0'}</span></h2>
                        <p>I have experience with Java, Python, Go, and TypeScript, building scalable systems using
                            SOLID principles and optimizing algorithms through projects like a Value Iteration
                            simulation. My background in distributed systems, containerization with Docker/Kubernetes,
                            and data science equips me to tackle complex technical challenges and deliver efficient
                            solutions.</p>
                        <button style={{
                            backgroundColor: "purple",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }} onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
                        }}> Let's connnect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img className="img-fluid custom-animation-image" src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}