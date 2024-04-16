import {Link} from "react-router-dom";
import logo from '../../assets/logo.svg';

const Logo = () => {
	return (
		<Link to="/">
			<img
				src={logo}
				alt="logo"
				width={64}
				height={64}
			/>
		</Link>
	)
}

export default Logo;
