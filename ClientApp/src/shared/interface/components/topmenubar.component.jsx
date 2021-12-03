import React, { useEffect, useState } from "react";
import { Avatar, Col, Layout, Row, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { userData } from "../../../helper";

const { Title } = Typography;
const { Header } = Layout;

function TopMenuBar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userData());
  },[]);

  return (
    <Header style={{ padding: 0, background: "#003782" }}>
      <Row justify="space-between" style={{ height: "100%" }}>
        <Col flex="auto">
          <Row justify="center">
            <Title level={1} style={{ color: "white", margin: "8px" }}>
              Sistema de Gestión de Consultas
            </Title>
          </Row>
        </Col>
        <Col style={{marginRight:'25px'}}>
          <Row align='middle'>
            <Link to='/profile'><Avatar icon={<UserOutlined/>} style={{background:'#1890ff'}}/></Link>
            <Title level={5} style={{ color: "white", margin: "8px" }}>{user?.name} {user?.lastname}</Title>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}

export default TopMenuBar;
