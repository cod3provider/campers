import data from './headerData.json';
import {NavLink} from "react-router-dom";

import s from './Navlist.module.scss';

const NavList = () => {
	const items = data.header.map(({id, name, route}) =>
		<li key={id}>
			<NavLink to={route}>
				{name}
			</NavLink>
		</li>
	)

	return (
		<ul className={s.list}>
			{items}
		</ul>
	)
}

export default NavList;
