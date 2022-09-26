import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Modal, Typography } from "antd";

import { resetPasswordApi } from "../../../services/auth";
import FooterPassword from "./FooterPassword";
import HeaderPassword from "./HeaderPassword";

const ForgotPassword = ({
  open,
  handleCancel,
  handleOpenUpdate,
  id,
  handleLoginId,
}) => {
  const [messageError, setMessageError] = useState("");
  const [openMessageError, setOpenMessageError] = useState(false);

  const handleSend = async () => {
    try {
      if (id !== "") {
        await resetPasswordApi({ loginId: id });
        setOpenMessageError(false);
        handleOpenUpdate();
      } else {
        setOpenMessageError(true);
        setMessageError("Vui lòng nhập ID của bạn");
      }
    } catch (e) {
      setOpenMessageError(true);
      setMessageError("ID của bạn không được tìm thấy");
    }
  };

  return (
    <Modal
      className="forgot-password"
      open={open}
      onCancel={handleCancel}
      centered
      closable={false}
      footer={
        <FooterPassword
          textCancel="Huỷ"
          textSubmit="Gửi email"
          handleCancel={handleCancel}
          handleSubmit={handleSend}
        />
      }
      width={335}
    >
      <HeaderPassword
        title="Quên mật khẩu"
        text="Vui lòng nhập ID của bạn để cập nhật mật khẩu"
      />
      <div className="forgot-password__boxInput">
        <Typography className="forgot-password__boxInput__label">ID</Typography>
        <Input
          value={id}
          onChange={(e) => handleLoginId(e.target.value)}
          className="login__input forgot-password__boxInput__id"
          placeholder="id"
        />
      </div>
      {openMessageError && (
        <Typography className="forgot-password__textError">
          {messageError}
        </Typography>
      )}
    </Modal>
  );
};

ForgotPassword.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleOpenUpdate: PropTypes.func,
  id: PropTypes.string,
  handleLoginId: PropTypes.func,
};

export default ForgotPassword;
