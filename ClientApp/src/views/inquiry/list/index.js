import { PlusOutlined } from "@ant-design/icons";
import { Button, Row, Table } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
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
  return (
    <>
    <Modal visible={false}><InquiryForm/></Modal>
      <Row style={{marginBottom:'10px'}}>
        <Button><PlusOutlined/> Registrar nueva consulta</Button>
      </Row>
      <Table columns={columns} pagination={true} />
    </>
  );
}

export default InquiryList;
