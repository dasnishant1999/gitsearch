import React, { useContext } from "react";
import { GoRepo, GoStar, GoRepoForked } from "react-icons/go";
import { GithubContext } from "../context/GithubContextProvider";

import "./TimeLine.css";

function TimeLine() {
  const { repos } = useContext(GithubContext);

  repos.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const Item = ({ repo }) => {
    var date = new Date(repo.created_at);
    date = date.toDateString().slice(4);
    return (
      <div className="timeline-item">
        <strong>{date}</strong>
        <div className="timeline-item-details">
          <div className="repo-name">
            <GoRepo style={{ fontSize: "1.3rem", marginRight: "5px" }} />
            <h3>{repo.name}</h3>
          </div>
          <p style={{ wordBreak: "break-word" }}> {repo.description}</p>
          <div className="timeline-item-stats">
            <div className="stats-row">
              <p>{repo.language}</p>
              <div className="stats">
                <GoStar style={{ marginRight: "5px" }} />
                <p>{repo.stargazers_count}</p>
              </div>
              <div className="stats">
                <GoRepoForked style={{ marginRight: "5px" }} />
                <p>{repo.forks}</p>
              </div>
            </div>

            <p>{repo.size}Kb</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="timeline">
      {repos.map((repo) => (
        <Item key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default TimeLine;
