import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Checkbox, Empty, Input } from "antd";
import TableCommon from "../../../components/common/TableNormal";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { SurveyForm } from "./SurveyForm";
import { Checkbox as CheckboxControl } from "../../../components/controls";
import { ClosingModal } from "../Modals/ClosingModal";
import { createSurvey } from "../../../slices/surveys";
import { isEmpty } from "lodash";

const CustomerServeyTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState([]);
  const [dataTables, setDataTables] = useState([]);
  const [formValue, setFromValue] = useState({});
  const [formValues, setFromValues] = useState([]);

  console.log("formValue", formValue);
  console.log("dataTable", dataTable);

  //get data from redux
  const { surveys, customers } = useSelector((state) => state);
  const { selectedCustomer } = customers;
  const { finance, influence, priority, others, ...value } = surveys?.survey;
  const financeValue = finance ? JSON.parse(finance) : {};
  const influenceValue = influence ? JSON.parse(influence) : {};
  const priorityValue = priority ? JSON.parse(priority) : {};
  const othersValue = others ? JSON.parse(others) : {};

  console.log("selectedCustomer", selectedCustomer?.customerId);

  const methods = useForm({
    mode: "all",
    defaultValues: {
      other1: [],
      other2: [],
      other3: [],
      other4: [],
      potential: false,
      hintName: "",
    },
  });
  const { watch, control, reset } = methods;

  //generate form form data
  useEffect(() => {
    if (isEmpty(surveys?.survey) && selectedCustomer?.customerId) {
      const formInfos = [...formValues];
      if (formInfos?.length === 0) {
        formInfos.push(generateFormData(selectedCustomer?.customerId));
      } else {
        const isIdExist = formInfos.some((item) => item?.id === selectedCustomer?.customerId);
        if (!isIdExist) {
          formInfos.push(generateFormData(selectedCustomer?.customerId));
        }
      }
      setFromValues(formInfos);
    }
  }, [selectedCustomer, surveys?.survey]);
  useEffect(() => {
    if (isEmpty(surveys?.survey) && selectedCustomer?.customerId) {
      const dataInfos = [...dataTables];
      if (dataInfos.length === 0) {
        dataInfos.push(generateTableData(selectedCustomer?.customerId));
      } else {
        const isIdExist = dataInfos.some((item) => item.customerId === selectedCustomer?.customerId);
        if (!isIdExist) {
          dataInfos.push(generateTableData(selectedCustomer?.customerId));
        }
      }
      setDataTables(dataInfos);
    }
  }, [selectedCustomer, surveys?.survey]);

  useEffect(() => {
    const tData =
      selectedCustomer?.customerId && dataTables?.length > 0
        ? dataTables?.find((item) => item.customerId === selectedCustomer?.customerId)
        : {};

    if (!isEmpty(tData)) {
      setDataTable(tData?.data);
    }
  }, [dataTables]);

  useEffect(() => {
    const fData =
      selectedCustomer?.customerId && formValues?.length > 0
        ? formValues?.find((item) => item?.id === selectedCustomer?.customerId)
        : {};
    if (!isEmpty(fData)) {
      setFromValue(fData);
      reset({
        other1: fData?.others?.other1,
        other2: fData?.others?.other1,
        other3: fData?.others?.other1,
        other4: fData?.others?.other1,
        potential: fData?.isPotential,
        hintName: fData?.hintName,
      });
    }
  }, [formValues, selectedCustomer?.customerId]);

  //for checkbox group
  const watchOther1 = watch("other1", []);
  const watchOther2 = watch("other2", []);
  const watchOther3 = watch("other3", []);
  const watchOther4 = watch("other4", []);
  const watchPotential = watch("potential", false);
  const watchHintName = watch("hintName", "");

  useEffect(() => {
    if (isEmpty(surveys?.survey) && formValues?.length > 0) {
      const formInfos = [...formValues];
      const currentIndex = formInfos?.findIndex((item) => item?.id === selectedCustomer?.customerId);
      const selectedFormInfo = formInfos[currentIndex];
      selectedFormInfo["hintName"] = watchHintName;
      selectedFormInfo["isPotential"] = watchPotential;
      selectedFormInfo["others"]["other1"] = watchOther1;
      selectedFormInfo["others"]["other2"] = watchOther2;
      selectedFormInfo["others"]["other3"] = watchOther3;
      selectedFormInfo["others"]["other4"] = watchOther4;
      formInfos[currentIndex] = selectedFormInfo;
    }
  }, [watchOther1, watchOther2, watchOther3, watchOther4, watchPotential, watchHintName]);

  // for survey details
  useEffect(() => {
    if (!isEmpty(surveys?.survey)) {
      const tableData = [
        {
          key: 1,
          type: "Qu??? d??? ph??ng ?????m b???o t??i ch??nh cho ng?????i m?? anh/ch??? y??u th????ng",
          infulence: "",
          infulence1: influenceValue?.family === 1 ? 1 : "",
          infulence2: influenceValue?.family === 2 ? 2 : "",
          infulence3: influenceValue?.family === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.family?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.family?.ans1 === 2 ? 2 : "",
          money: financeValue?.family?.ans2,
          prior: priorityValue?.family,
          label: "family",
        },
        {
          key: 2,
          type: "Qu??? ?????m b???o ho??n th??nh b???c c??? nh??n",
          infulence: "",
          infulence1: influenceValue?.bachelor === 1 ? 1 : "",
          infulence2: influenceValue?.bachelor === 2 ? 2 : "",
          infulence3: influenceValue?.bachelor === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.bachelor?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.bachelor?.ans1 === 2 ? 2 : "",
          money: financeValue?.bachelor?.ans2,
          prior: priorityValue?.bachelor,
          label: "bachelor",
        },
        {
          key: 3,
          type: "Qu??? kh???i nghi???p ch???p c??nh cho con v??o ?????i",
          infulence: "",
          infulence1: influenceValue?.son === 1 ? 1 : "",
          infulence2: influenceValue?.son === 2 ? 2 : "",
          infulence3: influenceValue?.son === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.son?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.son?.ans1 === 2 ? 2 : "",
          money: financeValue?.son?.ans2,
          prior: priorityValue?.son,
          label: "son",
        },
        {
          key: 4,
          type: "Qu??? l????ng h??u t??? n??m 61-85 tu???i",
          infulence: "",
          infulence1: influenceValue?.retire === 1 ? 1 : "",
          infulence2: influenceValue?.retire === 2 ? 2 : "",
          infulence3: influenceValue?.retire === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.retire?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.retire?.ans1 === 2 ? 2 : "",
          money: financeValue?.retire?.ans2,
          prior: priorityValue?.retire,
          label: "retire",
        },
        {
          key: 5,
          type: "Qu??? ?????u t?? g???p ????i t??i s???n",
          infulence: "",
          infulence1: influenceValue?.doubleAsset === 1 ? 1 : "",
          infulence2: influenceValue?.doubleAsset === 2 ? 2 : "",
          infulence3: influenceValue?.doubleAsset === 3 ? 3 : "",
          finance: "",
          finance1: financeValue?.doubleAsset?.ans1 === 1 ? 1 : "",
          finance2: financeValue?.doubleAsset?.ans2 === 2 ? 2 : "",
          money: financeValue?.doubleAsset?.ans2,
          prior: priorityValue?.doubleAsset,
          label: "doubleAsset",
        },
      ];
      setDataTable(tableData);
      reset({
        other1: othersValue?.ans1,
        other2: othersValue?.ans2,
        other3: othersValue?.ans3,
        other4: othersValue?.ans4,
        potential: value?.isPotential,
        hintName: value?.hintName,
      });
    }
  }, [surveys?.survey]);

  const handleCheckboxChangeFactory = (rowIndex, columnKey) => (event) => {
    const tableInfos = [...dataTables];
    const currentIndex = tableInfos.findIndex((item) => item.customerId === selectedCustomer?.customerId);
    const selectedTableInfo = tableInfos[currentIndex];
    const newCheckboxState = [...selectedTableInfo?.data];

    if (["infulence1", "infulence2", "infulence3"].includes(columnKey)) {
      let infulence = "";
      let inful1 = "";
      let inful2 = "";
      let inful3 = "";
      let infulValue = event.target.value;
      if (columnKey === "infulence1") {
        infulence = infulValue;
        inful1 = infulValue;
      } else if (columnKey === "infulence2") {
        infulence = infulValue;
        inful2 = infulValue;
      } else if (columnKey === "infulence3") {
        infulence = infulValue;
        inful3 = infulValue;
      }
      newCheckboxState[rowIndex]["infulence"] = infulence;
      newCheckboxState[rowIndex]["infulence1"] = inful1;
      newCheckboxState[rowIndex]["infulence2"] = inful2;
      newCheckboxState[rowIndex]["infulence3"] = inful3;
    }

    if (["finance1", "finance2"].includes(columnKey)) {
      let finance = "";
      let finance1 = "";
      let finance2 = "";
      let financeValue = event.target.value;
      if (columnKey === "finance1") {
        finance = financeValue;
        finance1 = financeValue;
      } else if (columnKey === "finance2") {
        finance = financeValue;
        finance2 = financeValue;
      }
      newCheckboxState[rowIndex]["finance"] = finance;
      newCheckboxState[rowIndex]["finance1"] = finance1;
      newCheckboxState[rowIndex]["finance2"] = finance2;
    }

    selectedTableInfo["data"] = newCheckboxState;
    tableInfos[currentIndex] = selectedTableInfo;
    setDataTables(tableInfos);
  };

  const handleInput = (rowIndex, columnKey) => (event) => {
    const tableInfos = [...dataTables];
    const currentIndex = tableInfos.findIndex((item) => item.customerId === selectedCustomer?.customerId);
    const selectedTableInfo = tableInfos[currentIndex];
    const newCheckboxState = [...selectedTableInfo?.data];
    newCheckboxState[rowIndex][columnKey] = event.target.value;
    selectedTableInfo["data"] = newCheckboxState;
    tableInfos[currentIndex] = selectedTableInfo;
    setDataTables(tableInfos);
  };

  const columns = [
    {
      title: "N???n t???ng c???a s??? gi??u c??",
      dataIndex: "type",
      key: "type",
      width: "25%",
      fixed: "left",
    },
    {
      title: "M???c ????? ???nh h?????ng",
      width: "33%",
      children: [
        {
          title: "R???t quan tr???ng",
          dataIndex: "infulence1",
          key: "infulence1",
          render: (value, record, rowIndex) => (
            <Checkbox checked={value} value="1" onChange={handleCheckboxChangeFactory(rowIndex, "infulence1")} />
          ),
        },
        {
          title: "Quan tr???ng",
          dataIndex: "infulence2",
          key: "infulence2",
          render: (value, record, rowIndex) => (
            <Checkbox checked={value} value="2" onChange={handleCheckboxChangeFactory(rowIndex, "infulence2")} />
          ),
        },
        {
          title: "??t quan tr???ng",
          dataIndex: "infulence3",
          key: "infulence3",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              value="3"
              onChange={handleCheckboxChangeFactory(rowIndex, "infulence3")}
            />
          ),
        },
      ],
    },
    {
      title: "X??y d???ng v????ng qu???c t??i ch??nh",
      width: "34%",
      children: [
        {
          title: "Ch??a c??",
          dataIndex: "finance1",
          key: "finance1",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              value="1"
              onChange={handleCheckboxChangeFactory(rowIndex, "finance1")}
            />
          ),
        },
        {
          title: "???? c??",
          dataIndex: "finance2",
          key: "finance2",
          render: (value, record, rowIndex) => (
            <Checkbox
              className="radius-5"
              checked={value}
              value="2"
              onChange={handleCheckboxChangeFactory(rowIndex, "finance2")}
            />
          ),
        },
        {
          title: "S??? ti???n (1000??)",
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
      title: "TT ??u ti??n",
      dataIndex: "prior",
      width: "8%",
      key: "prior",
      render: (value, record, rowIndex) => (
        <Input
          style={{ backgroundColor: "#F8F8F8", border: 0 }}
          className="radius-10 "
          value={value}
          onChange={handleInput(rowIndex, "prior")}
        />
      ),
    },
  ];

  const table = useMemo(() => {
    if (!!dataTable && dataTable.length > 0) {
      return <TableCommon dataSource={dataTable} columnTable={columns} bordered></TableCommon>;
    } else {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
  }, [dataTable]);

  const onSubmit = () => {
    const familyData = dataTable.find((data) => data.label === "family");
    const bachelorData = dataTable.find((data) => data.label === "bachelor");
    const sonData = dataTable.find((data) => data.label === "son");
    const retireData = dataTable.find((data) => data.label === "retire");
    const doubleAssetData = dataTable.find((data) => data.label === "doubleAsset");

    const submitFormData = {
      apptId: 0,
      customerId: selectedCustomer?.customerId,
      influence: {
        family: +familyData?.infulence,
        bachelor: +bachelorData?.infulence,
        son: +sonData?.infulence,
        retire: +retireData?.infulence,
        doubleAsset: +doubleAssetData?.infulence,
      },
      finance: {
        family: {
          ans1: +familyData?.finance,
          ans2: +familyData?.money,
        },
        bachelor: {
          ans1: +bachelorData?.finance,
          ans2: +bachelorData?.money,
        },
        son: {
          ans1: +sonData?.finance,
          ans2: +sonData?.money,
        },
        retire: {
          ans1: +retireData?.finance,
          ans2: +retireData?.money,
        },
        doubleAsset: {
          ans1: +doubleAssetData?.finance,
          ans2: +doubleAssetData?.money,
        },
      },
      others: {
        ans1: formValue?.others?.other1,
        ans2: formValue?.others?.other2,
        ans3: formValue?.others?.other3,
        ans4: formValue?.others?.other4,
      },
      prior: {
        family: +familyData?.prior,
        bachelor: +bachelorData?.prior,
        son: +sonData?.prior,
        retire: +retireData?.prior,
        doubleAsset: +doubleAssetData?.prior,
      },
      hintName: formValue?.hintName,
      isPotential: formValue?.isPotential,
    };
    dispatch(createSurvey(submitFormData));

    console.log("form data", submitFormData);
  };

  return (
    <FormProvider {...methods}>
      <form>
        <div>
          <h2 className="title">{t("survey.formTitle.title1")}</h2>
          <div className="">{table}</div>
        </div>
        <SurveyForm />

        {isEmpty(surveys?.survey) && (
          <div className="container-right-submit">
            <div>
              <CheckboxControl control={control} name="potential" label="Kh??ng c??n ti???m n??ng" />
            </div>
            <div>
              <ClosingModal onSubmit={onSubmit} />
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default CustomerServeyTable;

const generateTableData = (id) => {
  return {
    customerId: id,
    data: [
      {
        key: 1,
        type: "Qu??? d??? ph??ng ?????m b???o t??i ch??nh cho ng?????i m?? anh/ch??? y??u th????ng",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 1,
        label: "family",
      },
      {
        key: 2,
        type: "Qu??? ?????m b???o ho??n th??nh b???c c??? nh??n",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 2,
        label: "bachelor",
      },
      {
        key: 3,
        type: "Qu??? kh???i nghi???p ch???p c??nh cho con v??o ?????i",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 3,
        label: "son",
      },
      {
        key: 4,
        type: "Qu??? l????ng h??u t??? n??m 61-85 tu???i",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 4,
        label: "retire",
      },
      {
        key: 5,
        type: "Qu??? ?????u t?? g???p ????i t??i s???n",
        infulence: "",
        infulence1: "",
        infulence2: "",
        infulence3: "",
        finance: "",
        finance1: "",
        finance2: "",
        money: "12000",
        prior: 5,
        label: "doubleAsset",
      },
    ],
  };
};

const generateFormData = (id) => {
  return {
    id: id,
    others: {
      other1: [],
      other2: [],
      other3: [],
      other4: [],
    },
    hintName: "",
    isPotential: false,
  };
};
