import { Typography } from "antd";

import "./index.scss";
import Row from "../row";

interface Props {
	repos: any[];
	user: string;
}

export default function Table({ repos, user }: Props) {
	return (
		<div className="table">
			<Typography.Title level={4} className="title">
				{user}'s repositories
			</Typography.Title>
			<div className="table-content">
				{repos.map((repo, i) => (
					<Row key={i} {...repo} />
				))}
			</div>
		</div>
	);
}
