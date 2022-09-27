import React, { useState } from "react";
import { Button, Popover, Divider, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

export const ClosingModal = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const onOk = () => {
    onSubmit(name);
  };

  const content = (
    <div className="closing-container">
      <div className="closing-body">
        <div className="form-group">
          <Form.Item label="Tên gợi nhớ" name="reminiscent_name" labelCol={{ span: 24 }}>
            <Input placeholder="Esther Howard" className="closing__input" onChange={(e) => setName(e.target.value)} />
          </Form.Item>
        </div>
      </div>
      <Divider />
      <div className="closing-footer">
        <div className="closing-btn">
          <Button htmlType="button" className="btn-cancel" block onClick={onCancel} onBlur={onCancel}>
            Hủy+
          </Button>
        </div>

        <div className="closing-btn">
          <Button type="primary" htmlType="button" className="btn-primary" block onClick={onOk}>
            Tạo
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <Popover
      placement="bottomRight"
      content={content}
      trigger="click"
      onOpenChange={handleOpenChange}
      overlayClassName="closing-popover"
      visible={open}
    >
      <Button type="primary" htmlType="button" className="btn-primary finance-btn-small" block>
        {t("survey.save")}
      </Button>
    </Popover>
  );
};
