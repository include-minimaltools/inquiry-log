import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Row, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";

const { Title } = Typography;
const { Meta } = Card;

function Profile() {
  return (
    <>
      <Row justify="center">
        <Title level={2}>Perfil de Usuario</Title>
      </Row>
      <Row justify="center">
        <Col>
          <Card
            cover={<Avatar style={{ marginRight:'40px'}} size={200} icon={<UserOutlined />} />}
            bordered={true}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              padding: "50px",
            }}
          >
            <Meta title="Nombre" description="Adilson" />
            <Divider />
            <Meta title="Apellido" description="Lopez" />
            <Divider />
            <Meta
              title="Clase"
              description="Algoritmización y Estructuras de Datos"
            />
            <Divider />
            <Meta title="Edad" description="30" />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
