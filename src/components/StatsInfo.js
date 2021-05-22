import React, { useContext } from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import "./StatsInfo.css";
import { GithubContext } from "../context/GithubContextProvider";

function StatsInfo() {
  const { githubUser } = useContext(GithubContext);

  const items = [
    {
      id: 1,
      label: "Repos",
      Icon: GoRepo,
      value: githubUser.public_repos,
      color: "pink",
    },
    {
      id: 2,
      label: "Gists",
      Icon: GoGist,
      value: githubUser.public_gists,
      color: "green",
    },
    {
      id: 3,
      label: "Followers",
      Icon: FiUsers,
      value: githubUser.followers,
      color: "purple",
    },
    {
      id: 4,
      label: "Following",
      Icon: FiUserPlus,
      value: githubUser.following,
      color: "yellow",
    },
  ];

  const Item = ({ label, Icon, value, color }) => {
    return (
      <>
        <div className="item">
          <span className={color}>
            <Icon className="icon"></Icon>
          </span>
          <div>
            <h2>{value}</h2>
            <p>{label}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="stats-info">
      {items.map((item) => {
        return <Item key={item.id} {...item}></Item>;
      })}
    </div>
  );
}

export default StatsInfo;
