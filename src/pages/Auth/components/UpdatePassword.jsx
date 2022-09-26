import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Modal, Typography } from "antd";
import { changePasswordApi } from "../../../services/auth";

import FooterPassword from "./FooterPassword";
import HeaderPassword from "./HeaderPassword";
import CodeInput from "../../../components/CodeInput";

const UpdatePassword = ({
  open,
  handleCancel,
  handleCancelForgot,
  handleLoginId,
  loginId,
}) => {
  const [codeInput, setCodeInput] = useState("");
  const [messageError, setMessageError] = useState("");
  const [openMessageError, setOpenMessageError] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      if (values.password === values.confirmPassword) {
        const data = {
          loginId: loginId,
          code: codeInput,
          password: values.password,
        };
        await changePasswordApi(data);
        handleCancel();
        form.resetFields();
        handleCancelForgot();
        handleLoginId("");
      } else {
        setOpenMessageError(true);
        setMessageError("Mật khẩu mới không trùng khớp");
      }
    } catch (e) {
      setOpenMessageError(true);
      setMessageError("Cập nhật mật khẩu thất bại");
    }
  };

  const onFinishFailed = () => {
    if (codeInput.length !== 4 || codeInput.length < 0) {
      setMessageError("Vui Lòng Nhập mã code");
    } else {
      setMessageError("Vui Lòng nhập Mật khẩu mới và nhập lại mật khẩu mới");
    }
    setOpenMessageError(true);
  };

  return (
    <Modal
      className="update-password"
      open={open}
      onCancel={handleCancel}
      centered
      closable={false}
      footer={null}
      width={335}
    >
      <HeaderPassword
        title="Cập nhật mật khẩu"
        text="Nhập mã code trong email của bạn"
      />
      <div className="update-password__content">
        <CodeInput
          value={codeInput}
          fields={4}
          onChange={(value) => setCodeInput(value)}
          type="number"
        />
        <Form
          form={form}
          name="update-password"
          onFinish={onFinish}
          autoComplete="on"
          className="update-password__form"
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Mật khẩu mới"
            name="password"
            labelCol={{ span: 24 }}
            className="update-password__boxInput"
            rules={[{ required: true, message: "" }]}
          >
            <Input.Password
              className="update-password__password"
              type="password"
              placeholder="Mật khẩu mới"
            />
          </Form.Item>

          <Form.Item
            label="Nhập lại mật khẩu mới"
            labelCol={{ span: 24 }}
            name="confirmPassword"
            className="update-password__boxInput"
            rules={[{ required: true, message: "" }]}
          >
            <Input.Password
              className="update-password__password"
              type="password"
              placeholder="Nhập lại mật khẩu mới"
            />
          </Form.Item>

          {openMessageError && (
            <Typography className="update-password__textError">
              {messageError}
            </Typography>
          )}

          <Form.Item className="update-password__footer">
            <FooterPassword
              textCancel="Huỷ"
              textSubmit="Gửi"
              handleCancel={handleCancel}
              typeSubmit={true}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

UpdatePassword.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleCancelForgot: PropTypes.func,
  loginId: PropTypes.string,
  handleLoginId: PropTypes.func,
};

export default UpdatePassword;
