import { FormEvent, useState } from "react";
import { Typography, Input, Button } from "antd";

import "./index.scss";

interface Props {
	setUser: React.Dispatch<React.SetStateAction<string>>;
	user: string;
	fetchRepos: () => Promise<void>;
	error: string;
}

export default function Header({ setUser, user, fetchRepos, error }: Props) {
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setIsLoading(true);
		await fetchRepos();
		setIsLoading(false);
	}

	return (
		<>
			<header className="flex-center app-header">
				<div className="flex-center title">
					<div className="image-container">
						<img
							src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
							alt="Github logo"
						/>
					</div>
					<Typography.Title ellipsis>Github repos lister</Typography.Title>
				</div>
				<form className="flex-center search-bar" onSubmit={handleSubmit}>
					<Input
						placeholder="Enter Github username"
						required
						size="large"
						bordered
						value={user}
						onChange={e => setUser(e.target.value)}
						autoFocus
					/>
					<Button
						htmlType="submit"
						size="large"
						type="primary"
						disabled={!user}
						loading={isLoading}
					>
						Search
					</Button>
				</form>
			</header>
			{error && (
				<Typography.Paragraph className="error">{error}</Typography.Paragraph>
			)}
		</>
	);
}
