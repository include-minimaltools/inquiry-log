import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
} from "antd";
import React from "react";

const { Title } = Typography;

function InquiryForm() {
  const createInquiry = (values) => {
    console.log(values);
  };

  return (
    <>
      <Row
        justify="space-between"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Col>
          <Title level={4}>Docente: Adilson Isaac Lopez</Title>
        </Col>
        <Col>
          <Title level={4}>Semestre: II</Title>
        </Col>
        <Col>
          <Title level={4}>Grupo: 2M1 - CO</Title>
        </Col>
        <Col>
          <Title level={4}>
            Materia: Algoritmización y estructuras de datos
          </Title>
        </Col>
        <Col>
          <Title level={4}>Año Lectivo: 2021</Title>
        </Col>
      </Row>
      <Divider orientation="left">Detalles de los estudiantes</Divider>
      <Row gutter={[50, 0]}>
        <Col>
          <Form.Item label="Cantidad de estudiantes">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Carnet de un estudiante">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">Detalles de la Materia</Divider>
      <Row gutter={[50, 0]}>
        <Col>
          <Form.Item label="Numero de la semana">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Tipo de Consulta">
            <Select />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[50, 0]}>
        <Col>
          <Form.Item label="Tema de la consulta">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item label="Observaciones">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[50, 0]}>
        <Col>
          <Button type="secondary" onClick={createInquiry}>
            Cancelar
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={createInquiry}>
            Registrar consulta
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default InquiryForm;
