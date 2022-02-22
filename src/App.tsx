import { useState, useCallback } from "react";

import Header from "./components/header";
import { getUserRepos } from "./api";
import Table from "./components/table";

let staticUser: string;

export default function App() {
	const [user, setUser] = useState("");
	const [repos, setRepos] = useState([]);
	const [error, setError] = useState("");

	const fetchRepos = useCallback(async () => {
		try {
			setError("");
			setRepos([]);
			staticUser = user;
			const res = (await getUserRepos(user)).data;
			const reposDataArr = res.map((repo: any) => ({
				name: repo.name,
				stars: repo.stargazers_count
			}));
			setRepos(reposDataArr);
		} catch (err: any) {
			setError(
				err.response?.data.message || err.message || "Something went wrong"
			);
		}
	}, [user]);

	return (
		<main className="flex-center">
			<Header
				user={user}
				setUser={setUser}
				fetchRepos={fetchRepos}
				error={error}
			/>
			{repos.length > 0 && <Table repos={repos} user={staticUser} />}
		</main>
	);
}
