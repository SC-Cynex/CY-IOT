import React, { useState, useEffect } from "react";
import Defaultframe from "../Components/Defaultframe";
import GaugeChart from "../Components/GaugeChart";
import { Card, Col, Row } from "antd";
import DataChart from "../Components/DataChart";
import { getDashboardData } from "../Helpers/dashboardData";

const Dashboard = () => {
    const [speed, setSpeed] = useState(0);
    const [altitude, setAltitude] = useState(0);
    const [hdop, setHdop] = useState(0);
    const [satellites, setSatellites] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dashboardData = await getDashboardData();

                const latestData = dashboardData[0];
                if (latestData) {
                    setSpeed(latestData.speed || 0);
                    setAltitude(latestData.alt || 0);
                    setHdop(latestData.hdop || 0);
                    setSatellites(latestData.sat || 0);
                    setTemperature(latestData.temp || 0);
                }
            } catch (error) {
                console.error("Erro ao buscar os dados do backend:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const newEntry = {
                time: new Date().toLocaleTimeString(),
                speed: speed,
                altitude: altitude,
                hdop: hdop,
                satellites: satellites,
                temperature: temperature,
            };

            setData((prevData) => {
                const lastEntry = prevData[prevData.length - 1];
                if (
                    !lastEntry ||
                    lastEntry.speed !== speed ||
                    lastEntry.altitude !== altitude ||
                    lastEntry.hdop !== hdop ||
                    lastEntry.satellites !== satellites ||
                    lastEntry.temperature !== temperature
                ) {
                    return [...prevData, newEntry];
                }
                return prevData;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [speed, altitude, hdop, satellites, temperature]);

    const headerStyle = (color) => ({
        backgroundColor: color,
        color: "#fff",
        padding: "10px",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "4px 4px 0 0",
    });

    return (
        <Defaultframe>
            <div style={{ margin: "20px 100px" }}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card style={{ height: "100%" }}>
                            <div style={headerStyle("#0077b6")}>Temperatura Atual</div>
                            <GaugeChart value={temperature} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <div style={headerStyle("#8884d8")}>Velocidade Atual</div>
                            <DataChart data={data} dataKey="speed" title="Velocidade (km/h)" color="#8884d8" />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                    <Col span={12}>
                        <Card>
                            <div style={headerStyle("#bc4749")}>Altitude Atual</div>
                            <DataChart data={data} dataKey="altitude" color="#bc4749" />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <div style={headerStyle("#387908")}>Satélites</div>
                            <DataChart data={data} dataKey="satellites" color="#387908" />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
                    <Col span={12}>
                        <Card>
                            <div style={headerStyle("#fb5607")}>HDOP</div>
                            <DataChart data={data} dataKey="hdop" color="#fb5607" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </Defaultframe>
    );
};

export default Dashboard;
