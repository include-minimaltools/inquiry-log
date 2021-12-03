import { PlusOutlined } from "@ant-design/icons";
import { Button, Row, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
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
    <Modal visible={inquiryModal} onCancel={() => setInquiryModal(false)}><InquiryForm/></Modal>
      <Row style={{marginBottom:'10px'}}>
        <Button onClick={() => setInquiryModal(true)}><PlusOutlined/> Registrar nueva consulta</Button>
      </Row>
      <Table columns={columns} pagination={true} />
    </>
  );
}

export default InquiryList;
