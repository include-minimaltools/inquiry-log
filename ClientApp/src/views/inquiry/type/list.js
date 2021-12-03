import {
    PlusOutlined,
  } from "@ant-design/icons";
  import { Button, Divider, Row, Table } from "antd";
  import React, { useEffect, useState } from "react";
import { InquiryService } from "../../../service";
  
  
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
  
  export function InquiryTypeList() {
    const [inquiryTypeList, setInquiryTypeList] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const data = await InquiryService.getInquiryTypes();
        setInquiryTypeList(data);
      };
  
      getData();
    }, []);
  
    const data = inquiryTypeList?.map((item) => {
      return {
        key: item?.id,
        id: item?.id,
        description: item?.description,
      };
    });
  
    return (
      <>
        <Row>
          <Divider orientation="center">Tipos de Consultas</Divider>
        </Row>
        <Row style={{ marginBottom: "10px" }}>
          <Button>
            <PlusOutlined /> Nuevo Tipo
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
  