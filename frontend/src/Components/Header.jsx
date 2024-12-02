import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getItem } from "../Helpers/defaultframeHelpers";
import {
    DashboardOutlined,
    AimOutlined,
    AppstoreOutlined,
    InfoCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
import logo from "../Assets/logo.png";
const { Header } = Layout;

const items = [
    getItem("Dashboard", "/dashboard", <DashboardOutlined />),
    getItem("Mapa", "/map", <AimOutlined />),
    getItem("Componentes do Projeto", "/components", <AppstoreOutlined />),
    getItem("Configurações", "/settings", <SettingOutlined />),
    getItem("Sobre", "/about", <InfoCircleOutlined />),
];

export default function HeaderPage() {
    const navigate = useNavigate();

    const handleMenuClick = (key) => {
        navigate(key);
    };

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "15px" }} />
            </a>
            <Menu
                onClick={({ key }) => handleMenuClick(key)}
                defaultSelectedKeys={[window.location.pathname]}
                mode="horizontal"
                items={items.map(item => ({
                    ...item,
                    onTitleClick: () => handleMenuClick(item.key),
                }))}
                theme={"dark"}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    );
}
