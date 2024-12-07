import React from "react";
import { Checkbox, Divider } from "antd";
import { useDashboardConfig } from "../Helpers/DashboardConfigContext";
import Defaultframe from "../Components/Defaultframe";

const Settings = () => {
    const { config, setConfig } = useDashboardConfig();

    const handleViewChange = (views) => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            views,
        }));
    };

    const handleChartToggle = (key, checked) => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            charts: {
                ...prevConfig.charts,
                [key]: checked,
            },
        }));
    };

    const handleTableColumnsChange = (columns) => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            table: {
                ...prevConfig.table,
                columns,
            },
        }));
    };

    const handleStatsMetricsChange = (metrics) => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            stats: {
                ...prevConfig.stats,
                metrics,
            },
        }));
    };

    return (
        <Defaultframe>
            <div style={{ backgroundColor: '#d9d9d9' }}>
                <h2 style={{ marginLeft: '20px' }}>Configurações</h2>
            </div>
            <div style={{ padding: "20px" }}>

                <div>
                    <h3>Visões Ativadas</h3>
                    <Checkbox.Group
                        options={[
                            { label: "Gráficos", value: "charts" },
                            { label: "Tabela", value: "table" },
                            { label: "Estatísticas", value: "stats" },
                        ]}
                        defaultValue={config.views}
                        onChange={handleViewChange}
                    />
                </div>

                <Divider />

                <div>
                    <h3>Gráficos Ativados</h3>
                    {Object.keys(config.charts).map((key) => (
                        <Checkbox
                            key={key}
                            checked={config.charts[key]}
                            onChange={(e) => handleChartToggle(key, e.target.checked)}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Checkbox>
                    ))}
                </div>

                <Divider />

                <div>
                    <h3>Colunas da Tabela</h3>
                    <Checkbox.Group
                        options={[
                            { label: "Hora", value: "time" },
                            { label: "Velocidade", value: "speed" },
                            { label: "Altitude", value: "altitude" },
                            { label: "Temperatura", value: "temperature" },
                            { label: "HDOP", value: "hdop" },
                        ]}
                        defaultValue={config.table.columns}
                        onChange={handleTableColumnsChange}
                    />
                </div>

                <Divider />

                <div>
                    <h3>Métricas de Estatísticas</h3>
                    <Checkbox.Group
                        options={[
                            { label: "Média", value: "avg" },
                            { label: "Máximo", value: "max" },
                            { label: "Mínimo", value: "min" },
                        ]}
                        defaultValue={config.stats.metrics}
                        onChange={handleStatsMetricsChange}
                    />
                </div>
            </div>
        </Defaultframe>
    );
};

export default Settings;
