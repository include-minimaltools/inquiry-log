import {
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Divider, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { InquiryService } from "./../../service/Inquiry.service";

const columns = [
  {
    title: "Nombre",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "Apellido",
    key: "lastName",
    dataIndex: "lastName",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Telefono",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Dirección",
    key: "address",
    dataIndex: "address",
  },
  {
    title: "Rol",
    key: "role",
    dataIndex: "role",
  }
];

export function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      const data = await InquiryService.getUsers();
      setUserList(data);
    };

    getUserList();
  }, []);

  const data = userList?.map((item) => {
    return {
      key: item?.id,
      name: item?.name,
      lastname: item?.lastname,
      email: item?.email,
      phone: item?.phone,
      address: item?.address,
      role: item?.role,
    };
  });

  return (
    <>
      <Row>
        <Divider orientation="center">Usuarios de la Plataforma</Divider>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Button>
          <PlusOutlined /> Nuevo Usuario
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
