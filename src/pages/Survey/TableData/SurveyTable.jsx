import React, { useState, useMemo, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox, Empty, Form, Input } from "antd";
import { ClosingModal } from "../Modals/ClosingModal";
import TableCommon from "../../../components/common/TableNormal";
const CustomerServeyTable = () => {
  const { t } = useTranslation();
  const rowData = [...Array(10)].map((v, i) => {
    return {
      key: i + 1,
      type: "qũy đầu tư",
      infulence: 1,
      infulence2: false,
      infulence3: true,
      have: true,
      nothave: false,
      money: "12000",
      order: i + 1,
    };
  });

  const [dataTable, setDataTable] = useState(rowData);

  const handleCheckboxChangeFactory = (rowIndex, columnKey) => (event) => {
    const newCheckboxState = [...dataTable];
    newCheckboxState[rowIndex][columnKey] = event.target.checked;
    setDataTable(newCheckboxState);
  };

  const handleInput = (rowIndex, columnKey) => (event) => {
    const newCheckboxState = [...checkboxState];
    newCheckboxState[rowIndex][columnKey] = event.target.value;
    setDataTable(newCheckboxState);
  };

  const columns = [
    {
      title: "Nền tảng của sự giàu có",
      dataIndex: "type",
      key: "type",
      width: "25%",
      fixed: "left",
    },
    {
      title: "infulence level",
      width: "33%",
      children: [
        {
          title: "Rất quan trọng",
          dataIndex: "infulence1",
          key: "infulence1",
          render: (value, record, rowIndex) => (
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "infulence1")}
            />
          ),
        },
        {
          title: "Quan trọng",
          dataIndex: "infulence2",
          key: "infulence2",
          render: (value, record, rowIndex) => (
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "infulence2")}
            />
          ),
        },
        {
          title: "Ít quan trọng",
          dataIndex: "infulence3",
          key: "infulence3",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "infulence3")}
            />
          ),
        },
      ],
    },
    {
      title: "Xây dựng vương quốc tài chính",
      width: "34%",
      children: [
        {
          title: "Chưa có",
          dataIndex: "nothave",
          key: "nothave",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "nothave")}
            />
          ),
        },
        {
          title: "Đã có",
          dataIndex: "have",
          key: "have",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "have")}
            />
          ),
        },
        {
          title: "Số tiền (1000đ)",
          dataIndex: "money",
          key: "money",
          render: (value, record, rowIndex) => (
            <Input
              style={{ backgroundColor: "#F8F8F8", border: 0 }}
              className="radius-10"
              value={value}
              onChange={handleInput(rowIndex, "money")}
            />
          ),
        },
      ],
    },
    {
      title: "TT ưu tiên",
      dataIndex: "order",
      width: "8%",
      key: "order",
      render: (value, record, rowIndex) => (
        <Input
          style={{ backgroundColor: "#F8F8F8", border: 0 }}
          className="radius-10 "
          value={value}
          onChange={handleInput(rowIndex, "order")}
        />
      ),
    },
  ];

  const table = useMemo(() => {
    if (!!dataTable && dataTable.length > 0) {
      return (
        <TableCommon
          dataSource={dataTable}
          columnTable={columns}
          bordered></TableCommon>
      );
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
  }, [dataTable]);
  return (
    <Fragment>
      <Form>
        <div>
          {/* table  */}
          <h2 className="title">{t("survey.formTitle.title1")}</h2>
          <div className="">{table}</div>
        </div>
        {/* inheritance-box-1 */}
        <div>
          <h2 className="inheritance-title">{t("survey.formTitle.title2")}</h2>
          <div className="inheritance-box-1">
            <Form.Item name="ch1" valuePropName="checked">
              <Checkbox className="checkbox-item">Có</Checkbox>
            </Form.Item>
            <Form.Item name="ch2" valuePropName="checked">
              <Checkbox className="checkbox-item">Trên 1.000.000 USD</Checkbox>
            </Form.Item>
            <Form.Item name="ch3" valuePropName="checked">
              <Checkbox className="checkbox-item">Không</Checkbox>
            </Form.Item>
          </div>
        </div>
        {/* inheritance-box-2  */}
        <div>
          <h2 className="inheritance-title">{t("survey.formTitle.title3")}</h2>
          <div className="inheritance-box-2">
            <Form.Item name="ch4" valuePropName="checked">
              <Checkbox className="checkbox-item">Vàng, đô la</Checkbox>
            </Form.Item>
            <Form.Item name="ch5" valuePropName="checked">
              <Checkbox className="checkbox-item">Ngân hàng</Checkbox>
            </Form.Item>
            <Form.Item name="ch6" valuePropName="checked">
              <Checkbox className="checkbox-item">Bảo hiểm</Checkbox>
            </Form.Item>
            <Form.Item name="ch7" valuePropName="checked">
              <Checkbox className="checkbox-item">Khác</Checkbox>
            </Form.Item>
          </div>
        </div>

        {/* inheritance-box-3  */}
        <div>
          <h2 className="inheritance-title">{t("survey.formTitle.title4")}</h2>
          <div className="inheritance-box-2">
            <Form.Item name="ch8" valuePropName="checked">
              <Checkbox className="checkbox-item">Tiết kiệm không đều</Checkbox>
            </Form.Item>
            <Form.Item name="ch9" valuePropName="checked">
              <Checkbox className="checkbox-item">
                Mất kiểm soát chi tiêu
              </Checkbox>
            </Form.Item>
            <Form.Item name="ch10" valuePropName="checked">
              <Checkbox className="checkbox-item">Thâm hụt</Checkbox>
            </Form.Item>
            <Form.Item name="ch11" valuePropName="checked">
              <Checkbox className="checkbox-item">Đầu tư sai</Checkbox>
            </Form.Item>
          </div>
        </div>

        {/* inheritance-box-4  */}
        <div>
          <h2 className="inheritance-title">{t("survey.formTitle.title5")}</h2>
          <div className="inheritance-box-1">
            <Form.Item name="ch11" valuePropName="checked">
              <Checkbox className="checkbox-item">
                Đầu tư dần để có tài sản
              </Checkbox>
            </Form.Item>
            <Form.Item name="ch12" valuePropName="checked">
              <Checkbox className="checkbox-item">
                Mua tài sản đảm bảo không lãi thanh toán dần với 20% thu nhập
              </Checkbox>
            </Form.Item>
            <Form.Item name="ch13" valuePropName="checked">
              <Checkbox className="checkbox-item">Khác</Checkbox>
            </Form.Item>
          </div>
        </div>
        <div className="container-right-submit">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Không còn tiềm năng</Checkbox>
          </Form.Item>
          <Form.Item>
            {/* <Button type="primary" htmlType="submit" className="btn-primary">
            {t("survey.save")}
          </Button> */}
            <ClosingModal />
          </Form.Item>
        </div>
      </Form>
    </Fragment>
  );
};

export default CustomerServeyTable;
