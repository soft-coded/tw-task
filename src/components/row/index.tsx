import { Typography } from "antd";
import "./index.scss";

interface Props {
	name: string;
	stars: number;
}

export default function Row({ name, stars }: Props) {
	return (
		<div className="row">
			<Typography.Paragraph className="name">{name}</Typography.Paragraph>
			<Typography.Paragraph className="stars">
				{stars} stars
			</Typography.Paragraph>
		</div>
	);
}
