import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "antd";

export const CheckboxGroup = ({ control, name, options }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Checkbox.Group {...field} options={options} className="checkbox-item" />}
    />
  );
};
