import React from 'react';
import Defaultframe from '../Components/Defaultframe';
import { Card, Tabs } from 'antd';
import ComponentCard from '../Components/Card';
import Max6675 from "../Assets/sensor-Max6675.jpg";
import NEO6M from "../Assets/NEO-6M.jpg";
import ESP8266 from "../Assets/Modulo-ESP8266.jpg";
import powerbank from "../Assets/powerbank.jpg";
import C from "../Assets/C.png";
import firebase from "../Assets/firebase.png";
import architecture from "../Assets/architecture.png";

const items = [
    {
        key: '1',
        label: 'Sensores',
        children: (
            <div>
                <ComponentCard
                    title="🕹️ Sensor de Temperatura"
                    details={[
                        { label: 'Tipo', value: 'Sensor Max6675' },
                        { label: 'Função', value: 'Medir a temperatura do freio do tambor.' },
                        { label: 'Faixa de Medição', value: '0 a 800°C' },
                        { label: 'Preço', value: 'R$ 40,00' },
                    ]}
                    imgSrc={Max6675}
                    imgAlt="Max6675"
                />
                <ComponentCard
                    title="📟 Sensor de Localização GPS"
                    details={[
                        { label: 'Tipo', value: 'NEO-6M' },
                        { label: 'Função', value: 'Fornece coordenadas geográficas, velocidade e altura.' },
                        { label: 'Preço', value: 'R$ 45,00' },
                    ]}
                    imgSrc={NEO6M}
                    imgAlt="NEO-6M"
                />
            </div>
        ),
    },
    {
        key: '2',
        label: 'Módulo de Comunicação',
        children: (
            <ComponentCard
                title="📡 Módulo ESP8266"
                details={[
                    { label: 'Função', value: 'Leitura dos sensores e comunicação Wi-Fi para integração com outras plataformas.' },
                    { label: 'Taxa de Transmissão', value: '110 a 460 Mbps' },
                    { label: 'Faixa de Frequência', value: '2.4GHz' },
                    { label: 'Preço', value: 'R$ 62,00' },
                ]}
                imgSrc={ESP8266}
                imgAlt="Modulo-ESP8266"
            />
        ),
    },
    {
        key: '3',
        label: 'Fonte de Alimentação',
        children: (
            <ComponentCard
                title="🔋 Fonte de Alimentação 5V"
                details={[
                    { label: 'Voltagem', value: '9V' },
                    { label: 'Capacidade', value: '60 mAh' },
                    { label: 'Preço', value: 'R$ 15,00' },
                ]}
                imgSrc={powerbank}
                imgAlt="Powerbank"
            />
        ),
    },
    {
        key: '4',
        label: 'Firmware do Microcontrolador',
        children: (
            <ComponentCard
                title="🤖 Firmware"
                details={[
                    { label: 'Linguagem de Programação', value: 'C/C++' },
                    {
                        label: 'Funções Principais', value: <div>
                            <ul>
                                <li>Leitura dos dados do sensor de temperatura.</li>
                                <li>Processamento e comparação das leituras com limites predefinidos.</li>
                                <li>Acionamento das lâmpadas de alerta conforme as condições de temperatura.</li>
                            </ul>
                        </div>
                    },
                ]}
                imgSrc={C}
                imgAlt="C/C++"
                imgWidth={300}
            />
        ),
    },
    {
        key: '5',
        label: 'Armazenamento em Nuvem',
        children: (
            <ComponentCard
                title="☁️ Armazenamento em Nuvem"
                details={[
                    { label: 'Tipo', value: 'Banco de Dados NoSQL (Firebase)' },
                    { label: 'Função', value: 'Armazenar dados de temperatura para análises e processamento posterior.' },
                ]}
                imgSrc={firebase}
                imgAlt="Firebase"
                imgWidth={200}
            />
        ),
    },
    {
        key: '6',
        label: 'Inteligência Artificial',
        children: (
            <ComponentCard
                title="🧠 Inteligência Artificial"
                details={[
                    { label: 'Status', value: 'Em fase de definição.' },
                    { label: 'Função Esperada', value: 'Otimizar a análise dos dados capturados para identificar padrões de superaquecimento e sugerir ações preventivas.' },
                ]}
            />
        ),
    },
    {
        key: '7',
        label: 'Arquitetura',
        children: (
            <Card style={{ margin: '20px 96px 0px 72px' }}>
                <div>
                        <h2>🏗️ Arquitetura</h2>
                        <p>
                            <b style={{ fontStyle: 'italic' }}>Funcionamento: </b>
                            Esta arquitetura de sistema IoT é projetada para monitoramento e prevenção de superaquecimento. 
                            O sensor de temperatura coleta os dados, que são enviados via ESP8266 para a nuvem (Firebase). 
                            A inteligência artificial processa esses dados para identificar padrões e sugerir ações preventivas. 
                            O Tago.io é usado para visualização e monitoramento em tempo real.<br />
                        </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={architecture}
                            alt={"Architecture"}
                            style={{ width: '100%', }}
                        />
                    </div>
                </div>
            </Card>
        ),
    },
];

const Components = () => {
    return (
        <Defaultframe>
            <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: '#d9d9d9' }}>
                    <h2 style={{ marginLeft: '20px' }}>Componentes do Projeto</h2>
                </div>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    tabPosition="left"
                    style={{
                        height: 'calc(100vh - 64px)',
                        overflow: 'auto',
                        borderRight: '1px solid #f0f0f0',
                    }}
                />
            </div>
        </Defaultframe>
    );
};

export default Components;
