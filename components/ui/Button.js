import Link from "next/link";
import {ButtonStyleWrapper} from "../../styles/components/ButtonStyle";

const Button = ({children, href}) => {
	return (
		<Link href={`/${href}`} legacyBehavior>
			<ButtonStyleWrapper>
				{children}
			</ButtonStyleWrapper>
		</Link>
	);
};

export default Button;