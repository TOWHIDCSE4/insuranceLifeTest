import React, { useMemo, useState } from "react";
import { Button, Checkbox, Row, Col, Popover, Table } from "antd";
import { useTranslation } from "react-i18next";
import { HistoryModal } from "./HistoryModal";
// import FilterIcon from '../../../assets/images/icons/filter.svg';

export default function HistoryModal2(props) {
  const { t } = useTranslation();
  const { options, setPayload } = props;
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  console.log(options);
  const dataTable = useMemo(() => {
    return (
      <div>
        {" "}
        {options.map((option, i) => (
          <div key={i}>{option.label}</div>
        ))}{" "}
      </div>
    );
  });

  return (
    <div className="filter">
      <Popover
        content={dataTable}
        trigger="click"
        placement="bottomLeft"
        onOpenChange={handleOpenChange}>
        <Button type="primary" className="btn-primary">
          <div>{t("common.history")}</div>
        </Button>
      </Popover>
    </div>
  );
}
