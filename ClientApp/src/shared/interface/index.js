import React from "react";
import { Layout, Result } from "antd";
import LeftMenuBar from "./components/leftmenubar.component";
import TopMenuBar from "./components/topmenubar.component";
import "./css/style.css";

const { Content, Footer } = Layout;

export function Interface({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LeftMenuBar />
      <Layout className="site-layout">
        <TopMenuBar />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            { children || <Result status="404" title="404" subTitle="Page Not Found" /> }
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
