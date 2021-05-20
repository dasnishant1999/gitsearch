import React from "react";
import GithubUser from "../mockdata/mockUser";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import "./StatsInfo.css";

function StatsInfo() {
  const items = [
    {
      id: 1,
      label: "Repos",
      Icon: GoRepo,
      value: GithubUser.public_repos,
      color: "pink",
    },
    {
      id: 2,
      label: "Gists",
      Icon: GoGist,
      value: GithubUser.public_gists,
      color: "green",
    },
    {
      id: 3,
      label: "Followers",
      Icon: FiUsers,
      value: GithubUser.followers,
      color: "purple",
    },
    {
      id: 4,
      label: "Following",
      Icon: FiUserPlus,
      value: GithubUser.following,
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
