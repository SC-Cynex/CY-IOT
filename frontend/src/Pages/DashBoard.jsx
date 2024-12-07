import React, { useState, useEffect } from "react";
import Defaultframe from "../Components/Defaultframe";
import GaugeChart from "../Components/GaugeChart";
import { Card, Col, Row, Table, Empty } from "antd";
import { FloatButton } from "antd";
import { TableOutlined, LineChartOutlined, BarChartOutlined } from "@ant-design/icons";
import DataChart from "../Components/DataChart";
import { getDashboardData } from "../Helpers/dashboardData";
import { useDashboardConfig } from "../Helpers/DashboardConfigContext";

const Dashboard = () => {
    const { config } = useDashboardConfig();
    const [temperature, setTemperature] = useState(0);
    const [data, setData] = useState([]);
    const [view, setView] = useState(() => config.views[0] || "");
    const { views, charts, table, stats } = config;

    const metrics = stats.metrics;
    const isAnyChartVisible = Object.values(charts).some((value) => value);
    const isAnyMetricSelected = ["min", "max", "avg"].some((metric) => metrics.includes(metric));
    const hasTableColumns = config.table.columns.length > 0;
    const anyView = (!isAnyChartVisible || !views.includes("charts")) && (!isAnyMetricSelected || !views.includes("stats")) && (!hasTableColumns || !views.includes("table"));

    useEffect(() => {
        if (!views.includes(view)) {
            setView(views[0] || "");
        }
    }, [views, view]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dashboardData = await getDashboardData();

                if (dashboardData && dashboardData.length > 0) {
                    const latestData = dashboardData[0];

                    setTemperature(latestData.temperature || 0);
                    setData(
                        dashboardData.map((entry) => ({
                            time: entry.time || new Date().toLocaleTimeString(),
                            speed: entry.speed || 0,
                            altitude: entry.altitude || 0,
                            hdop: entry.accuracy || 0,
                            temperature: entry.temperature || 0,
                            colorCode: entry.colorCode || "",
                        }))
                    );
                }
            } catch (error) {
                console.error("Erro ao buscar os dados do backend:", error);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const headerStyle = (color) => ({
        backgroundColor: color,
        color: "#fff",
        padding: "10px",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "4px 4px 0 0",
    });

    const renderContent = () => {
        if (!views.includes(view) || anyView) {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "calc(100vh - 64px)",
                        textAlign: "center",
                    }}
                >
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        description={anyView ? "Nenhuma visão disponível, acesse as configurações para habilitar" : "Escolha uma visão para começar a ver o dashboard"}
                    />
                </div>
            );
        }

        if (view === "charts" && views.includes("charts")) {
            return (
                <Row gutter={[16, 16]}>
                    {charts.showTemperature && (
                        <Col span={12}>
                            <Card style={{ height: "410px" }}>
                                <div style={headerStyle("#0077b6")}>Temperatura Atual</div>
                                <GaugeChart value={temperature} color={data[0]?.colorCode} />
                            </Card>
                        </Col>
                    )}
                    {charts.showSpeed && (
                        <Col span={12}>
                            <Card>
                                <div style={headerStyle("#8884d8")}>Velocidade Atual</div>
                                <DataChart data={data} dataKey="speed" title="Velocidade (km/h)" color="#8884d8" />
                            </Card>
                        </Col>
                    )}
                    {charts.showAltitude && (
                        <Col span={12}>
                            <Card>
                                <div style={headerStyle("#bc4749")}>Altitude Atual</div>
                                <DataChart data={data} dataKey="altitude" color="#bc4749" />
                            </Card>
                        </Col>
                    )}
                </Row>
            );
        }

        if (view === "table" && views.includes("table")) {
            const columns = table.columns
                .filter((col) => col !== "hdop" && col !== "satellites")
                .map((col) => ({
                    title: col.charAt(0).toUpperCase() + col.slice(1),
                    dataIndex: col,
                    key: col,
                }));
            return (
                <Card>
                    <div style={headerStyle("#0077b6")}>Dados em Tabela</div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        rowKey={(_, index) => index}
                        pagination={{ pageSize: 10 }}
                    />
                </Card>
            );
        }

        if (view === "stats" && views.includes("stats")) {
            const statsData = {
                avgSpeed: data.reduce((sum, d) => sum + d.speed, 0) / data.length || 0,
                maxAltitude: Math.max(...data.map((d) => d.altitude), 0),
                maxTemperature: Math.max(...data.map((d) => d.temperature), 0),
            };

            return (
                <Row gutter={[16, 16]}>
                    {metrics.includes("avg") && (
                        <Col span={8}>
                            <Card>
                                <div style={headerStyle("#8884d8")}>Velocidade Média</div>
                                <h3 style={{ textAlign: "center" }}>{statsData.avgSpeed.toFixed(2)} km/h</h3>
                            </Card>
                        </Col>
                    )}
                    {metrics.includes("max") && (
                        <Col span={8}>
                            <Card>
                                <div style={headerStyle("#bc4749")}>Altitude Máxima</div>
                                <h3 style={{ textAlign: "center" }}>{statsData.maxAltitude} m</h3>
                            </Card>
                        </Col>
                    )}
                    {metrics.includes("min") && (
                        <Col span={8}>
                            <Card>
                                <div style={headerStyle("#387908")}>Temperatura Máxima</div>
                                <h3 style={{ textAlign: "center" }}>{statsData.maxTemperature} °C</h3>
                            </Card>
                        </Col>
                    )}
                </Row>
            );
        }
    };

    return (
        <Defaultframe>
            <div style={{ backgroundColor: "#d9d9d9" }}>
                <h2 style={{ marginLeft: "20px" }}>
                    Dashboard {anyView ? "" : (view === "charts" ? "Gráficos" : view === "table" ? "Tabela" : "Estatísticas")}
                </h2>
            </div>
            <div style={{ margin: "20px 100px" }}>{renderContent()}</div>
            {config.views.length > 0 && (
                <FloatButton.Group shape="circle" style={{ right: 24, bottom: 24 }}>
                    {config.views.includes("charts") && isAnyChartVisible && (
                        <FloatButton
                            icon={<LineChartOutlined />}
                            tooltip="Visão de Gráficos"
                            onClick={() => setView("charts")}
                        />
                    )}
                    {config.views.includes("table") && hasTableColumns && (
                        <FloatButton
                            icon={<TableOutlined />}
                            tooltip="Visão de Tabela"
                            onClick={() => setView("table")}
                        />
                    )}
                    {config.views.includes("stats") && isAnyMetricSelected && (
                        <FloatButton
                            icon={<BarChartOutlined />}
                            tooltip="Resumo Estatístico"
                            onClick={() => setView("stats")}
                        />
                    )}
                </FloatButton.Group>
            )}
        </Defaultframe>
    );
};

export default Dashboard;
