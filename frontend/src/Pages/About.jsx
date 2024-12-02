import React from "react";
import Defaultframe from "../Components/Defaultframe";
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Layout } from 'antd';
const { Footer } = Layout;

const footerStyle = {
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#d9d9d9',
};

const avatar = (src, name, context) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Avatar shape="square" size={64} src={src} style={{ marginRight: '15px' }} />
            <div>
                <span style={{ fontWeight: 'bold' }}>{name}</span><br /> 
                <span style={{ fontStyle: 'italic', color: '#666' }}>{context}</span>
            </div>
        </div>
    );
}

const About = () => {
    return (
      <Defaultframe>
        <div style={{ backgroundColor: "#d9d9d9" }}>
          <h2 style={{ marginLeft: "20px" }}>Sobre</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "calc(100vh - 127px)",
          }}
        >
          <div style={{ padding: "20px" }}>
            <p>
              Este projeto tem como objetivo fornecer uma plataforma de
              monitoramento em tempo real para controle de dados sensoriais,
              como temperatura, velocidade e altitude. A aplicação coleta dados
              periodicamente e os apresenta de forma interativa por meio de
              gráficos, tabelas e resumos estatísticos.
            </p>
            <p>
              O projeto foi desenvolvido utilizando as seguintes tecnologias:
              <ul>
                <li>React - Para a construção da interface de usuário.</li>
                <li>
                  Ant Design - Para componentes de UI elegantes e funcionais.
                </li>
                <li>
                  ESP8266 e sensores - Para monitoramento de dados em tempo
                  real.
                </li>
              </ul>
            </p>
            <p>
              Desenvolvido por:
              <ul>
                <div>
                  {avatar(
                    "https://avatars.githubusercontent.com/u/118866895?s=400&v=4",
                    "Humberto Peres",
                    "Desenvolvedor Frontend, responsável pela criação do protótipo, desenvolvimento do site e da IA."
                  )}
                </div>
                <div>
                  {avatar(
                    "https://avatars.githubusercontent.com/u/117309594?v=4",
                    "Weslly Neres",
                    "Desenvolvedor Frontend, responsável pela criação do protótipo, desenvolvimento do site e da IA."
                  )}
                </div>
                <div>
                  {avatar(
                    "https://avatars.githubusercontent.com/u/119978954?v=4",
                    "Leandro Pellegrini",
                    "Colaborou na revisão e apoio em testes de funcionalidade do projeto."
                  )}
                </div>
                <div>
                  {avatar(
                    "https://avatars.githubusercontent.com/u/104214178?v=4",
                    "Vítor Celestino",
                    "Contribuiu com a documentação e apoio em  testes de funcionalidade do projeto."
                  )}
                </div>
              </ul>
            </p>
          </div>
          <Footer style={footerStyle}>
            <a
              href="https://github.com/SC-Cynex/CY-IOT.git"
              style={{ color: "black" }}
            >
              <GithubOutlined /> CY-IOT
            </a>
          </Footer>
        </div>
      </Defaultframe>
    );
};

export default About;
