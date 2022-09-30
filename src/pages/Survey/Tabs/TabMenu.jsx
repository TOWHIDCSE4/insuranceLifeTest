import { Tabs } from "antd";
import React from "react";
import SurveyTable from "../TableData/SurveyTable";
import { PersonalInfoForm } from "../TableData/PersonalInfoForm";

const TabMenu = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="I. Ý kiến khảo sát" key="1">
          <SurveyTable />
        </Tabs.TabPane>
        <Tabs.TabPane tab="II. Thông tin cá nhân" key="2">
          <PersonalInfoForm />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default TabMenu;
