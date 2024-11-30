import React from "react";
import { ConfigProvider, Layout } from "antd";
import Header from "./Header";

export default function Defaultframe({ children }) {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        headerBg: 'linear-gradient(to right, #035096, #65a8c5)',
                    },
                    Menu: {
                        darkItemBg: 'transparent',
                        darkItemSelectedBg: 'rgba(239, 239, 239, 0.2)',
                    },
                },
            }}
        >
            <Layout>
                <Layout>
                    <Header />
                    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
                        {children}
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
}
