import React from 'react';
import image1 from '../Assets/dashboard-card.png';
import image2 from '../Assets/components-card.png';
import image3 from '../Assets/map-card.png';
import background from '../Assets/home-bg.png';
import { Card, Col, Row, Divider } from 'antd';
import Defaultframe from '../Components/Defaultframe';
const { Meta } = Card;

const Home = () => {
    return (
        <Defaultframe>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', overflowX: 'hidden' }}>
                <div style={{ margin: "0px 20px 5px 20px" }} >
                    <Row justify="center" style={{ margin: '0px 150px' }}>
                        <p style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>Seja Bem-vindo(a), ao CY-IOT</p>
                        <Divider style={{ backgroundColor: '#efefef', marginTop: '0px', }} />
                    </Row>
                    <Row justify="center">
                        <p style={{ fontSize: "16px", textAlign: "center", margin: "0px 150px 40px 150px" }}>
                            Este projeto desenvolve um sistema para monitorar a temperatura dos freios a tambor de caminhões,
                            acionando alertas em caso de superaquecimento. Isso aumenta a segurança e facilita a manutenção
                            preventiva.
                        </p>
                    </Row>
                </div>
                <Row gutter={[48]} justify="center" style={{ padding: '24px 16px' }}>
                    <Col>
                        <a href='/dashboard'>
                            <Card
                                hoverable
                                style={{
                                    width: 360,
                                    height: '100%',
                                }}
                                cover={<img alt="dashboard" src={image1} />}
                            >
                                <Meta
                                    title={<p style={{ fontSize: "24px", textAlign: "center" }}>Dashboard Inteligente</p>}
                                    description={
                                        <div>
                                            <p style={{ textAlign: "center" }}>
                                                Dashboard personalizado para suas necessidades.
                                            </p>
                                        </div>
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/components'>
                            <Card
                                hoverable
                                style={{
                                    width: 360,
                                    height: '100%',
                                }}
                                cover={<img alt="components" src={image2} />}
                            >
                                <Meta
                                    title={<p style={{ fontSize: "24px", textAlign: "center" }}>Componentes do Projeto</p>}
                                    description={
                                        <div>
                                            <p style={{ textAlign: "center" }}>
                                                Descubra como o projeto foi construído.
                                            </p>
                                        </div>
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href='/map'>

                            <Card
                                hoverable
                                style={{
                                    width: 360,
                                    height: '100%',
                                }}
                                cover={<img alt="map" src={image3} />}
                            >
                                <Meta
                                    title={<p style={{ fontSize: "24px", textAlign: "center" }}>Mapa de Trajetória</p>}
                                    description={
                                        <div>
                                            <p style={{ textAlign: "center" }}>
                                                Visualize em tempo real a trajetória dos caminhões, para maior eficiência logística.
                                            </p>
                                        </div>
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
        </Defaultframe>
    );
};

export default Home;
