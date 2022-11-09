import Link from "next/link";
import {Button} from "../../styles/components/DarkButtonStyle";

const DarkButton = ({href, children, props}) => {
	return (
		<Link href={`/${href}`} legacyBehavior scroll={false}>
			<Button {...props}>
				{children}
			</Button>
		</Link>

	);
};

export default DarkButton;