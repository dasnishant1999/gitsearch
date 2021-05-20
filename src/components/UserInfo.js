import React from "react";
import GithubUser from "../mockdata/mockUser";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import "./UserInfo.css";

function UserInfo() {
  var date = new Date(GithubUser.created_at);
  date = date.toDateString().slice(4);

  return (
    <div className="user-info">
      <img src={GithubUser.avatar_url} alt="profile-pic" />
      <h2>{GithubUser.name}</h2>
      <a href={GithubUser.html_url} className="username-link">
        @{GithubUser.login}
      </a>
      <div className="user-info-inline">
        <LocationOnIcon />
        {GithubUser.name && <p>{GithubUser.location}</p>}
      </div>
      <div className="user-info-inline">
        <LanguageIcon />
        {GithubUser.blog && <a href={GithubUser.blog}>{GithubUser.blog}</a>}
      </div>
      <div className="user-info-inline">
        <CalendarTodayIcon />
        <p>Joined github on {date}</p>
      </div>
      <p>Bio: {GithubUser.bio}</p>
    </div>
  );
}

export default UserInfo;
