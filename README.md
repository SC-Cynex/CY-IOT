# Projeto de IoT + IA: Monitoramento da Temperatura do Freio do Tambor do Caminhão

## 📄 Visão Geral do Projeto

O objetivo deste projeto é desenvolver um sistema de monitoramento de temperatura para o freio do tambor de caminhões. O sistema utilizará sensores para medir a temperatura dos freios e acionará lâmpadas de alerta com base nas leituras. Este sistema visa melhorar a segurança e a manutenção dos caminhões, evitando superaquecimento dos freios.

- **Observação:** O projeto vai ser desenvolvido em baixa escala utilizando placa protoboard.

## ⚙️ Componentes do Projeto 

### 1. 🕹️ **Hardware**
   - **Sensor de Temperatura:** 
     - Tipo: Sensor Max6675 
     - Função: Medir a temperatura do freio do tambor.
   - **Microcontrolador:**
     - Tipo: Arduino Uno
     - Função: Ler os dados do sensor e processar as informações.
   - **Lâmpadas de Alerta:**
     - Tipo: LEDs
     - Função: Indicar diferentes níveis de temperatura (Verde, Amarelo e Vermelho).
   - **Módulo de Comunicação:**
     - Tipo: Módulo Wi-Fi ESP8266
     - Função: Enviar dados para uma interface de monitoramento remoto.
   - **Fonte de Alimentação:**
     - Tipo: Bateria 9v 

### 2. 🤖 **Software**
   - **Firmware do Microcontrolador:**
     - Linguagem de Programação: C/C++ e Python
     - Funções Principais:
       - Leitura dos dados do sensor de temperatura.
       - Processamento e comparação das leituras com limites predefinidos.
       - Acionamento das lâmpadas de alerta conforme as condições de temperatura.
       - Utilizar IA para precisão dos dados.
   - **Interface de Monitoramento:**
     - Tipo: Aplicativo mobile
     - Linguagem: Flutter/Dart
     - Função: Controle e exibição das leituras de temperatura e o status das lâmpadas de alerta.
   - **Armazenamento em Nuvem:**
     - Tipo: Banco de Dados NoSQL (Firebase)
     - Função: Armazenar dados de temperatura para análises e processamento posterior.

## Especificações Técnicas

### 1. 📟 **Sensor de Temperatura**
   - Faixa de Medição: 0 a 800°C
   - Precisão: ±2°C
   - Conexão: SPI (Serial Peripheral Interface) interface digital

### 2. 🔑 **Microcontrolador**
   - Processador: ATmega328P
   - Memória: 32 KB

### 3. 💡 **Lâmpadas de Alerta**
   - Tipo de Lâmpada: LEDs
   - Cores e Significados:
     - **Verde:** Temperatura Normal 0 a 69°C
     - **Amarela:** Temperatura Moderadamente Alta 70 a 139°C
     - **Vermelha:** Temperatura Crítica 140 a 210°C

## Plano de Implementação

### 1. 📝 **Fase de Planejamento**
   - Definir requisitos e especificações detalhadas.
   - Selecionar e adquirir componentes de hardware e software.

### 2. 👨🏻‍💻 **Fase de Desenvolvimento**
   - Montar e testar o circuito eletrônico na protoboard.
   - Desenvolver o firmware do microcontrolador.
   - Implementar IA para precisão dos dados.
   - Implementar a interface de monitoramento.

### 3. ⚠️ **Fase de Testes**
   - Realizar testes de funcionalidade e precisão dos sensores.
   - Testar a resposta das lâmpadas de alerta a diferentes condições de temperatura.
   - Validar a integração do sistema completo.

## 🦾 Conclusão

Este projeto visa criar um sistema de monitoramento de temperatura eficaz e confiável para os freios dos caminhões. O sistema proporcionará uma maneira de detectar e reagir a condições de temperatura potencialmente perigosas, melhorando a segurança e a eficiência operacional dos caminhões.

<h2 align="center">Contribuidores</h2>
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/humberto-peres"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118866895?s=400&u=a12412e21705d58ab604be67c1e1431c80174b64&v=4" width="100px;" /><br /><sub><b>Humberto Peres da Rocha Filho</b></sub></a><br /><a href="https://github.com/humberto-peres" title="Humberto Peres da Rocha Filho"></a></td>
    <td align="center"><a href="https://github.com/Pellegr1n1"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/119978954?v=4" width="100px;"/><br /><sub><b>Leandro Pellegrini Fodi</b></sub></a><br /><a href="https://github.com/Pellegr1n1" title="Leandro Pellegrini Fodi"></a></td>
    <td align="center"><a href="https://github.com/v0cs"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104214178?v=4" width="100px;"/><br /><sub><b>Vítor Celestino</b></sub></a><br /><a href="https://github.com/v0cs" title="Vítor Celestino"></a></td>
    <td align="center"><a href="https://github.com/WesllyHn"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117309594?v=4" width="100px;"/><br /><sub><b>Weslly Hendler Neres</b></sub></a><br /><a href=https://github.com/WesllyHn" title="Weslly Hendler Neres"></a></td>
  </tr>
</table>
