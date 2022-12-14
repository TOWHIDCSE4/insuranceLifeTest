import React, { useMemo, useState } from "react";
import moment from "moment";
import { Col, Form, Row } from "antd";
import Modal from "../../components/common/ModalSelect";
import Select from "../../components/common/Select";
import Input from "../../components/common/Input";
import DatePicker from "../../components/common/DatePicker";
import { useTranslation } from "react-i18next";
import { acquaintanceLevel, marriageStatus } from "../../constants/common";
import { useDispatch, useSelector } from "react-redux";
import { updatePotentialCustomer } from "../../slices/potentialCustomersSlice";
import { useEffect } from "react";
import { REGEX_PHONE } from "./constants";

export default function EditCustomer({ isModalOpen, handleCancel, data }) {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [maritalStatusF, setMaritalStatusF] = useState();
  const [acquaintanceLevelStatus, setAcquaintanceLevelStatus] = useState();
  const [typeId, setTypeId] = useState(data.typedId);
  const companies = useSelector(
    (state) => state.potentialCustomersReducer.companies,
  );

  const marriageOptions = useMemo(
    () =>
      marriageStatus.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      )),
    [marriageStatus],
  );

  const acquaintanceLevelOptions = useMemo(
    () =>
      acquaintanceLevel.map(({ label, value }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      )),
    [acquaintanceLevel],
  );

  const companyOptions = useMemo(
    () =>
      companies.map(({ name, companyId }) => (
        <Option key={companyId} value={companyId}>
          {name}
        </Option>
      )),
    [companies],
  );

  const handleChangeSelectCustomer = (value) => {
    setTypeId(value);
  };

  const onFinish = (value) => {
    dispatch(
      updatePotentialCustomer({
        ...value,
        customerId: data.customerId,
        typeId,
      }),
    );
    handleCancel();
  };

  const onCancel = () => {
    handleCancel();
  };

  useEffect(() => {
    if (data) {
      setTypeId(data.typeId);
    }
  }, [data]);

  return (
    <Modal
      title="Chi ti???t kh??ch h??ng"
      isModalOpen={isModalOpen}
      handleCancel={onCancel}
      handleOk={form.submit}
      cancelText="Hu??? c???p nh???t"
      okText="C???p nh???t kh??ch h??ng"
      renderSelect={
        <Select
          value={typeId}
          onChange={(selected) => handleChangeSelectCustomer(selected)}
          style={{ width: "150px" }}
        >
          <Option disabled={data.typeId === 3} value={1}>
            C?? nh??n
          </Option>
          <Option disabled value={3}>
            Doanh nghi???p
          </Option>
          <Option disabled={data.typeId === 3} value={2}>
            NV doanh nghi???p
          </Option>
        </Select>
      }
    >
      <Form form={form} colon={false} layout="vertical" onFinish={onFinish}>
        {typeId === 3 ? (
          <>
            <Row gutter={12}>
              <Col span={16}>
                <Form.Item
                  label="T??n doanh nghi???p"
                  name="fullname"
                  initialValue={data.name}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.name")}`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="S??? ??i???n tho???i"
                  name="phone1"
                  initialValue={data.phone1}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.phone1")}`,
                    },
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <Form.Item
                  label="?????a ch???"
                  name="address"
                  initialValue={data.address}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.address")}`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="H??? v?? t??n"
                  name="name"
                  initialValue={data.fullname}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.name")}`,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="S??? ??i???n tho???i 1"
                  name="phone1"
                  initialValue={data.phone1}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.phone1")}`,
                    },
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="S??? ??i???n tho???i 2"
                  name="phoneNumber2"
                  initialValue={data.phone2}
                  rules={[
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="S??? ??i???n tho???i 3"
                  name="phoneNumber3"
                  initialValue={data.phone3}
                  rules={[
                    {
                      pattern: REGEX_PHONE,
                      message: "Vui l??ng nh???p ????ng s??? ??i???n tho???i",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="H??n nh??n"
                  name="maritalStatus"
                  initialValue={+data.maritalStatus}
                  rules={[
                    {
                      required: true,
                      message: `${t(
                        "potential customers.message.maritalStatus",
                      )}`,
                    },
                  ]}
                >
                  <Select
                    value={maritalStatusF}
                    placeholder="Ch???n"
                    onChange={(selected) => setMaritalStatusF(selected)}
                  >
                    {marriageOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Thu nh???p"
                  name="income"
                  initialValue={data.income}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.income")}`,
                    },
                    {
                      validator: (_, value) =>
                        value >= 10000000
                          ? Promise.resolve()
                          : Promise.reject(
                            new Error("Thu nh???p t???i thi???u 10.000.000??"),
                          ),
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="M???c ????? th??n quen"
                  name="acquaintanceLevel"
                  initialValue={+data.acquaintanceLevel}
                  rules={[
                    {
                      required: true,
                      message: `${t(
                        "potential customers.message.acquaintanceLevel",
                      )}`,
                    },
                  ]}
                >
                  <Select
                    value={acquaintanceLevelStatus}
                    placeholder="Ch???n"
                    onChange={(selected) =>
                      setAcquaintanceLevelStatus(selected)
                    }
                  >
                    {acquaintanceLevelOptions}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Ng??y sinh"
                  name="dob"
                  initialValue={moment(data.dob)}
                  rules={[
                    {
                      required: true,
                      message: `${t("potential customers.message.birthday")}`,
                    },
                    {
                      validator: (_, value) =>
                        new Date().getFullYear() -
                          new Date(value).getFullYear() >
                        18
                          ? Promise.resolve()
                          : Promise.reject(
                            new Error("S??? tu???i ph???i l???n h??n 18"),
                          ),
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    defaultValue={moment(data.dob, "YYYY-MM-DD")}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={6}>
                <Form.Item
                  label="Ngh??? nghi???p"
                  name="job"
                  initialValue={data.job}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Doanh nghi???p"
                  initialValue={
                    typeId === 2 ? data.companyId : data.companyText
                  }
                  name={`${typeId === 2 ? "companyId" : "companyText"}`}
                >
                  {typeId === 2 ? (
                    <Select placeholder="Ch???n">{companyOptions}</Select>
                  ) : (
                    <Input />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  initialValue={data.email}
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label="?????a ch???"
                  name="address"
                  initialValue={data.address}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="M?? s??? h???p ?????ng" name="contract_number">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <Form.Item label="Kh??c" name="note" initialValue={data.note}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </Modal>
  );
}
