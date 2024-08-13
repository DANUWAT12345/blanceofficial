import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useRef } from 'react';

const imageStyle = {
    height: '500px',
    objectFit: 'cover',
    marginTop: '15px',
};

const ImageItem = ({ src, colSize }) => (
    <Col lg={colSize} xl={colSize}>
        <Image src={src} fluid style={imageStyle} />
    </Col>
);

function PortfolioImage() {

    const images_1 = [
        "https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg",
        "https://en.idei.club/uploads/posts/2023-03/1678775756_en-idei-club-p-modern-luxury-living-room-interer-1.jpg",
        "https://cdna.artstation.com/p/assets/images/images/067/944/320/4k/mokhtar-saber-abdo-4.jpg?1696597527",
        "https://www.a49.com/uploads/sub49_projects/562/gallery_7423_20190705031717.jpg",
        "https://www.a49.com/uploads/sub49_projects/772/gallery_1257_20210602095956.jpg",
        "https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg",
    ];

    const images_2 = [
        "https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg",
        "https://en.idei.club/uploads/posts/2023-03/1678775756_en-idei-club-p-modern-luxury-living-room-interer-1.jpg",
        "https://cdna.artstation.com/p/assets/images/images/067/944/320/4k/mokhtar-saber-abdo-4.jpg?1696597527",
        "https://www.a49.com/uploads/sub49_projects/562/gallery_7423_20190705031717.jpg",
        "https://www.a49.com/uploads/sub49_projects/772/gallery_1257_20210602095956.jpg",
        "https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg",
    ];

    const images_3 = [
        "https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg",
        "https://en.idei.club/uploads/posts/2023-03/1678775756_en-idei-club-p-modern-luxury-living-room-interer-1.jpg",
        "https://cdna.artstation.com/p/assets/images/images/067/944/320/4k/mokhtar-saber-abdo-4.jpg?1696597527",
        "https://www.a49.com/uploads/sub49_projects/562/gallery_7423_20190705031717.jpg",
        "https://www.a49.com/uploads/sub49_projects/772/gallery_1257_20210602095956.jpg",
        "https://www.a49.com/uploads/sub49_projects/564/gallery_1317_20190705043532.jpg",
    ];

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='12' xl='12'>
                        <h1 className='main_title_2'>ผลงานออกแบบสถาปัตยกรรม</h1>
                    </Col>
                    <Col lg='12' xl='12'>
                        <h1 className='main_content_2'>Portfolio content will be list here</h1>
                    </Col>
                    {images_1.map((src, index) => (
                        index % 2 === 0 ? (
                            <ImageItem key={index} src={src} colSize='6' />
                        ) : (
                            <ImageItem key={index} src={src} colSize='6' />
                        )
                    ))}
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col lg='12' xl='12'>
                        <h1 className='main_title_2'>ผลงานออกแบบโครงสร้าง</h1>
                    </Col>
                    <Col lg='12' xl='12'>
                        <h1 className='main_content_2'>Portfolio content will be list here</h1>
                    </Col>
                    {images_2.map((src, index) => (
                        index % 2 === 0 ? (
                            <ImageItem key={index} src={src} colSize='6' />
                        ) : (
                            <ImageItem key={index} src={src} colSize='6' />
                        )
                    ))}
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col lg='12' xl='12'>
                        <h1 className='main_title_2'>ผลงานเขียนแบบยื่นขออนุญาต</h1>
                    </Col>
                    <Col lg='12' xl='12'>
                        <h1 className='main_content_2'>Portfolio content will be list here</h1>
                    </Col>
                    {images_3.map((src, index) => (
                        index % 2 === 0 ? (
                            <ImageItem key={index} src={src} colSize='6' />
                        ) : (
                            <ImageItem key={index} src={src} colSize='6' />
                        )
                    ))}
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col lg='12' xl='12'>
                        <h1 className='main_title_2'>ผลงานเขียน 3D Model</h1>
                    </Col>
                    <Col lg='12' xl='12'>
                        <h1 className='main_content_2'>Portfolio content will be list here</h1>
                    </Col>
                    {images_3.map((src, index) => (
                        index % 2 === 0 ? (
                            <ImageItem key={index} src={src} colSize='6' />
                        ) : (
                            <ImageItem key={index} src={src} colSize='6' />
                        )
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default PortfolioImage;
