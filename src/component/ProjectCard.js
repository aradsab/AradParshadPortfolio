import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
    const handleClick = () => {
        window.open(githubLink, "_blank");
    };

    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleClick} style={{ cursor: "pointer" }}>
                <img src={imgUrl} alt={`${title} preview`} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};
