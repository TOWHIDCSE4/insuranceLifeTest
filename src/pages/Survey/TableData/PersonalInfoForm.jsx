import React from "react";
import { useForm } from "react-hook-form";
import { Input, FieldLabel, CheckboxGroup, DatePicker } from "../../../components/controls";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editCustomer } from "../../../slices/customers";

export const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state);
  const selectedCustomer = customers?.selectedCustomer || {};
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: {
      fullName: "Nguyễn Văn Tie",
      sex: [1],
      familyStatus: [1],
    },
  });

  const onSubmit = (data) => {
    const formData = {
      typeId: 1,
      maritalStatus: 1,
      acquaintanceLevel: 1,
      gender: 1,
      name: data?.fullName,
      phone1: data?.phone,
      phone2: "",
      phone3: "",
      income: "123456",
      dob: data?.dob?._d,
      job: data?.job,
      companyText: "",
      companyId: 0,
      email: "demo@gmail.com",
      address: data?.address,
      contractNumber: "",
      note: "",
      isPotential: true,
      concerns: "",
      size: 0,
      hobby: data?.interests,
      childrenNum: +data?.numOfChildren,
      dependentsNum: +data?.numOfDependents,
    };

    dispatch(editCustomer({ id: selectedCustomer?.customerId, data: formData }));
  };

  return (
    <div className="personal-info-container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <div>
                <FieldLabel name="job" label="Nghề nghiệp" />
                <Input control={control} name="job" placeholder="Chọn" />
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
        <div className="info-footer">
          <div className="info-btn">
            <Button htmlType="button" className="btn-cancel" block>
              Hủy+
            </Button>
          </div>

          <div className="info-btn">
            <Button type="primary" htmlType="submit" className="btn-primary" block>
              Tạo
            </Button>
          </div>
        </div>
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

// const jobs = [
//   {
//     id: 1,
//     label: "Engineer",
//     value: "engineer",
//   },
//   {
//     id: 2,
//     label: "Service Holder",
//     value: "service_holder",
//   },
//   {
//     id: 3,
//     label: "Business man",
//     value: "business_man",
//   },
//   {
//     id: 4,
//     label: "Doctor",
//     value: "doctor",
//   },
// ];
{
  /* <Select control={control} name="job" options={jobs} placeholder="Chọn" /> */
}
