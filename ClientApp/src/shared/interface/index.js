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
        <Content style={{ margin: "16px 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, height:'100%', backgroundColor:'white', borderRadius: '10px', boxShadow: '0px 0px 2px #888888'}}
          >
            { children || <Result status="404" title="404" subTitle="Page Not Found" /> }
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          INSY ©2021 Created by Minimal Tools
        </Footer>
      </Layout>
    </Layout>
  );
}
