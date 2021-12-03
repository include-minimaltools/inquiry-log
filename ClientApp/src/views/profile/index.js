import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Row, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import { userData as user } from "../../helper";

const { Title } = Typography;
const { Meta } = Card;

function Profile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(user());
    console.log(user());
  }, []);

  return (
    <>
      <Row justify="center">
        <Title level={2}>Perfil de Usuario</Title>
      </Row>
      <Row justify="center">
        <Col>
          <Card
            cover={
              <Avatar
                style={{ marginRight: "40px", backgroundColor: "#1890ff" }}
                size={200}
                icon={<UserOutlined />}
              />
            }
            bordered={true}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              padding: "50px",
            }}
          >
            <Meta title="Nombre" description={userData?.name} />
            <Divider />
            <Meta title="Apellido" description={userData?.lastname} />
            <Divider />
            <Meta title="Correo" description={userData?.email} />
            <Divider />
            <Meta title="Dirección" description={userData?.address} />
            <Divider />
            <Meta title="Teléfono" description={userData?.phone} />
            <Divider />
            <Meta title="Rol" description={userData?.role_name} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
