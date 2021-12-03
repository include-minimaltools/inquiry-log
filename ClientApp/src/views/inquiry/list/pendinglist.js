import {
  CheckOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Divider, message, Radio, Row, Table } from "antd";
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

export function InquiryPendingList() {
  const [inquiryModal, setInquiryModal] = useState(false);
  const [inquiryList, setInquiryList] = useState([]);
  const [action, setAction] = useState("");
  const [user, setUser] = useState({});
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInquiryList = async () => {
      const data = await InquiryService.getInquiriesPending();
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

  const ChangeStatus = async (e) => {
    setLoading(true);
    const result = await InquiryService.changeStatus({
      inquiryId: e.target.id,
      status: e.target.value,
    });
    setLoading(false);
    if(result)
      message.success("El estado de la consulta ha sido actualizado");
    else
      message.error("Ha ocurrido un error al actualizar el estado de la consulta");
  }

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
            value="Aprobado"
            onClick={ChangeStatus}
            disabled={
              user.role !== 1 && user.role !== 2 && item?.status === "Aprobado"
            }
          >
            <div title="Aprobar registro">
              <CheckOutlined />
            </div>
          </Radio.Button>
          <Radio.Button id={item?.id} value="view" onClick={Actions}>
            <div title="Detalles del registro">
              <EyeOutlined />
            </div>
          </Radio.Button>
          <Radio.Button
            id={item?.id}
            value="Eliminado"
            onClick={ChangeStatus}
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

  const onClose = async () => {
    const data = await InquiryService.getInquiriesPending();
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
        <InquiryForm action={'view'} id={id} onClose={onClose} />
      </Modal>
      <Row>
        <Divider orientation='center'>Consultas Pendientes de Revisión</Divider>
      </Row>
      <Table
        loading={loading}
        columns={columns}
        pagination={true}
        dataSource={data}
        scroll={{ x: 1200 }}
      />
    </>
  );
}
