import React, { createContext, useEffect, useState } from "react";
import mockUser from "../mockdata/mockUser";
import mockRepos from "../mockdata/mockRepos";
import axios from "axios";

const rootUrl = "https://api.github.com";

export const GithubContext = createContext();

function GithubContextProvider({ children }) {
  const [githubUser, setgithubUser] = useState(mockUser);
  const [repos, setrepos] = useState(mockRepos);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    const getTorvalds = async () => {
      setloading(true);
      seterror("");
      const response = await axios
        .get(`${rootUrl}/users/torvalds`)
        .catch((error) => console.log(error));
      console.log(response);
      if (response) {
        setgithubUser(response.data);
        const repos = await axios
          .get(`${rootUrl}/users/torvalds/repos?sort=created`)
          .catch((error) => console.log(error));
        repos ? setrepos(repos.data) : seterror("Could'nt get repositories");
      } else {
        seterror("Sorry, no user found");
      }
      setloading(false);
    };

    getTorvalds();
  }, []);

  const searchGithubUser = async (user) => {
    setloading(true);
    seterror("");
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((error) => console.log(error));
    console.log(response);
    if (response) {
      setgithubUser(response.data);
      const repos = await axios
        .get(`${rootUrl}/users/${user}/repos?sort=created`)
        .catch((error) => console.log(error));
      repos ? setrepos(repos.data) : seterror("Could'nt get repositories");
    } else {
      seterror("Sorry, no user found");
    }
    setloading(false);
  };

  const value = {
    githubUser,
    repos,
    error,
    loading,
    searchGithubUser,
  };

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
}

export default GithubContextProvider;
