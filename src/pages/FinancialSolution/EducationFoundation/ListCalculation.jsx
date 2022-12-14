import { Button, Select, Checkbox, Form, Input, InputNumber } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ListCalculation = () => {
  const [form] = Form.useForm();
  const [annualTuitionFee, setAnnualTuitionFee] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [collegeAge, setCollegeAge] = useState(0);
  const [firstChildAge, setFirstChildAge] = useState(0);
  const [firstChildAmount, setFirstChildAmount] = useState(0);
  const [secondChildAge, setSecondChildAge] = useState(0);
  const [secondChildAmount, setSecondChildAmount] = useState(0);
  const [thirdChildAge, setThirdChildAge] = useState(0);
  const [thirdChildAmount, setThirdChildAmount] = useState(0);
  const [fourthChildAge, setFourthChildAge] = useState(0);
  const [fourthChildAmount, setFourthChildAmount] = useState(0);
  const [minusAmount, setMinusAmount] = useState(0);
  const [inflationRate, setInflationRate] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [grandTotalAmount, setGrandTotalAmount] = useState(0);

  // onchange founctions
  const onChange = (value) => {
    setAnnualTuitionFee(value);
  };
  const onChange1 = (value) => {
    setMinusAmount(value);
  };

  // annualTuitionFee
  useEffect(() => {}, []);

  // firstChildAmount
  useEffect(() => {
    let per = inflationRate / 100 + 1;
    let childAge1 = collegeAge - firstChildAge;
    setFirstChildAmount(annualTuitionFee * Math.pow(per, childAge1));
  }, [annualTuitionFee, inflationRate, collegeAge, firstChildAge]);

  // secondChildAmount
  useEffect(() => {
    let per = inflationRate / 100 + 1;
    let childAge2 = collegeAge - secondChildAge;
    setSecondChildAmount(annualTuitionFee * Math.pow(per, childAge2));
  }, [annualTuitionFee, inflationRate, collegeAge, secondChildAge]);

  // setThirdChildAmount
  useEffect(() => {
    let per = inflationRate / 100 + 1;
    let childAge3 = collegeAge - thirdChildAge;
    setThirdChildAmount(annualTuitionFee * Math.pow(per, childAge3));
  }, [annualTuitionFee, inflationRate, collegeAge, thirdChildAge]);

  // setFourthChildAmount
  useEffect(() => {
    let per = inflationRate / 100 + 1;
    let childAge4 = collegeAge - fourthChildAge;
    setFourthChildAmount(annualTuitionFee * Math.pow(per, childAge4));
  }, [annualTuitionFee, inflationRate, collegeAge, fourthChildAge]);

  //setTotalAmount
  useEffect(() => {
    setTotalAmount(
      firstChildAmount +
        secondChildAmount +
        thirdChildAmount +
        fourthChildAmount
    );
  }, [
    firstChildAmount,
    secondChildAmount,
    thirdChildAmount,
    fourthChildAmount,
  ]);

  // setGrandTotalAmount
  useEffect(() => {
    setGrandTotalAmount(totalAmount - minusAmount);
  }, [
    totalAmount,
    minusAmount,
    annualTuitionFee,
    numberOfChildren,
    firstChildAge,
    secondChildAmount,
    thirdChildAmount,
    fourthChildAmount,
    totalAmount,
  ]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <div className="container-right-middle">
        <Form.Item name="name1" label="N???n gi??o d???c" className="input-item">
          <Select placeholder="C??ng l???p" style={{ width: 152 }}>
            <Option value="value1">Th??ng</Option>
            <Option value="value2">N???a n??m</Option>
            <Option value="value3">N??m</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name2"
          label="H???c ph?? h???ng n??m"
          rules={[
            {
              required: true,
              message: "H???c ph?? h???ng n??m",
            },
          ]}>
          <InputNumber
            style={{ width: 152 }}
            initialvalues={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="name3"
          label="S??? con"
          rules={[
            {
              required: true,
              message: "S??? con",
            },
          ]}>
          <Input
            onChange={(e) => setNumberOfChildren(Number(e.target.value))}
            placeholder="0"
            type="number"
            min={0}
            max={4}
            style={{ width: 40 }}
          />
        </Form.Item>
        <Form.Item
          name="name4"
          label="S??? tu???i v??o ?????i h???c"
          rules={[
            {
              required: true,
              message: "S??? tu???i v??o ?????i h???c",
            },
          ]}>
          <Input
            placeholder="0"
            type="number"
            min={0}
            style={{ width: 40 }}
            onChange={(e) => setCollegeAge(Number(e.target.value))}
          />
        </Form.Item>
        {numberOfChildren > 0 && numberOfChildren < 5 && (
          <Form.Item
            name="name5"
            label="Tu???i con th??? nh???t"
            rules={[
              {
                required: true,
                message: "Tu???i con th??? nh???t",
              },
            ]}>
            <Input
              placeholder="0"
              type="number"
              min={0}
              style={{ width: 40 }}
              onChange={(e) => setFirstChildAge(Number(e.target.value))}
            />
          </Form.Item>
        )}
        {numberOfChildren > 1 && numberOfChildren < 5 && (
          <Form.Item
            name="name6"
            label="Tu???i con th??? 2"
            rules={[
              {
                required: true,
                message: "Tu???i con th??? 2",
              },
            ]}>
            <Input
              placeholder="0"
              type="number"
              min={0}
              style={{ width: 40 }}
              onChange={(e) => setSecondChildAge(Number(e.target.value))}
            />
          </Form.Item>
        )}
        {numberOfChildren > 2 && numberOfChildren < 5 && (
          <Form.Item
            name="name7"
            label="Tu???i con th??? 3"
            rules={[
              {
                required: true,
                message: "Tu???i con th??? 3",
              },
            ]}>
            <Input
              placeholder="0"
              type="number"
              min={0}
              style={{ width: 40 }}
              onChange={(e) => setThirdChildAge(Number(e.target.value))}
            />
          </Form.Item>
        )}
        {numberOfChildren > 3 && numberOfChildren < 5 && (
          <Form.Item
            name="name8"
            label="Tu???i con th??? 4"
            rules={[
              {
                required: true,
                message: "Tu???i con th??? 4",
              },
            ]}>
            <Input
              placeholder="0"
              type="number"
              min={0}
              style={{ width: 40 }}
              onChange={(e) => setFourthChildAge(Number(e.target.value))}
            />
          </Form.Item>
        )}
        <Form.Item
          name="name9"
          label="S??? n??m ?????i h???c"
          rules={[
            {
              required: true,
              message: "S??? n??m ?????i h???c",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 40 }} />
        </Form.Item>
        <Form.Item
          name="name10"
          label="T???ng ti???n ???? c??"
          rules={[
            {
              required: true,
              message: "T???ng ti???n ???? c??",
            },
          ]}>
          <InputNumber
            style={{ width: 152 }}
            initialvalues={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange1}
          />
        </Form.Item>
        <Form.Item
          name="name11"
          label="T??? l??? l???m ph??t"
          rules={[
            {
              required: true,
              message: "T??? l??? l???m ph??t",
            },
          ]}>
          <div className="percentage-field">
            <Input
              className="percentage-input"
              onChange={(e) => setInflationRate(Number(e.target.value))}
              placeholder="0"
              type="text"
              style={{ width: 45, paddingRight: 0 }}
              value={inflationRate}
            />
            <span className="pIcon">%</span>
          </div>
        </Form.Item>
        <Form.Item
          name="name12"
          label="T??? su???t sinh l???i h???ng n??m"
          rules={[
            {
              required: true,
              message: "T??? su???t sinh l???i h???ng n??m",
            },
          ]}>
          <Input placeholder="0" type="text" style={{ width: 40 }} />
        </Form.Item>

        <Form.Item
          name="name13"
          label="Chi ti??u h??ng th??ng"
          rules={[
            {
              required: true,
              message: "Chi ti??u h??ng th??ng",
            },
          ]}>
          <Input placeholder="0" type="number" min={0} style={{ width: 152 }} />
        </Form.Item>
      </div>
      <div className="container-right-bottom">
        <p className="bottom-para">
          T???ng s??? ti???n c???n cho t????ng lai:{" "}
          <span className="total-amount">
            {totalAmount > 0 &&
              totalAmount
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {(totalAmount < 1 || isNaN(totalAmount)) && "00.00"}
          </span>
        </p>
        <p>
          S??? ti???n c??n thi???u :{" "}
          <span className="total-amount">
            {grandTotalAmount > 0 &&
              grandTotalAmount
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {(grandTotalAmount < 1 || isNaN(grandTotalAmount)) && "00.00"}
          </span>
        </p>
      </div>

      <div className="container-right-submit">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Kh??ng c??n ti???m n??ng</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-primary">
            B???ng minh h???a
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ListCalculation;
