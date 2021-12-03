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
import React, { useEffect, useState } from "react";
import { userData } from "../../../helper";
import { InquiryService } from "../../../service/Inquiry.service";

const { Title } = Typography;

function InquiryForm({ action, id }) {
  const [user, setUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [inquiry, setInquiry] = useState({
    id: undefined,
    week: 1,
    students_number: 1,
    type: undefined,
    subject: "",
    carnet: "",
    comments: undefined,
    status: undefined,
    teacher: undefined,
    course: undefined,
    group: undefined,
    semester: 1,
  });
  const [courseList, setCourseList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    async function getDataForm() {
      setCourseList(await InquiryService.getCourseByUser());
      setTypeList(await InquiryService.getInquiryTypes());
    }

    setUser(userData());
    setIsEdit(action === "edit" || action === "new");

    getDataForm();
  }, [action]);

  const createInquiry = () => {};

  const loadGroup = async (value) => {
    setGroupList(await InquiryService.getGroupByCourse({ id: value }));
  };

  const changeCourse = async (value) => {
    await loadGroup(value);
    setInquiry({ ...inquiry, course: value });
  };

  return (
    <>
      <Row
        justify="space-between"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Col>
          <Title level={4}>Registrar nueva consulta</Title>
        </Col>
      </Row>
      <Divider orientation="left">Detalles del profesor</Divider>
      <Row gutter={[50, 0]}>
        <Col>
          <Form.Item label="Nombre del docente:">
            <Input disabled value={user?.name + " " + user?.lastname} />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">Detalles de la Materia</Divider>
      <Row gutter={[50, 0]}>
        <Col span={20}>
          <Form.Item label="Materia">
            <Select disabled={!isEdit} onChange={changeCourse}>
              {courseList.map((item) => (
                <Select.Option value={item?.id}>{item?.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Numero de la semana">
            <InputNumber
              min={1}
              disabled={!isEdit}
              value={inquiry?.week}
              onChange={(e) => setInquiry({ ...inquiry, week: e })}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Semestre">
            <Select defaultValue={inquiry?.semester} disabled={!isEdit}>
              <Select.Option value={1}>I</Select.Option>
              <Select.Option value={2}>II</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={15}>
          <Form.Item label="Tipo de Consulta">
            <Select disabled={!isEdit} >
              {typeList.map((item) => (
                <Select.Option value={item?.id}>{item?.description}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[50, 0]}>
        <Col>
          <Form.Item label="Tema de la consulta">
            <Input
              placeholder="Ej: Introducción a la programación"
              value={inquiry?.subject}
              onChange={(e) => setInquiry({ ...inquiry, subject: e.value })}
              disabled={!isEdit}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[50, 0]}>
        <Col flex='auto'>
          <Form.Item label="Observaciones">
            <Input.TextArea
              disabled={!isEdit}
              placeholder="Ej: Duda sobre los topicos no establecidos de los temas de las clases"
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">Detalles del estudiante</Divider>
      <Row gutter={[50, 0]}>
        <Col>
          <Form.Item label="Cantidad de estudiantes">
            <InputNumber
              min={1}
              disabled={!isEdit}
              value={inquiry?.students_number}
              onChange={(e) => setInquiry({ ...inquiry, students_number: e })}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Carnet de un estudiante">
            <Input
              placeholder="Ej: 2000-0000U"
              value={inquiry?.carnet}
              disabled={!isEdit}
              onChange={(e) => setInquiry({ ...inquiry, carnet: e.value })}
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Grupo">
            <Select disabled={!isEdit}>
              {groupList.map((item) => (
                <Select.Option value={item?.id}>{item?.description}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[50, 0]} justify='end'>
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
