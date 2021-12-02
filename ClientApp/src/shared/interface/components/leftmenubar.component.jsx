import { BarsOutlined, ExportOutlined, HomeOutlined, LeftOutlined, PlusOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Layout, Menu } from "antd";
import React, { useState } from "react";
import uni from '../images/logo-uni.png'

const { Sider } = Layout;

const sider = {
  background: '#fff',
}

function LeftMenuBar() {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider style={sider} collapsed={collapsed}>
      <Card cover={<img src={uni} alt="logo"/>} bordered={false} style={{padding: '10px'}}/>
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusOutlined />}>
          Nueva Consulta
        </Menu.Item>
        <Menu.Item key="3" icon={<BarsOutlined />}>
          Mis Consultas
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Mi perfil
        </Menu.Item>
        <Menu.Item key="5" icon={<ExportOutlined />}>
          Cerrar Sesión
        </Menu.Item>
        <Menu.Item key="6" icon={collapsed ? <RightOutlined /> : <LeftOutlined/>} onClick={onCollapse}>
          {collapsed ? 'Expandir' : 'Contraer'}
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LeftMenuBar;
