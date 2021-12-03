import {
  BarsOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
  ExportOutlined,
  FlagOutlined,
  HomeOutlined,
  LeftOutlined,
  PlusOutlined,
  ReconciliationOutlined,
  RightOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../../helper";
import uni from "../images/logo-uni.png";

const { Sider } = Layout;

const sider = {
  background: "#fff",
};

function LeftMenuBar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  const onClick = (e) => {
    navigate(e.key);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const closeSession = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Sider style={sider} collapsed={collapsed}>
      <Card
        cover={<img src={uni} alt="logo" />}
        bordered={false}
        style={{ padding: "10px" }}
      />
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="/" icon={<HomeOutlined />} onClick={onClick}>
          Inicio
        </Menu.Item>
        <Menu.Item key="/inquiry" icon={<PlusOutlined />} onClick={onClick}>
          Nueva Consulta
        </Menu.Item>
        <Menu.Item
          key="/my-inquiry-list"
          icon={<BarsOutlined />}
          onClick={onClick}
        >
          Mis Consultas
        </Menu.Item>
        <Menu.Item
          key="/inquiry-list"
          icon={<DatabaseOutlined />}
          onClick={onClick}
        >
          Todas las Consultas
        </Menu.Item>
        {(userData().role === 1 || userData().role === 2) && (
          <>
            <Menu.Item
              key="/inquiry-pending-list"
              icon={<ClockCircleOutlined />}
              onClick={onClick}
            >
              Consultas en Espera
            </Menu.Item>
            <Menu.Item
              key="/user-list"
              icon={<TeamOutlined />}
              onClick={onClick}
            >
              Usuarios
            </Menu.Item>
            <Menu.Item
              key="/role-list"
              icon={<FlagOutlined />}
              onClick={onClick}
            >
              Roles
            </Menu.Item>
            <Menu.Item
              key="/permission-list"
              icon={<ThunderboltOutlined />}
              onClick={onClick}
            >
              Permisos
            </Menu.Item>
          </>
        )}
        <Menu.Item key="/inquiry-types" icon={<ReconciliationOutlined />} onClick={onClick}>
          Tipos de consultas
        </Menu.Item>
        <Menu.Item key="/profile" icon={<UserOutlined />} onClick={onClick}>
          Mi perfil
        </Menu.Item>
        <Menu.Item
          key="/login"
          icon={<ExportOutlined />}
          onClick={closeSession}
        >
          Cerrar Sesión
        </Menu.Item>
        <Menu.Item
          key="0"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={onCollapse}
        >
          {collapsed ? "Expandir" : "Contraer"}
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LeftMenuBar;
