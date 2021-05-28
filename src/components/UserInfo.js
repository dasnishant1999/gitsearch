import React, { useContext } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./UserInfo.css";
import { GithubContext } from "../context/GithubContextProvider";

function UserInfo() {
  const { githubUser } = useContext(GithubContext);

  var date = new Date(githubUser.created_at);
  date = date.toDateString().slice(4);
  return (
    <div className="user-info">
      <img src={githubUser.avatar_url} alt="profile-pic" />
      <div className=" user-info-content">
        <h2>{githubUser.name}</h2>
        <a
          href={githubUser.html_url}
          className="username-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{githubUser.login}
        </a>
        {githubUser.location && (
          <div className="user-info-inline">
            <LocationOnIcon />
            {githubUser.name && <p>{githubUser.location}</p>}
          </div>
        )}
        {githubUser.blog && (
          <div className="user-info-inline">
            <LanguageIcon />
            <a href={githubUser.blog} target="_blank" rel="noopener noreferrer">
              {githubUser.blog}
            </a>
          </div>
        )}
        <div className="user-info-inline">
          <CalendarTodayIcon />
          <p>Joined github on {date}</p>
        </div>
        {githubUser.bio && <p>Bio: {githubUser.bio}</p>}
      </div>
    </div>
  );
}

export default UserInfo;
