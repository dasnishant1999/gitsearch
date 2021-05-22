import React, { useContext } from "react";
import Column2d from "./Column2d";
import "./Charts.css";
import Pie2d from "./Pie2d";
import { GithubContext } from "../context/GithubContextProvider";

function Charts() {
  const { repos } = useContext(GithubContext);

  const repoData = repos.sort((a, b) => b.size - a.size).slice(0, 5);

  const sizeData = repoData.map((repo) => {
    return {
      label: repo.name,
      value: repo.size,
    };
  });

  const languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 7);

  return (
    <div className="charts">
      <div className="chart">
        <Column2d data={sizeData}></Column2d>
      </div>
      <div className="chart">
        <Pie2d data={mostUsed}></Pie2d>
      </div>
    </div>
  );
}

export default Charts;
