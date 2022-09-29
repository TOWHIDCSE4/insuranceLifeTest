import React, { useState, useEffect } from "react";
import { Button, Popover } from "antd";
import { useTranslation } from "react-i18next";
import { Spin, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getSurveyDetails } from "../../../slices/surveys";
import { getTimeByTZ } from "../../../helper/index";

export const HistoryPopup = ({ historyHandler }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const { surveys } = useSelector((state) => state);

  useEffect(() => {
    const historyData = surveys?.customerHistories?.map((history, i) => {
      return {
        id: i + 1,
        apptId: history?.apptId,
        customerId: history?.customerId,
        surveyId: history?.surveyId,
        date: getTimeByTZ(history?.createdAt),
        info: history?.hintName,
      };
    });
    setDataTable(historyData);
  }, [surveys.customerHistories]);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const getSelectedSurvey = (id) => {
    dispatch(getSurveyDetails(id));
  };

  const onCancel = () => {
    setOpen(false);
  };

  const content = (
    <div className="history-table-container">
      {dataTable?.length > 0 ? (
        <table className="history-table">
          <thead>
            <tr>
              <th>{t("Date")}</th>
              <th>{t("Name")}</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((row, i) => (
              <tr key={row?.id} onClick={() => getSelectedSurvey(row?.surveyId)}>
                <td>{row?.date}</td>
                <td>{row?.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="table-spainer">
          <Spin />
        </div>
      )}
    </div>
  );
  return (
    <Popover
      placement="bottomLeft"
      content={content}
      trigger="click"
      onOpenChange={handleOpenChange}
      overlayClassName="history-popover"
      visible={open}
      title="Lịch sử khảo sát"
    >
      <Button type="primary" className="btn-primary" htmlType="button" onClick={historyHandler}>
        {t("common.history")}
      </Button>
    </Popover>
  );
};
