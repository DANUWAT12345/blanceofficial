import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const cardsData = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        title: "Portfolio",
        text: "เยี่ยมชมผลงานของเรา",
        refH: "/portfolio"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        title: "About",
        text: "ทำความรู้จักเราให้มากขึ้น",
        refH: "/about"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        title: "Contact",
        text: "ติดต่อเรา",
        refH: "/contact"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        title: "Sservices",
        text: "บริการต่างๆ",
        refH: "/services"
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        title: "Pricing",
        text: "ราคาค่าบริการ",
        refH: "/pricing"
    }
];


function CardHome({ src, title, text, refH }) {

    const navigate = useNavigate();

    const handleNavigation = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(refH);
    };

    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary" onClick={handleNavigation}>Go to</Button>
            </Card.Body>
        </Card>
    );
}

function BalanceProduction() {
    const marginStyle = {
        margin: '28px',
        textAlign: 'left',
    };

    return (
        <div>
            <h1 style={marginStyle}>
                See More
            </h1>
        </div>
    );
}

function CardRender() {
    return (
        <Container>
            <BalanceProduction />
            <Row>
                {cardsData.map((card, index) => (
                    <Col key={index} className="d-flex justify-content-center mb-3" lg={3} md={4}>
                        <CardHome src={card.src} title={card.title} text={card.text}  refH={card.refH}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardRender;
