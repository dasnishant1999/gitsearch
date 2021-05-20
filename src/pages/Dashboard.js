import React, { useState } from "react";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import StatsInfo from "../components/StatsInfo";
import TimeLine from "../components/TimeLine";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Charts from "../components/Charts";

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Header></Header>
      <UserInfo></UserInfo>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Stats" />
        <Tab label="Timeline" />
      </Tabs>
      {value === 0 && (
        <>
          <StatsInfo></StatsInfo>
          <Charts></Charts>
        </>
      )}
      {value === 1 && <TimeLine></TimeLine>}
    </main>
  );
};

export default Dashboard;
