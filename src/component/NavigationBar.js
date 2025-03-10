import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/img/LOGO.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import resumePDF from "../assets/resume.pdf";

export const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState("Home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#project"
                            className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/arad-parshad-sabet-156325179/">
                <img src={navIcon1} alt="Social Icon" />
              </a>
            </div>
            <button
                className="vvd"
                onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
              <span>Let's Connect</span>
            </button>
            <button
                className="vvd"
                onClick={() => window.open(resumePDF, "_blank")}
            >
              <span>Show My Resume</span>
            </button>
          </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
