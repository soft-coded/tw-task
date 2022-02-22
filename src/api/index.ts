import axios from "axios";

const baseURL = "https://api.github.com/users";
const timeout = 15000;

const apiClient = axios.create({ baseURL, timeout });

export const getUserRepos = (username: string) =>
	apiClient.get(username + "/repos");
