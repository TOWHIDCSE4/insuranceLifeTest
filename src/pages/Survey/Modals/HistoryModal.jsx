import { Modal, Table } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { getSurveyDetails } from "../../../slices/surveys";
export const HistoryModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const { surveys } = useSelector((state) => state);

  useEffect(() => {
    const historyData = surveys?.customerHistories?.map((history, i) => {
      return {
        key: i + 1,
        apptId: history?.apptId,
        customerId: history?.customerId,
        surveyId: history?.surveyId,
        date: moment(history?.createdAt).format("DD/MM/YYYY"),
        info: history?.hintName,
      };
    });
    setDataTable(historyData);
  }, [surveys.customerHistories]);

  const getSurvey = (surveyId) => {
    dispatch(getSurveyDetails(surveyId));
    console.log("survey id", surveyId);
  };

  const columns = [
    {
      title: t("Date"),
      dataIndex: "date",
      key: "date",
      render: (_, record) => (
        <span
          onClick={() => getSurvey(record?.surveyId)}
          style={{ cursor: "pointer" }}>
          {record?.date}
        </span>
      ),
    },
    {
      title: t("Name"),
      dataIndex: "info",
      key: "info",
      render: (_, record) => (
        <span
          onClick={() => getSurvey(record?.surveyId)}
          style={{ cursor: "pointer" }}>
          {record?.info}
        </span>
      ),
    },
  ];

  // const handleOk = () => {
  //   toggleModal();
  // };
  console.log(dataTable);

  return (
    <div
      title="Lịch sử khảo sát"
      className="history-modal modal-custom"
      width={313}>
      {dataTable?.length && (
        <Table dataSource={dataTable} columns={columns} pagination={false} />
      )}
    </div>
  );
};
