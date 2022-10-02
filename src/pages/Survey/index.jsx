import { Button, Col, Layout, List, Row, Typography, Spin } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import SearchInputBox from "./SearchInputBox";
import ListDetails from "./ListDetails";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TabMenu from "./Tabs/TabMenu";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerHistoryById } from "../../slices/surveys";
import { getCustomerList, setSelectedCustomer } from "../../slices/customers";
import { isEmpty } from "lodash";
import calender from "../../assets/images/icons/calendar.svg";
import left_arrow from "../../assets/images/icons/left-arrow.svg";
import { HistoryPopup } from "./Modals/HistoryPopup";
import { getTimeByTZ } from "../../helper/index";
import { getSppechScriptInfo, clearSurvey } from "../../slices/surveys";

const Survey = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [customerList, setCustomerList] = useState([]);
  const [payload, setPayload] = useState("");
  const { customers, surveys } = useSelector((state) => state);
  const { data, selectedCustomer } = customers;
  const { objective, procedure, dialouges } = surveys?.surveyScript;

  useEffect(() => {
    if (!isEmpty(surveys?.survey)) {
      const filteredCustomer = data?.filter((customer) => customer?.customerId === selectedCustomer?.customerId);
      setCustomerList(filteredCustomer);
    } else {
      setCustomerList(data);
    }
  }, [customers, surveys?.survey]);

  useEffect(() => {
    dispatch(getCustomerList());
    dispatch(getSppechScriptInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSelectedCustomer(data[0]?.customerId));
  }, [data, dispatch]);

  const handleSelectCustomer = (id) => {
    dispatch(setSelectedCustomer(id));
  };

  const backToSurvey = () => {
    dispatch(clearSurvey());
  };

  const historyHandler = () => {
    dispatch(getCustomerHistoryById(selectedCustomer?.customerId));
  };
  const solutionHandler = () => {
    navigate("/advise/financial-solutions");
  };
  const counselHandler = () => {
    navigate("/advise/finance-consultant");
  };
  const appointmentHandler = () => {
    navigate("/appointment-management");
  };

  return (
    <Fragment>
      <div className="survey">
        <h3 className="title">{t("survey.title")}</h3>

        <div className="survey-container">
          <Row gutter={[16, 10]} justify="start" align="stretch">
            <Col lg={15} md={24} sm={24} xs={24}>
              <Layout.Content>
                <div className="content-div-1">
                  <div className="container-left">
                    <div className="container-search-box">
                      <h1 className="container-search-box-header">Người tham gia</h1>
                      <SearchInputBox setPayload={setPayload}></SearchInputBox>
                    </div>

                    {customerList?.length > 0 && (
                      <List
                        dataSource={customerList}
                        renderItem={(customer, index) => (
                          <List.Item
                            onClick={() => handleSelectCustomer(customer?.customerId)}
                            className={`${customer?.customerId === selectedCustomer?.customerId ? "active" : ""}`}
                          >
                            <Typography.Text ellipsis>{customer?.fullname}</Typography.Text>
                          </List.Item>
                        )}
                      />
                    )}
                  </div>

                  <div className="container-right">
                    {isEmpty(surveys?.survey) ? (
                      <div className="container-right-header">
                        <div>
                          <HistoryPopup historyHandler={historyHandler} />
                        </div>
                        <div className="right">
                          <Button type="primary" className="btn-primary" onClick={solutionHandler}>
                            {t("common.solution")}
                          </Button>
                          <Button type="primary" className="btn-primary" onClick={counselHandler}>
                            {t("common.consultant")}
                          </Button>
                          <Button type="primary" className="btn-primary" onClick={appointmentHandler}>
                            {t("common.booking")}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="container-right-header" style={{ padding: "20px" }}>
                        <div onClick={backToSurvey} className="back-to-survey">
                          <img src={left_arrow} alt="back" height={12} style={{ marginRight: "5px" }} />
                        </div>
                        <div className="right">
                          <img src={calender} alt="calender" height={16} style={{ marginRight: "5px" }} />
                          <span>Ngày: {surveys?.survey?.createdAt ? getTimeByTZ(surveys?.survey?.createdAt) : ""}</span>
                        </div>
                      </div>
                    )}

                    <TabMenu />
                  </div>
                </div>
              </Layout.Content>
            </Col>

            {objective || procedure || dialouges?.length > 0 ? (
              <Col lg={9} md={24} sm={24} xs={24}>
                <Layout.Content className="manageContent">
                  <div className="content-div-2">
                    <ListDetails />
                  </div>
                </Layout.Content>
              </Col>
            ) : (
              <div>
                <Spin />
              </div>
            )}
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default Survey;
