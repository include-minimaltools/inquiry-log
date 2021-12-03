import { PlusOutlined } from "@ant-design/icons";
import { Button, Row, Table } from "antd";
import { Modal } from "antd";
import React, { useState } from "react";
import InquiryForm from "../form";

const columns = [
  {
    title: "Semana #",
  },
  {
    title: "Numero de Estudiantes",
  },
  {
    title: "Tipo de consulta",
  },
  {
    title: "Tema de consulta",
  },
  {
    title: "Fecha",
  },
  {
    title: "Hora",
  },
  {
    title: "Carnet",
  },
  {
    title: "Observaciones",
  },
  {
    title: "Estado",
  },
  {
    title: "Profesor",
  },
  {
    title: "Clase",
  },
  {
    title: "Acciones",
  },
];

function InquiryList() {
  const [inquiryModal, setInquiryModal] = useState(false);

  return (
    <>
      <Modal
        visible={inquiryModal}
        onCancel={() => setInquiryModal(false)}
        footer={null}
      >
        <InquiryForm />
      </Modal>
      <Row style={{ marginBottom: "10px" }}>
        <Button onClick={() => setInquiryModal(true)}>
          <PlusOutlined /> Registrar nueva consulta
        </Button>
      </Row>
      <Table columns={columns} pagination={true} scroll={{ x: '1200px'}}/>
    </>
  );
}

export default InquiryList;
