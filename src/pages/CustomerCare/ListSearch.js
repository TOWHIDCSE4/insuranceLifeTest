import React, { useEffect, useState } from "react";
import { Col } from "antd";
import InputSearch from "../../components/common/InputSearch";
import Filter from "../../components/common/Filter";
import List from "../../components/common/List";
import { TYPE_LIST_CUSTOMERS, DEFAULT_SIZE } from "../../ultis/constant";
import { getCustomers } from "../../services/customers";
import Pagination from "../../components/common/Pagination";
import { setCustomerData } from "../../slices/customerCare";
import { useDispatch } from "react-redux";

const options = [
  { label: "Không còn tiềm năng, dừng tư vấn", value: 1 },
  { label: "Chưa gọi điện", value: 2 },
  { label: "Đã gọi điện lần 1, cần gọi lần 2", value: 3 },
  { label: "Đã có lịch hẹn gặp khảo sát", value: 4 },
  { label: "Đã khảo sát, chờ lịch tư vấn tài chính", value: 5 },
  { label: "Đã có lịch tư vấn tài chính", value: 6 },
  { label: "Đã tư vấn tài chính, chờ lịch hẹn tư vấn  giải pháp", value: 7 },
  { label: "Đã tư vấn giải pháp, chờ chốt kết quả", value: 8 },
  { label: "Đã chốt kết quả, chờ thông tin hợp đồng", value: 9 },
  { label: "Đã có hợp đồng", value: 10 },
  { label: "Chăm sóc khách hàng cho hợp đồng tiếp theo", value: 11 },
];

export default function ListSearch() {
  const [selectId, setSelectId] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [optionsFilter, setOptionsFilter] = useState("");
  const [listCustomer, setListCustomer] = useState([]);
  const [total, setTotal] = useState([]);
  const dispatch = useDispatch();
  const [paginate, setPaginate] = useState({
    limit: DEFAULT_SIZE,
    offset: 0,
  });

  const getDataCustomer = async (payload) => {
    const { data } = await getCustomers(payload);
    console.log(data);
    setListCustomer(data?.data);
    setTotal(data?.count);
    setSelectId(data?.data[0].customerId);
  };
  console.log(getDataCustomer);
  useEffect(() => {
    // setPercent(optionsFilter.slice(-1)[0] * 10)
  }, [optionsFilter]);

  useEffect(() => {
    if (selectId > 0) {
      const customerData = listCustomer.find(
        (data) => data.customerId === selectId
      );
      dispatch(setCustomerData(customerData));
    }
  }, [selectId]);

  useEffect(() => {
    getDataCustomer({ ...{ name: keyword }, ...paginate });
  }, [keyword, paginate]);

  return (
    <Col span={4} className="customer-care__left">
      <InputSearch setPayload={setKeyword} />
      <Filter options={options} setPayload={setOptionsFilter} />
      <List
        type={TYPE_LIST_CUSTOMERS}
        dataList={listCustomer}
        selectId={selectId}
        setSelectId={setSelectId}
      />
      <Pagination
        total={total}
        showSizeChanger={false}
        setPaginate={setPaginate}
      />
    </Col>
  );
}
