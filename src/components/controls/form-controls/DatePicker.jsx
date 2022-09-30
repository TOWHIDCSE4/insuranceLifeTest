import React from 'react'
import { Controller } from "react-hook-form";
import { DatePicker } from "antd";
import moment from "moment";

const disabledDate = (current) => {
  return moment().endOf("day") <= current;
};

const DatePickerControl = ({
  name,
  control,
  errors,
  defaultValue,
  isDisabled = false,
  placeholder = "12/08/2022",
  format = "DD/MM/YYYY",
  className = "",
  allowClear = false,
}) => {
  let errMsg = errors?.[name]?.message;
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            allowClear={allowClear}
            {...field}
            id={name}
            defaultValue={defaultValue}
            className={` date-picker-control form-control ${className}`}
            status={errMsg && "error"}
            size="large"
            disabled={isDisabled}
            placeholder={placeholder}
            placement={"bottomLeft"}
            format={format}
            disabledDate={disabledDate}
          />
        )}
      />
      <p className="errorMsg">{errMsg}</p>
    </div>
  );
};

export default DatePickerControl;
