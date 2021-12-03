import {
    PlusOutlined,
  } from "@ant-design/icons";
  import { Button, Divider, Row, Table } from "antd";
  import React, { useEffect, useState } from "react";
  import { InquiryService } from "./../../service/Inquiry.service";
  
  const columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Descripción",
      key: "description",
      dataIndex: "description",
    },
  ];
  
  export function PermissionList() {
    const [permissionList, setPermissionList] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const data = await InquiryService.getPermission();
        setPermissionList(data);
      };
  
      getData();
    }, []);
  
    const data = permissionList?.map((item) => {
      return {
        key: item?.id,
        id: item?.id,
        description: item?.description,
      };
    });
  
    return (
      <>
        <Row>
          <Divider orientation="center">Permisos</Divider>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Button>
            <PlusOutlined /> Nuevo Permiso
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
  