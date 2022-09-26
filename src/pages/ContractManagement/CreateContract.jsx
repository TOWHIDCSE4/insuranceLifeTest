import { React, useEffect } from "react";
import { Button, Form, Input, Row, Col, Select, DatePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { createContract, retrieveData } from "../../slices/contractManagement";
import "../../assets/scss/ContractManagement/createContractStyle.scss";

function CreateContract(props) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const data = {
      contractNumber: Number(values.contractNumber),
      customerId: 123,
      insured: values.insured,
      beneficiary: values.beneficiary,
      value: Number(values.value),
      startDate: moment(values.startDate),
      duration: Number(values.duration),
      depositTerm: Number(values.depositTerm),
      makeFirstDeposit: true,
      depositValue: 123,
      depositNote: "dasdas",
    }(props.func == "edit")
      ? dispatch(createContract(data))
      : dispatch(retrieveData());
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;

  return (
    <div className="create_contract">
      <div className="create_contract_header">
        <h3>{props.data?.title ? props.data.title : "Thêm hợp đồng"}</h3>
      </div>
      <div className="line"></div>
      <div className="create_contract_content">
        <Form
          name="create_contract_form"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Row gutter={[16, 0]}>
            <Col span={6}>
              <Form.Item
                label="Mã số"
                name="contractNumber"
                initialValue={props.data?.id_contract || null}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này.",
                  },
                ]}>
                <Input placeholder="Nhập" type="number" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Tên người mua"
                name="insured"
                initialValue={props.data?.name_payment || null}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này.",
                  },
                ]}>
                <Input placeholder="Nhập" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Tên người hưởng"
                name="beneficiary"
                initialValue={props.data?.beneficiary || null}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này.",
                  },
                ]}>
                <Input placeholder="Nhập" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Giá trị"
                name="value"
                initialValue={props.data?.price || null}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này.",
                  },
                ]}>
                <Input placeholder="Nhập" type="number" />
              </Form.Item>
            </Col>
            <Col span={6}>
              {props.data?.effective_date ? (
                <Form.Item
                  label="Ngày hiệu lực"
                  name="startDate"
                  initialValue={
                    moment(props.data?.effective_date) || "DD/MM/YYYY"
                  }
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập trường này.",
                    },
                  ]}>
                  <DatePicker format={"DD/MM/YYYY"} />
                </Form.Item>
              ) : (
                <Form.Item
                  label="Ngày hiệu lực"
                  name="startDate"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập trường này.",
                    },
                  ]}>
                  <DatePicker placeholder="DD/MM/YYYY" format={"DD/MM/YYYY"} />
                </Form.Item>
              )}
            </Col>
            <Col span={6}>
              <Form.Item
                label="Số năm nộp phí"
                name="duration"
                initialValue={props.data?.year_payment || null}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này.",
                  },
                ]}>
                <Input placeholder="Nhập" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Chu kỳ nộp phí"
                name="depositTerm"
                initialValue={props.data?.submission_cycle}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập trường này.",
                  },
                ]}>
                <Select className="select-before" placeholder="Chọn">
                  <Option value="Month">Tháng</Option>
                  <Option value="halfYear">Nửa năm</Option>
                  <Option value="year">Năm</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <div className="line"></div>
          <div className="btn_group">
            <button
              className="btn-danger btn"
              onClick={() => props.handleCloseModalCreate()}>
              Huỷ
            </button>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-primary btn">
                {props.data?.btn_submit_text || "Thêm mới"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreateContract;
