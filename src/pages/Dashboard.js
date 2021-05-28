import React, { useContext, useState } from "react";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import StatsInfo from "../components/StatsInfo";
import TimeLine from "../components/TimeLine";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Charts from "../components/Charts";
import { GithubContext } from "../context/GithubContextProvider";

const Dashboard = () => {
  const [value, setValue] = useState(0);

  const { error, loading, githubUser,repos } = useContext(GithubContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Header></Header>
      {loading ? (
        <img
          className="loader"
          src="./images/preloader.gif"
          alt="loading"
        ></img>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        githubUser &&
        repos && (
          <>
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
          </>
        )
      )}
    </main>
  );
};

export default Dashboard;
