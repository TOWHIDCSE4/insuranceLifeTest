import React from "react";
import { useForm } from "react-hook-form";
import { Input, FieldLabel, CheckboxGroup, Select, DatePicker } from "../../../components/controls";

export const PersonalInfoForm = () => {
  const { control } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "Nguyễn Văn Tie",
      sex: [1],
      familyStatus: [1],
    },
  });
  return (
    <div className="personal-info-container">
      <form>
        <table className="personal-info-table">
          <tr>
            <td>
              <div className="form-group">
                <FieldLabel name="fullName" label="Họ và tên" required />
                <Input control={control} name="fullName" />
              </div>
            </td>
            <td className="personal-date">
              <div className="form-group">
                <FieldLabel name="dob" label="Ngày sinh" />
                <DatePicker control={control} name="dob" />
              </div>
            </td>
            <td className="personal-checkbox">
              <FieldLabel name="sex" label="Giới tính" />
              <div style={{ marginTop: "10px" }}>
                <CheckboxGroup name="sex" control={control} options={sex} />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <FieldLabel name="job" label="Nghề nghiệp" />
              <div style={{ marginTop: "5px" }}>
                <Select control={control} name="job" options={[]} placeholder="Chọn" />
              </div>
            </td>
            <td colSpan={2}>
              <div>
                <FieldLabel name="interests" label="Sở thích" />
                <Input control={control} name="interests" placeholder="Nhập" />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <FieldLabel name="phone" label="Số điện thoại" />
                <Input control={control} name="phone" placeholder="Nhập" />
              </div>
            </td>
            <td className="" colSpan={2}>
              <div>
                <FieldLabel name="address" label="Địa chỉ" />
                <Input control={control} name="address" placeholder="Nhập" />
              </div>
            </td>
          </tr>

          <tr>
            <td colSpan={3}>
              <FieldLabel name="familyStatus" label="Tình trạng gia đình" />
              <div style={{ marginTop: "10px" }}>
                <CheckboxGroup name="familyStatus" control={control} options={familyStatus} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <FieldLabel name="numOfChildren" label="Số con" />
              <div>
                <Input control={control} name="numOfChildren" placeholder="Nhập" />
              </div>
            </td>
            <td>
              <FieldLabel name="numOfDependents" label="Số người phụ thuộc" />
              <div>
                <Input control={control} name="numOfDependents" placeholder="Nhập" />
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

const sex = [
  {
    id: 1,
    label: "Nam",
    value: 1,
  },
  {
    id: 2,
    label: "Nữ",
    value: 2,
  },
];

const familyStatus = [
  {
    id: 1,
    label: "Độc thân",
    value: 1,
  },
  {
    id: 2,
    label: "Có gia đình",
    value: 2,
  },
  {
    id: 3,
    label: "Góa",
    value: 3,
  },
];
