import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { Select } from "antd";
const { Option } = Select;

const SelectControl = ({
  name,
  control,
  options,
  multiple = false,
  errors,
  msg,
  isDisabled = false,
  placeholder = "",
  className = "",
}) => {
  const [optionList, setOptionList] = useState([]);

  useEffect(() => {
    setOptionList(options);
  }, [options]);
  let errMsg = msg ? msg : errors?.[name]?.message;

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            mode={multiple ? "multiple" : undefined}
            disabled={isDisabled}
            className={`select-control ${className}`}
            status={errMsg && "error"}
            size="large"
            allowClear={false}
            bordered
            placeholder={placeholder}
          >
            {/* <Option value="">
              <span className="">{placeholder}</span>
            </Option> */}
            {optionList?.length > 0 &&
              optionList?.map((item, index) => (
                <Option key={index} value={item?.value}>
                  <span className="">{item?.label}</span>
                </Option>
              ))}
          </Select>
        )}
      />
      <p className={`error-msg`}>{errMsg}</p>
    </>
  );
};

export default SelectControl;
