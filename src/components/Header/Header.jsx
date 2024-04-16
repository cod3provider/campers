import Container from "../common/Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";
import NavList from "./NavList/NavList.jsx";

import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<Logo/>
				<NavList/>
			</div>
		</header>
	)
}

export default Header;
