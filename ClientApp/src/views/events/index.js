import { Badge, Calendar } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { InquiryService } from "../../service";

function Events() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    async function getInquiries() {
      setInquiries(await InquiryService.getInquiries());
    }
    getInquiries();
  }, []);

  const dateCellRender = (value) => {
    const listData = inquiries.filter((item) => {
      console.log(new moment(item.created_On).format("YYYY-MM-DD") === value.format("YYYY-MM-DD"));
      return new moment(item.created_On).format("YYYY-MM-DD") === value.format("YYYY-MM-DD");
    });

    return (
      <div className="events">
        {listData.map((item) => (
          <div key={item?.subject}>
            <Badge status={item?.status === 'Pendiente' ? 'warning' : 'success'} text={item?.subject} />
          </div>
        ))}
      </div>
    );
  };

  return <Calendar fullscreen={true} dateCellRender={dateCellRender} />;
}

export default Events;
