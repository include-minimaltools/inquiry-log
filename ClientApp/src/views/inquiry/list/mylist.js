import {
  CheckOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Divider, Radio, Row, Table } from "antd";
import { Modal } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { userData } from "../../../helper";
import { InquiryService } from "../../../service/Inquiry.service";
import InquiryForm from "../form";

const columns = [
  {
    title: "# Semana",
    dataIndex: "week",
  },
  {
    title: "# Estudiantes",
    dataIndex: "students_number",
  },
  {
    title: "Tipo de consulta",
    dataIndex: "type",
  },
  {
    title: "Tema de consulta",
    dataIndex: "subject",
  },
  {
    title: "Fecha",
    dataIndex: "created_on",
  },
  {
    title: "Carnet",
    dataIndex: "carnet",
  },
  {
    title: "Grupo",
    dataIndex: "group",
  },
  {
    title: "Clase",
    dataIndex: "course",
  },
  {
    title: "Estado",
    dataIndex: "status",
  },
  {
    title: "Acciones",
    dataIndex: "actions",
    width: 200,
  },
];

export function MyInquiryList() {
  const [inquiryModal, setInquiryModal] = useState(false);
  const [inquiryList, setInquiryList] = useState([]);
  const [action, setAction] = useState("");
  const [user, setUser] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    const getInquiryList = async () => {
      const data = await InquiryService.getInquiriesByUser();
      setInquiryList(data);
    };

    setUser(userData());
    getInquiryList();
  }, []);

  const Actions = (e) => {
    setAction(e.target.value);
    setId(e.target.id);
    setInquiryModal(true);
  };

  const data = inquiryList?.map((item) => {
    return {
      key: item?.id,
      week: item?.week,
      students_number: item?.students_Number,
      type: item?.type,
      subject: item?.subject,
      carnet: item?.carnet,
      group: item?.group,
      status: (
        <>
          {item?.status === "Pendiente" ? (
            <>
              <ClockCircleOutlined /> {item?.status}
            </>
          ) : (
            <>
              <CheckOutlined /> {item?.status}
            </>
          )}
        </>
      ),
      course: item?.course,
      created_on: new moment(item?.created_on).format("DD/MM/YYYY HH:mm"),
      actions: (
        <Radio.Group size="small" value={null}>
          <Radio.Button
            id={item?.id}
            value="edit"
            onClick={Actions}
            disabled={item?.status !== "Pendiente"}
          >
            <div title="Editar registro">
              <EditOutlined />
            </div>
          </Radio.Button>
          <Radio.Button id={item?.id} value="view" onClick={Actions}>
            <div title="Detalles del registro">
              <EyeOutlined />
            </div>
          </Radio.Button>
        </Radio.Group>
      ),
    };
  });

  const newInquiry = () => {
    setAction("new");
    setId(null);
    setInquiryModal(true);
  };

  const onClose = async () => {
    const data = await InquiryService.getInquiriesByUser();
    setInquiryList(data);
    setInquiryModal(false);
  };

  return (
    <>
      <Modal
        visible={inquiryModal}
        onCancel={() => setInquiryModal(false)}
        footer={null}
      >
        <InquiryForm action={action} id={id} onClose={onClose} />
      </Modal>
      <Row>
        <Divider orientation='center'>Mis Consultas</Divider>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Button onClick={newInquiry}>
          <PlusOutlined /> Registrar nueva consulta
        </Button>
      </Row>
      <Table
        columns={columns}
        pagination={true}
        dataSource={data}
        scroll={{ x: 1200 }}
      />
    </>
  );
}
