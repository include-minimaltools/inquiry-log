import { BarsOutlined, ExportOutlined, HomeOutlined, LeftOutlined, PlusOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uni from '../images/logo-uni.png'

const { Sider } = Layout;

const sider = {
  background: '#fff',
}

function LeftMenuBar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  const onClick = (e) => {
    navigate(e.key);
  }

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const closeSession = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }  

  return (
    <Sider style={sider} collapsed={collapsed}>
      <Card cover={<img src={uni} alt="logo"/>} bordered={false} style={{padding: '10px'}}/>
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="/" icon={<HomeOutlined />} onClick={onClick}>
          Inicio
        </Menu.Item>
        <Menu.Item key="/inquiry/new" icon={<PlusOutlined />} onClick={onClick}>
          Nueva Consulta
        </Menu.Item>
        <Menu.Item key="/inquiry-list" icon={<BarsOutlined />} onClick={onClick}>
          Mis Consultas
        </Menu.Item>
        <Menu.Item key="/profile" icon={<UserOutlined />} onClick={onClick}>
          Mi perfil
        </Menu.Item>
        <Menu.Item key="/login" icon={<ExportOutlined />} onClick={closeSession}>
          Cerrar Sesión
        </Menu.Item>
        <Menu.Item key="0" icon={collapsed ? <RightOutlined /> : <LeftOutlined/>} onClick={onCollapse}>
          {collapsed ? 'Expandir' : 'Contraer'}
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LeftMenuBar;
