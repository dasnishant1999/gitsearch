import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2> GitSearch</h2>
      <form>
        <input
          className="search-input"
          placeholder="Enter Github Username"
        ></input>
        <button className="search-btn">
          <SearchRoundedIcon />
        </button>
      </form>
    </div>
  );
}

export default Header;
