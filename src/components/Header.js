import React, { useContext, useState } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";
import { GithubContext } from "../context/GithubContextProvider";

function Header() {
  const [input, setinput] = useState("");

  const { searchGithubUser } = useContext(GithubContext);

  const searchUser = (e) => {
    e.preventDefault();
    if (!(input.trim() === "")) {
      searchGithubUser(input);
    }
  };

  return (
    <div className="header">
      <h2> GitSearch</h2>
      <form onSubmit={searchUser}>
        <input
          className="search-input"
          placeholder="Enter Github Username"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        ></input>
        <button className="search-btn">
          <SearchRoundedIcon />
        </button>
      </form>
    </div>
  );
}

export default Header;
