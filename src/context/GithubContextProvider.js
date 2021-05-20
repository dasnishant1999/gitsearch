import React, { createContext, useState } from "react";
import mockUser from "../mockdata/mockUser";
import mockRepos from "../mockdata/mockRepos";

const rootUrl = "https://api.github.com";

export const GithubContext = createContext();

function GithubContextProvider({ children }) {
  const [githubUser, setgithubUser] = useState(mockUser);
  const [repos, setrepos] = useState(mockRepos);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState({ show: false, msg: "" });

  return <GithubContext.Provider>{children}</GithubContext.Provider>;
}

export default GithubContextProvider;
