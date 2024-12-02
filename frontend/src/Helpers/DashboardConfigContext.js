import React, { createContext, useState, useContext, useEffect } from "react";

const DashboardConfigContext = createContext();

export const DashboardConfigProvider = ({ children }) => {
    const defaultConfig = {
        views: ["charts", "table", "stats"],
        charts: {
            showSpeed: true,
            showAltitude: true,
            showSatellites: true,
            showTemperature: true,
        },
        table: {
            columns: ["time", "speed", "altitude", "satellites", "temperature", "hdop"],
        },
        stats: {
            metrics: ["avg", "max", "min"],
        },
    };

    // Carrega a configuração inicial do localStorage ou usa o padrão
    const [config, setConfig] = useState(() => {
        const savedConfig = localStorage.getItem("dashboardConfig");
        return savedConfig ? JSON.parse(savedConfig) : defaultConfig;
    });

    // Salva o estado atual no localStorage sempre que ele mudar
    useEffect(() => {
        localStorage.setItem("dashboardConfig", JSON.stringify(config));
    }, [config]);

    return (
        <DashboardConfigContext.Provider value={{ config, setConfig }}>
            {children}
        </DashboardConfigContext.Provider>
    );
};

export const useDashboardConfig = () => useContext(DashboardConfigContext);
