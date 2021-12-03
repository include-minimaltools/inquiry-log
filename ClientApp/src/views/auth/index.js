import { Button, Carousel, Divider, Form, Image, Input, Modal, Row, Typography } from "antd";
import React, { useEffect } from "react";
import "./css/style.css";
import cover1 from "./images/cover1.webp";
import cover2 from "./images/cover2.webp";
import cover3 from "./images/cover3.webp";
import cover4 from "./images/cover4.webp";
import cover5 from "./images/cover5.jpg";
import uni from "../../shared/interface/images/logo-uni.png";
import { useNavigate } from "react-router-dom";
import { InquiryService } from "../../service";

const covers = [cover1, cover2, cover3, cover4, cover5];

const contentStyle = {
  height: "100%",
  background: "#black",
  backgroundImage: `url(${covers[4]})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("user") != null) {
      navigate("/");
    }
  },[navigate]);

  const loginSession = async (values) => {
    const user = await InquiryService.login(values)

    if (user.data) {
      localStorage.setItem("user", JSON.stringify(user.data));
      navigate('/');
    }
    else{
      Modal.error({
        title: 'Inicio de Sesion Fallido',
        content: 'Por favor, verifique su usuario y contraseña.',
      })
    }
  };

  return (
    <>
      <Modal visible={true} closable={false} width={700} footer={null}>
        <Row justify='center'>
          <Image src={uni} width={300} />
          <Divider />
          <Typography.Title level={1}>
            Sistema de Gestión de Consultas
          </Typography.Title>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={loginSession}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Row justify='end'>
              <Button type="primary" htmlType="submit" style={{ background:'#003782', borderColor:'#003782' }}>Iniciar Sesión</Button>
            </Row>
          </Form>
        </Row>
      </Modal>
      <Carousel
        autoplay
        adaptiveHeight={true}
        autoplaySpeed={5000}
        speed={3000}
        dots={false}
        effect="fade"
        style={{ height: "100%", backgroundColor: "black" }}
      >
        {covers.map((cover, index) => (
          <div style={{ height: "100%" }}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${covers[index]}`,
              }}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Login;
