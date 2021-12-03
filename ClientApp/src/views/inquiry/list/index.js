import {
  CheckOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Radio, Row, Table } from "antd";
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

function InquiryList() {
  const [inquiryModal, setInquiryModal] = useState(false);
  const [inquiryList, setInquiryList] = useState([]);
  const [action, setAction] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const getInquiryList = async () => {
      const data = await InquiryService.getInquiries();
      console.log(data);
      setInquiryList(data);
    };

    setUser(userData());
    getInquiryList();
  }, []);

  const Actions = (e) => {
    setAction(e.target.value);
    setInquiryModal(true);
  };

  const data = inquiryList.map((item) => {
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
            value="edit"
            onClick={Actions}
            disabled={item?.status !== "Pendiente"}
          >
            <div title="Editar registro">
              <EditOutlined />
            </div>
          </Radio.Button>
          <Radio.Button
            value="approve"
            onClick={Actions}
            disabled={user.role !== 1 && user.role !== 2}
          >
            <div title="Aprobar registro">
              <CheckOutlined />
            </div>
          </Radio.Button>
          <Radio.Button value="view" onClick={Actions}>
            <div title="Detalles del registro">
              <EyeOutlined />
            </div>
          </Radio.Button>
          <Radio.Button
            value="deleted"
            onClick={Actions}
            disabled={user.role !== 1 && user.role !== 2}
          >
            <div title="Eliminar registro">
              <DeleteOutlined />
            </div>
          </Radio.Button>
        </Radio.Group>
      ),
    };
  });

  const newInquiry = () => {
    setAction("new");
    setInquiryModal(true);
  };

  return (
    <>
      <Modal
        visible={inquiryModal}
        onCancel={() => setInquiryModal(false)}
        footer={null}
      >
        <InquiryForm action={action} />
      </Modal>
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

export default InquiryList;
